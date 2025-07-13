import Image from "next/image"
import Link from "next/link"

export const MarketView = () => {

    return <div>
        <div className="flex items-center flex-row bg-[#14151C] relative w-full rounded-lg">
            <div className="flex items-center flex-row no-scrollbar mr-4 h-[72px] w-full overflow-auto pl-4">
                <div className="flex justify-between flex-row w-full gap-4">
                        <div className="flex flex-row shrink-0 gap-[32px]">
                            <Ticker />
                            <div className="flex items-center flex-row flex-wrap gap-x-6">
                                <div className="flex flex-col h-full justify-center">
                                    <p className="font-medium tabular-nums text-green-text text-lg"></p>
                                    <p className="text-left text-sm font-normal tabular-nums"></p>
                                </div>
                                <div className="flex justify-center flex-col relative">
                                    <p className="font-medium text-gray-400 text-xs font-semibold">24 Change</p>
                                    <span className="mt-1 text-sm leading-4 font-normal tabular-nums text-red-text"></span>
                                </div>
                                <div className="flex justify-center flex-col relative">
                                    <p className="font-medium text-gray-400 text-xs font-semibold">24 High</p>
                                    <span className=" mt-1 text-sm leading-4 font-normal tabular-nums"></span>
                                </div>
                                <div className="flex justify-center flex-col relative">
                                    <p className="font-medium text-gray-400 text-xs font-semibold">24 Low</p>
                                    <span className=" mt-1 text-sm leading-4 font-normal tabular-nums"></span>
                                </div>
                                <div className="flex justify-center flex-col relative">
                                    <p className="font-medium text-gray-400 text-xs font-semibold">24 Volume (USD)</p>
                                    <span className=" mt-1 text-sm leading-4 font-normal tabular-nums"></span>
                                </div>
                            </div>  
                        </div>
                        
                </div>
            </div>
        </div>
    </div>
} 


const Ticker = () => {
    return <div>
         <Link href="/trade/SOL_USDC">
                <div className="flex items-center justify-between flex-row bg-gray-700 cursor-pointer rounded-xl p-2 hover:opacity-90">
                    <div className="flex flex-row mr-4">
                            <div className="flex items-center flex-row min-w-max gap-2 undefined">
                                <div className="flex flex-row relative shrink-0">
                                    <Image src={'/sol.webp'} alt="SOl Logo" width={24} height={24} className="z-10 rounded-full h-6 w-6 mr-3"/>
                                    <p className="font-medium text-white text-nowrap font-semibold undefined">
                                        SOL
                                        <span className="text-gray-400 font-semibold"> 
                                            /USD
                                        </span>
                                    </p>
                                </div>
                            </div>
                    </div>
            </div>
         </Link>
    </div>
}