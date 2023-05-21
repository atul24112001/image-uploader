import { MongoClient, Db } from "mongodb";

let _db:Db;
const URL: string = process.env.DATABASE_URL || "";


const getDB = async () => {
    if(!_db){
        const client = new MongoClient(URL);
        await client.connect();
        _db = client.db();
    }
    return _db
}

export default getDB;