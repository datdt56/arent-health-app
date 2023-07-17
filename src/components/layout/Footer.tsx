
const footerItems = ["会員登録", "運営会社", "利用規約", "個人情報の取扱について", "特定商取引法に基づく表記", "お問い合わせ"]

const Footer : React.FC = () => {
    return <div
        className={'bg-dark-500 h-32 w-full text-white footer'}
    >
        <div className={'custom-container py-14'}>
            {
                footerItems.map(item => <span key={item} className={'mr-[45px]'}>
                    {item}
                </span>)
            }
        </div>
    </div>
}

export default Footer