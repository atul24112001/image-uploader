import React, { useRef, useState } from 'react';
import DropBox from "./DropBox"
import Button from "./Button"
import Card from "./Card";
import Loading from "./Loading";
import Image from 'next/image';
import ImageViewer from './ImageViewer';
import useMessageContext from '@/context/MessageContext';


function UploadCard() {
    const [loading, setLoading] = useState<boolean>(false);
    const [file, setFile] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<null | string>(null);
    // const dropBoxRef = useRef<HTMLDivElement>(null);

    const onChooseFile = () => {
        const target = inputRef.current;
        if (target?.click && typeof target.click === "function") {
            target.click();
        }
    }

    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    const convertBufferToBase64 = (file: File) => {
        setError(null);
        if (file.type.includes("image")) {
            if (file.size <= 5000000) {
                const render = new FileReader();
                render.onload = () => {
                    const base64 = render.result as string;
                    setFile(base64);
                }
                render.readAsDataURL(file);
            } else {
                setError("Image size should be <= 5mb")
            }
        } else {
            setError("You can only upload images")
        }
    }

    const onDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        convertBufferToBase64(droppedFile)
    }

    const chooseFileHandler = () => {
        if (inputRef.current?.files?.length) {
            const selectedFile = inputRef.current.files[0];
            convertBufferToBase64(selectedFile)
        }
    }


    return (
        <Card>
            <div onDragOver={onDragOver} onDrop={onDropHandler} className='flex justify-center items-center flex-col gap-3'>
                <h2 className='text-2xl font-semibold text-center'>Upload Your Image</h2>
                <p className='text-secondary'>File Should be jpg, png formate and Size 5Mb or less...</p>
                {error && <p className='text-red-600'>{error}</p>}
                {file ? (
                    <ImageViewer file={file} setFile={setFile} setLoading={setLoading} />
                ) : (<div className='w-[90%] flex justify-center items-center flex-col gap-5'>
                    <DropBox />
                    <p className='text-secondary'>Or</p>
                    <Button onClick={onChooseFile}>Choose File</Button>
                    <input accept='image/*' onChange={chooseFileHandler} ref={inputRef} type='file' className='hidden' />
                </div>
                )}
            </div>
            <Loading loading={loading} />
        </Card>
    )
}

export default UploadCard;