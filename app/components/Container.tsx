import React, { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return <>
    <div className={'px-[50px] sm:px-[10vw] 3xl:px-[10vw] lg:px-[5vw] 2xl:px-[15vw]'}>
        {children}
    </div></>;
};

export default Container;
