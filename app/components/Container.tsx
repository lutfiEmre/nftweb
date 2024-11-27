import React, { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return <>
    <div className={'px-[10vw] 3xl:pl-0  xl:pl-[15vw]'}>
        {children}
    </div></>;
};

export default Container;
