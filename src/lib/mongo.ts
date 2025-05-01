import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI!;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Estensione globale per evitare errori TypeScript
declare global {
    // eslint-disable-next-line no-var
    var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

// ✅ Funzione utile per accedere al database "dashboard"
export const connectToDatabase = async (): Promise<{ client: MongoClient; db: Db }> => {
    const client = await clientPromise;
    const db = client.db("dashboard"); // 🔥 nome DB forzato
    return { client, db };
};

export default clientPromise;
