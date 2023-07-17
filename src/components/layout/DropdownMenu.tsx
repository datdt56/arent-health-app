'use client'
import React, {useEffect, useState} from "react";
import Image from "next/image";
import icon_menu_svg from "@/asset/SVG/navbar/icon_menu.svg";
import icon_close_svg from "@/asset/SVG/navbar/icon_close.svg"
import {usePathname, useRouter} from "next/navigation";

const dropdownItems = [
    {name: "自分の記録",destination: ""},
    {name: "体重グラフ",destination: ""},
    {name: "目標",destination: ""},
    {name: "選択中のコース",destination: ""},
    {name: "コラム一覧",destination: "recommended"},
    {name: "設定",destination: ""},
]
const DropdownMenu : React.FC<any> = (props) => {
    const pathName = usePathname()
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(prevState => !prevState)
    }
    useEffect(() => {
        setOpen(false)
    },[pathName])
    return <div className={'h-12 p-2 relative'} >
        {
            !open ?  <Image className={'cursor-pointer'} onClick={toggle} src={icon_menu_svg} alt={"dropdown-menu"} height={32}/>
                :
                <div>
                    <Image className={'cursor-pointer'} onClick={toggle} src={icon_close_svg} alt={"dropdown-menu-close"} height={32}/>
                    <ul className={'absolute right-0 top-12 w-[280px] z-50'}>
                        {
                            dropdownItems.map((item,index) => <>
                                    <li
                                        className={'cursor-pointer bg-dark-500 h-[72px]'}
                                        key={item.name}
                                        style={{
                                            padding: "23px 0px 23px 32px",
                                            ...index < dropdownItems.length && {
                                                borderTop: "solid 1px rgb(255,255,255, 0.15)",
                                                borderBottom: "solid 1px rgb(46,46,46, 0.25)",
                                            }
                                        }}
                                        onClick={async () => {
                                            if (item.destination){
                                                await router.push("/" + item.destination)
                                            }
                                        }}
                                    >
                                        {item.name}
                                    </li>
                                </>
                                )
                        }
                    </ul>
                </div>
        }
    </div>

}

export default DropdownMenu