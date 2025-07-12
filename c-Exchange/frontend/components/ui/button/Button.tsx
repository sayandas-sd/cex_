
interface Type {
    children: string;
    onClick?: () => void
}

export default function PrimaryButton({children, onClick}: Type) {
    return <div>
        <button type="button" aria-expanded="false" id="react-aria3576164932-«r2h»" data-react-aria-pressable="true" className="focus:none rounded-lg text-center font-semibold hover:opacity-90 focus:ring-blue-200 focus:outline-hidden disabled:opacity-80 disabled:hover:opacity-80 relative overflow-hidden h-8 px-3 py-1.5 text-sm" data-rac="">
            <div className="absolute inset-0 bg-green-50 opacity-[16%]"></div>
            <div onClick={onClick} className="flex flex-row items-center justify-center gap-4">
                <p className="text-green-text">{children}</p>
            </div>
        </button>
    </div>
}