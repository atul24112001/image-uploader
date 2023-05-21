import type { NextApiRequest, NextApiResponse } from 'next';
import {Db} from "mongodb";
import getDb from "@/utils/getDb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "POST"){
        const db:Db = await getDb();
        const addedImage = await db.collection("Image-uploader").insertOne({
            url: req.body.url 
        });
      
        res.status(200).json({
            url: `${process.env.DOMAIN_URL}/api/images/${addedImage.insertedId}`
        });
    } else {
        res.json({
            message: "Nothing to see here"
        })
    }
}
