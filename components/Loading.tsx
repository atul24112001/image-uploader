import React from 'react';
import Card from './Card';
import Modal from './Modal';

interface LoadingProps {
    loading: boolean
}

const Loading: React.FC<LoadingProps> = ({ loading }) => {
    return (
        <Modal visible={loading}>
            <Card>
                <div className='mb-4 font-semibold'>Uploading..</div>
                <div className='w-full h-2 rounded-md bg-background-primary relative overflow-hidden'>
                    <div className='absolute rounded-md bg-main w-[100px] h-2 animate-loading'></div>
                </div>
            </Card>
        </Modal>
    )
}

export default Loading;