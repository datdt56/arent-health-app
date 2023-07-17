import {StaticImport} from "next/dist/shared/lib/get-img-props";
import React from "react";
import Image from "next/image";
import {type} from "os";

type CategoryProps = {
    title: string,
    desc: string,
    bgImg?: string | StaticImport
}
const Category : React.FC<CategoryProps> = ({title, desc, bgImg}) => {
    const contClasses = bgImg ? 'p-6 bg-primary-300 aspect-square' : 'p-8 bg-black h-[144px]'
    const descClasses = bgImg ? 'bg-primary-400 w-40' : 'w-full'
    return <div className={`relative flex flex-col justify-center items-center ${contClasses}`}>
        {
            bgImg && <div
                className={'absolute z-[1] top-6 right-6 left-6 bottom-6 bg-black'}
            >
                <Image src={bgImg} alt={title} fill={true} className={'mix-blend-luminosity'}/>
            </div>
        }
        <div className={'z-10 w-full flex flex-wrap justify-center text-center uppercase text-primary-300 font-inter'}>
            {title}
        </div>
        {
            !bgImg && <hr className={'w-14 border-t border-t-white'}/>
        }
        <div className={`${descClasses} z-10 text-white flex justify-center`}>
            {desc}
        </div>

    </div>
}

export default Category