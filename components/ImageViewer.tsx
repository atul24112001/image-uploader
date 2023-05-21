import Image from 'next/image';
import React, { useState } from 'react'
import Button from './Button';
import axios from 'axios';
import Uploaded from './Uploaded';

interface ImageViewerProps {
    file: string,
    setFile: (e: null | string) => void,
    setLoading: (v: boolean) => void,
}

const ImageViewer: React.FC<ImageViewerProps> = ({ file, setFile, setLoading }) => {
    const [uploaded, setUploaded] = useState<{ url: string } | null>(null);

    const uploadHandler = async () => {
        setLoading(true);
        try {
            const { data } = await axios.post("/api/images/upload", {
                url: file
            });
            setUploaded(data)
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    return (
        <>
            <Image
                alt='Uploaded Image'
                src={file}
                width={1000}
                height={1000}
                className='w-full md:w-1/2 lg:1/3 h-auto'
            />
            <div className='flex items-center gap-2'>
                <Button onClick={() => {
                    setFile(null);
                }} variant='secondary'>Cancel</Button>
                <Button onClick={uploadHandler}>Upload</Button>
            </div>
            <Uploaded uploaded={uploaded} setUploaded={setUploaded} setFile={setFile} file={file} />
        </>
    )
}


export default ImageViewer;