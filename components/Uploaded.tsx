import React from 'react'
import Modal from './Modal';
import Card from './Card';
import { MdOutlineDone } from "react-icons/md";
import Button from './Button';
import Image from 'next/image';

interface UploadedProps {
    uploaded: {
        url: string
    } | null,
    file: string,
    setUploaded: (v: null) => void,
    setFile: (v: null) => void
}

const Uploaded: React.FC<UploadedProps> = ({ uploaded, file, setFile, setUploaded }) => {

    const copyToClipboard = async () => {
        if (uploaded?.url) {
            await navigator.clipboard.writeText(uploaded.url)
            setFile(null)
            setUploaded(null);
        }
    }
    return (
        <Modal visible={Boolean(uploaded)}>
            <Card>
                <div className='flex justify-center items-center flex-col gap-3'>
                    <div className='bg-green-700 rounded-full p-1'>
                        <MdOutlineDone className='text-white text-3xl' />
                    </div>
                    <h2 className='text-2xl font-medium text-secondary text-center'>Uploaded Successfully!</h2>
                    <Image
                        alt='Uploaded Image'
                        src={file}
                        width={1000}
                        height={1000}
                        className='w-[90%] md:w-1/2 lg:1/3 h-auto'
                    />
                    {uploaded && (
                        <div className='flex w-full  items-center justify-between bg-background-primary pl-2 rounded-md'>
                            <div className=''>{uploaded.url.length > window.innerWidth / 20 ? `${uploaded.url.substring(0, window.innerWidth / 20)}...` : uploaded.url}</div>
                            <Button onClick={copyToClipboard}>Copy Link</Button>
                        </div>
                    )}
                </div>
            </Card>
        </Modal>
    )
}

export default Uploaded;