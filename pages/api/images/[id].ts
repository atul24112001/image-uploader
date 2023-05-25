import type { NextApiRequest, NextApiResponse } from 'next';
import {Db, ObjectId} from "mongodb";
import getDb from "@/utils/getDb";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
    responseLimit: '10mb'
  },
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const db:Db = await getDb();
  const { id }= req.query;

  try {
    const image = await db.collection("Image-uploader").findOne({
      _id: new ObjectId(id as string)
    });
    
    if(image){
      let base64Data = image.url.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
      let img = Buffer.from(base64Data, 'base64');
      res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': img.length
      })
      res.end(img);
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.send(`<h1>No Image Found.</h1>`)
  } catch (error: unknown) {
    if(error instanceof Error){
      res.status(400).json({message: error.message})
    }
  }

}
