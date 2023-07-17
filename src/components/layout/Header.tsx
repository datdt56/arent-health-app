"use client"
import React from "react";
import logoSVG from "@/asset/SVG/logo.svg"
import Image from "next/image";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import icon_memo_svg from "@/asset/SVG/navbar/icon_memo.svg"
import icon_challenge_svg from "@/asset/SVG/navbar/グループ 25.svg"
import icon_info_svg from "@/asset/SVG/navbar/icon_info.svg"
import DropdownMenu from "@/components/layout/DropdownMenu";
import {useRouter} from "next/navigation";

const navItems = [
    {icon: icon_memo_svg, text: "自分の記録", destination:"my-record"},
    {icon: icon_challenge_svg, text: "チャレンジ", destination:""},
    {icon: icon_info_svg, text: "お知らせ", destination:""}
]

interface NavItemProps {
    icon: string | StaticImport,
    text: string,
    destination: string
}
const NavItem: React.FC<NavItemProps> = ({icon,text, destination}) => {
    const router = useRouter()
    return <div className={'h-12 p-2 flex justify-start items-center cursor-pointer'}
                onClick={async () => {await router.push("/" + destination)}}
    >
        <Image src={icon} alt={text} height={32} className={'mr-2'}/>
        <span>
            {text}
        </span>
    </div>
}


const Header : React.FC = () => {
    const router = useRouter()
    return <div
        className={'bg-dark-500 max-h-[64px] w-full text-white'}
        id={'header'}
    >
        <div className={'custom-container flex justify-between'}>
            <div className={'pt-4 pb-2 pl-4'}>
                <Image
                    className={'cursor-pointer'}
                    height={40}
                    src={logoSVG}
                    alt={'health-app-logo'}
                    onClick={() => router.push("/")}
                />
            </div>
            <div className={'py-2 flex'}>
                {
                    navItems.map(item => <NavItem key={item.text} {...item}/>)
                }
                <DropdownMenu/>
            </div>
        </div>
    </div>
}

export default Header