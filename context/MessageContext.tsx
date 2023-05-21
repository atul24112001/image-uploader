import React, { useContext, useEffect, useState } from 'react';

const MessageContext = React.createContext({
    error: false,
    errorMessage: "",
    setError: (v: boolean) => { },
    setErrorMessage: (v: string) => { }
})

interface MessageContextProviderProps {
    children: React.ReactNode
}

export const MessageContextProvider: React.FC<MessageContextProviderProps> = ({ children }) => {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError(false);
            }, 1000)
        }
    }, [error])

    return (
        <MessageContext.Provider value={{
            error,
            errorMessage,
            setError,
            setErrorMessage
        }}>
            {!error && (
                <div className='absolute z-50 top-0 bg-background-secondary rounded-md right-0 bg-white shadow-md'>
                    <p className='p-6 m-3'>
                        {errorMessage || "Something went wrong"}
                    </p>
                </div>
            )}
            {children}
        </MessageContext.Provider>
    )

}

const useMessageContext = () => {
    return useContext(MessageContext);
}

export default useMessageContext;