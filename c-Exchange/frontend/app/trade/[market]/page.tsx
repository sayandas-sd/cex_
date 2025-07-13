"use client";

import { MarketView } from "@/components/Market";
import { Swapui } from "@/components/ui/Swapui";


export default function Trade() {


    return <div className="bg-base-background-l0 text-white flex flex-1 flex-col overflow-auto">
        <div className="flex flex-col flex-1">
            <div className="flex flex-row mb-4 h-screen flex-1 gap-2 overflow-hidden px-4">
                <div className="flex flex-col flex-1">
                    <div className="flex flex-col gap-2">
                         <MarketView />
                    </div>  
                </div>
                <div className="flex flex-col gap-2">
                    <Swapui />
                </div>
            </div>

        </div>  

    </div>
}