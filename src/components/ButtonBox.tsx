import React from 'react';

type buttonBoxProps = {
    children: React.ReactNode
}

const ButtonBox = ({ children }: buttonBoxProps) => {
    return (
        <div className='button-box'>{children}</div>
    )
}

export default ButtonBox;