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
};

interface errorType {
  message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const db:Db = await getDb();
  const { id }= req.query;

  try {
    const image = await db.collection("Image-uploader").findOne({
      _id: new ObjectId(id as string)
    });
    
    let htmlContent = `<h1>Some Went Wrong! Image not found.</h1>`;
    if(image){
      htmlContent = `
      <div style="background-color: black; height: 99vh; overflow: none; display: flex; margin: -10px; justify-content: center; align-items: center;">
        <img src=${image.url} style="height: 90vh; width: auto;" alt=${image._id} />
      </div>`
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(htmlContent);
  } catch (error: unknown) {
    if(error instanceof Error){
      res.status(400).json({message: error.message})
    }
  }

}
