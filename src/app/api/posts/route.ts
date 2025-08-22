import { NextResponse } from "next/server";
import MongooseConnection from "../../../utils/db"
import Post from "../../../models/Post";


type PropsPage = {
    req: string
}

export const GET = async (req: PropsPage) => {
    try {
        // Connect to the database
        await MongooseConnection();

        // Fetch all the posts from the database from posts in model
        // Assuming Post is a Mongoose model for the posts collection
        const posts = await Post.find();

        // Return the posts in the response if everything is okay
        return NextResponse.json(posts, { status: 200 });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        // Return an error message if something fails
        return NextResponse.json({ error: error.message },
            { status: 500 })
    }
}
