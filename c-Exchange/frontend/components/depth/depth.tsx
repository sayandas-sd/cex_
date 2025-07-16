"use client";

import { getDepth, getTicker } from "@/utils/connection";
import { useEffect, useState } from "react"
import { AskTable } from "./Asktable";
import { BidTable } from "./Bidstable";

export const Depth = ({market} : {market: string}) => {

    const [bids, setBids] = useState<[string, string][]>();
    const [asks, setAsks] = useState<[string, string][]>();
    const [price, setPrice] = useState<string>();

    useEffect(() => {
        getDepth(market).then(d => {
            setBids(d.bids.reverse());
            setAsks(d.asks);
        })

        getTicker(market).then(t => setPrice(t.lastPrice));

    }, [])


    return <div className="flex flex-col h-full">
            <Header />
        <div className="flex flex-col grow overflow-y-hidden">
            <div className="flex flex-col h-full grow overflow-x-hidden">
                    <TableHeader />
                    <div className="flex flex-col no-scrollbar h-full flex-1 overflow-y-auto font-sans">
                        <div className="flex flex-col flex-1 cursor-pointer">
                            {asks && <AskTable asks={asks}/>}
                        </div>
                        <div className="flex flex-col bg-base-background-l1 z-10 flex-0 snap-center px-3 py-1 sticky top-0">
                            <div className="flex justify-end flex-row font-bold font-md p-1">
                                {price && <div className="flex justify-between">
                                    <div className="cursor-pointer pr-37 text-green-400" >Recenter</div>
                                    <div>{price}</div>
                                </div>}
                            </div>
                        </div>
                        {bids && <BidTable bids={bids}/>}
                    </div>
            </div>
        </div>
    </div>
}



const Header = () => {
    return <div className="px-4 py-4">
        <div className="items-center justify-start flex-row flex gap-2 gap-x-2">
            <div className="flex justify-center flex-col cursor-pointer rounded-lg py-1 text-white font-semibold font-medium outline-hidden hover:opacity-90 px-3 h-8 text-sm bg-gray-700">
                Book
            </div>
        </div>
    </div>
}

const TableHeader = () => {
    return <div className="flex justify-around mb-1">
                <p className="text-white font-medium truncate text-sm font-semibold ">Price (USD)</p>

                <p className="text-white font-medium truncate text-sm font-semibold mr-3">Size</p>
                
                <p className="text-white font-medium truncate text-sm font-semibold mr-5">Total</p>
            </div>
      
}

