import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

//db.ts 
dotenv.config();

const uri = process.env.MONGODB_URI as string;

if (!uri) {
  throw new Error("❌ MONGODB_URI is not defined in your .env file");
}

// Création du client MongoDB
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Fonction pour établir la connexion
export async function connectToDatabase() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Successfully connected to MongoDB");
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:", error);
    process.exit(1);
  }
}

// Export du client MongoDB pour pouvoir l’utiliser dans d’autres fichiers
export default client;
