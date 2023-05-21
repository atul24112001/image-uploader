import React from 'react'

interface CardProps {
    children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className='bg-background-secondary rounded-xl shadow-md px-5 py-6  w-[90%] md:w-[60%] lg:w-[40%]'>
            {children}
        </div>
    )
}

export default Card;