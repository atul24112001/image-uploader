import React from 'react';
import { MdCloudUpload } from "react-icons/md";

export default function DropBox() {
    return (
        <div className='bg-background-primary text-secondary mt-4 border-dashed p-3 border-[2px] border-main flex justify-center items-center flex-col gap-1 w-full cursor-move'>
            <MdCloudUpload className='text-5xl ' />
            <p>Drag and Drop Image</p>
        </div>
    )
}
