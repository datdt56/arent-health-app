import React, {ReactNode} from "react";
import dayjs from "dayjs";

type DarkContainerProps = {
    title: string,
    children: ReactNode
}

const DarkContainer : React.FC<DarkContainerProps> = ({title,children}) => {
    return <div className={'w-full bg-dark-600 flex flex-col p-4 font-inter'}>
        <div className={'flex h-9 justify-start text-white'}>
            <div className={'w-24 pr-6 text-sm uppercase'}>
                {title}
            </div>
            <div className={'text-xl'}>
                {dayjs().format('YYYY.MM.DD')}
            </div>
        </div>
        {children}
    </div>
}

export default DarkContainer