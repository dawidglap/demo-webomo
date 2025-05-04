import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "@/lib/mongo"; // usa la tua funzione

export async function POST(req: NextRequest) {
    try {
        const { userId } = await req.json();

        console.log("🧪 userId ricevuto:", userId);

        if (!userId || !ObjectId.isValid(userId)) {
            console.warn("⚠️ userId non valido");
            return NextResponse.json(
                { error: "Invalid or missing userId" },
                { status: 400 }
            );
        }

        const { db } = await connectToDatabase();
        const collection = db.collection("referral_clicks");

        const ip =
            req.headers.get("x-forwarded-for") || req.headers.get("host") || "unknown";
        const now = new Date();
        const tenSecondsAgo = new Date(now.getTime() - 10_000);

        // 🔒 Check for duplicates in the last 10 seconds
        const existing = await collection.findOne({
            userId: new ObjectId(userId),
            ip,
            timestamp: { $gte: tenSecondsAgo },
        });

        if (existing) {
            console.log("⚠️ Duplicate click ignored (last 10s)");
            return NextResponse.json({ success: true, duplicate: true });
        }

        // ✅ Save new click
        const result = await collection.insertOne({
            userId: new ObjectId(userId),
            timestamp: now,
            userAgent: req.headers.get("user-agent") || "unknown",
            ip,
        });

        console.log("✅ Inserito referral:", result.insertedId);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("❌ Referral tracking error:", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
