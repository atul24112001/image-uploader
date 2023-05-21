import React, { FC } from 'react'

interface ButtonProps {
    children: React.ReactNode,
    onClick: () => void,
    variant?: string
}

const Button: FC<ButtonProps> = ({ children, onClick, variant = "primary" }) => {
    return variant === "primary" ? (
        <button onClick={onClick} className='bg-main px-4 text-background-secondary border-[2px] border-main hover:bg-background-secondary hover:text-main py-1 rounded-md'>{children}</button>
    ) : (
        <button onClick={onClick} className='bg-background-secondary px-4 text-main border-[2px] border-main hover:bg-main hover:text-background-secondary py-1 rounded-md'>{children}</button>
    )
}

export default Button;