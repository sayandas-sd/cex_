

export const PrimaryButton = ({children, onClick}: {children: string, onClick?: () => void}) => {

    return <button type="button" data-react-aria-pressable="true" className="cursor-pointer focus:none rounded-lg text-center font-semibold hover:opacity-90 focus:ring-blue-200 focus:outline-hidden disabled:opacity-80 disabled:hover:opacity-80 relative overflow-hidden h-8 px-3 py-1.5 text-sm" data-rac="">
            <div className="absolute inset-0 bg-blue-300 opacity-[16%]"></div>
            <div onClick={onClick} className="flex flex-row items-center justify-center gap-4">
                <p className="text-blue-400">{children}</p>
            </div>
        </button>
}


export const WithDrawButton = ({children, onClick}: {children: string, onClick?: () => void}) => {

    return <button type="button" className="cursor-pointer focus:none rounded-lg text-center font-semibold hover:opacity-90 relative overflow-hidden h-8 px-3 py-1.5 text-sm" data-rac="">
            <div className="absolute inset-0 bg-green-300 opacity-[16%]"></div>
            <div onClick={onClick} className="flex flex-row items-center justify-center gap-4">
                <p className="text-green-400">{children}</p>
            </div>
        </button>
}