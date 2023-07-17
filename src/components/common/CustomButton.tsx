import React from "react";

type ButtonProps = {
    text: string,
    onClick?: any,
    classes?: string
}
const CustomButton : React.FC<ButtonProps> = ({text, onClick, classes=''}) => {
    return <button
        className={'h-14 w-[296px] text-white cursor-pointer rounded ' + classes }
        style={{background : 'linear-gradient(33deg, #FFCC21 0%, #FF963C 100%)'}}
        onClick={typeof onClick === 'function' ? onClick : null}
    >
        {text}
    </button>

}

export default CustomButton