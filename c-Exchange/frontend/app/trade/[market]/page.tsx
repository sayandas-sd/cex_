"use client";

import { Depth } from "@/components/depth/depth";
import { MarketView } from "@/components/Market";
import { TradeView } from "@/components/trade/TradeGraph";
import { Swapui } from "@/components/ui/Swapui";
import { useParams } from "next/navigation";


export default function Trade() {

    const { market } = useParams();


    return <div className=" text-white flex flex-1 flex-col overflow-auto">
        <div className="flex flex-col flex-1">
            <div className="flex flex-row mb-4 h-screen flex-1 gap-2 overflow-hidden px-4">
                <div className="flex flex-col flex-1">
                    <div className="flex flex-col gap-2">
                            <MarketView market={market as string}/>
                         <div className="flex flex-col">
                            <div className="flex flex-row relative gap-2">
                                <div className="flex flex-col bg-[#14151c] w-1/3 max-w-[300px] min-w-[260px] overflow-hidden rounded-lg">
                                   
                                        <Depth market={market as string}/>
                                   
                                </div>
                                <div className="flex flex-col bg-[#14151C] flex-1 overflow-hidden rounded-lg">
                                    <div className="flex items-center justify-between flex-row px-4 py-4">
                                        <div className="flex justify-center flex-col cursor-pointer rounded-lg py-1 font-semibold outline-hidden hover:opacity-90 px-3 h-8 text-sm bg-gray-700">
                                            Chart
                                        </div>
                                    </div>
                                    <div className="h-full mt-15">
                                        <div>
                                            <TradeView market={market as string}/>
                                        </div>

                                    </div>
                                </div> 
                            </div>

                         </div>
                    </div>  
                </div>
                <div className="flex flex-col gap-2">
                    <Swapui />
                </div>
            </div>

        </div>  

    </div>
}