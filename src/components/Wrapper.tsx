import React from 'react'

type wrapperProps = {
    children: React.ReactNode;
}

const Wrapper = ({ children }: wrapperProps) => {
    return (
        <div className='wrapper'>{children}</div>
    )
}

export default Wrapper