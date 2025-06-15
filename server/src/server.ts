// src/server.ts
import dotenv from 'dotenv';
import app from './app';
import { connectToDatabase } from './db';

dotenv.config();

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    // await connectToDatabase();
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Server startup failed:', error);
  }
}

startServer();
