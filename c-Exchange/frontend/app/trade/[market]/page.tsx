"use client";

import { MarketView } from "@/components/Market";
import { TradeView } from "@/components/trade/TradeGraph";
import { Swapui } from "@/components/ui/Swapui";
import { useParams } from "next/navigation";


export default function Trade() {

    const { market } =useParams();


    return <div className="bg-base-background-l0 text-white flex flex-1 flex-col overflow-auto">
        <div className="flex flex-col flex-1">
            <div className="flex flex-row mb-4 h-screen flex-1 gap-2 overflow-hidden px-4">
                <div className="flex flex-col flex-1">
                    <div className="flex flex-col gap-2">
                            <MarketView />
                         <div className="flex flex-col">
                            <div className="flex flex-row relative gap-2">
                                <div>
                                        nasn
                                </div>
                                <div className="flex flex-col bg-[#14151C] flex-1 overflow-hidden rounded-lg">
                                    <div className="flex items-center justify-between flex-row px-4 py-4">
                                        <div className="flex justify-center flex-col cursor-pointer rounded-lg py-1 font-semibold outline-hidden hover:opacity-90 px-3 h-8 text-sm bg-gray-700">
                                            Chart
                                        </div>
                                    </div>
                                    <div className="h-full">
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