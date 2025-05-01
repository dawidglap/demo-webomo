import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "@/lib/mongo"; // usa la nuova funzione

export async function POST(req: NextRequest) {
    try {
        const { userId } = await req.json();

        console.log("🧪 userId ricevuto:", userId);

        if (!userId || !ObjectId.isValid(userId)) {
            console.warn("⚠️ userId non valido");
            return NextResponse.json({ error: "Invalid or missing userId" }, { status: 400 });
        }

        const { db } = await connectToDatabase(); // ✅ DB forzato su "dashboard"
        const collection = db.collection("referral_clicks");

        const result = await collection.insertOne({
            userId: new ObjectId(userId),
            timestamp: new Date(),
            userAgent: req.headers.get("user-agent"),
            ip: req.headers.get("x-forwarded-for") || req.headers.get("host"),
        });

        console.log("✅ Inserito referral:", result.insertedId);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("❌ Referral tracking error:", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
