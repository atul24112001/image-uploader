import React from 'react'

interface ModalProps {
    children: React.ReactNode,
    visible: boolean
}

const Modal: React.FC<ModalProps> = ({ children, visible }) => {
    return (
        <div className={`${visible ? "block" : "hidden"} absolute top-0 bottom-0 right-0 left-0 z-10 flex justify-center items-center bg-background-primary`}>
            {children}
        </div>
    )
}

export default Modal;