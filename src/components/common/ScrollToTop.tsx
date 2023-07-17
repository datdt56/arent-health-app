import React from "react";
import Image from "next/image";
import scrollImg from "@/asset/SVG/component_scroll.svg"
import Link from "next/link";

type Props = {
    bottom?: string
}
const ScrollToTop : React.FC<Props> = ({bottom = '0px'}) => {
    return <Link
        href={'#header'}
        style={{
            position: "absolute",
            right: -54,
            bottom,
        }}
    >
        <Image
            src={scrollImg}
            alt={'scroll-to-top'}
    />
    </Link>
}

export default ScrollToTop