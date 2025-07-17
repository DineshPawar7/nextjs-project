import mongoose, { Connection, mongo } from "mongoose";

type connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("already connected to databse");
        return
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {})

        connection.isConnected = db.connections[0].
        readyState

        console.log("DB connected succesfully");

    } catch (error) {
        console.log("db connection error")
        process.exit(1)
    }
}
    
export default dbConnect;