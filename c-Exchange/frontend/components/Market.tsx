import { getTicker } from "@/utils/connection";
import { SignalingManager } from "@/utils/signalmanager";
import { Ticker } from "@/utils/types";
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";

export const MarketView = ({market}: {market: string}) => {

    const [ticker, setTicker] = useState<Ticker | null>(null);

    useEffect(() => {
        getTicker(market).then(setTicker);
        SignalingManager.getInstance().registerCallback("ticker", (data: Partial<Ticker>)  =>  setTicker(prevTicker => ({
            firstPrice: data?.firstPrice ?? prevTicker?.firstPrice ?? '',
            high: data?.high ?? prevTicker?.high ?? '',
            lastPrice: data?.lastPrice ?? prevTicker?.lastPrice ?? '',
            low: data?.low ?? prevTicker?.low ?? '',
            priceChange: data?.priceChange ?? prevTicker?.priceChange ?? '',
            priceChangePercent: data?.priceChangePercent ?? prevTicker?.priceChangePercent ?? '',
            quoteVolume: data?.quoteVolume ?? prevTicker?.quoteVolume ?? '',
            symbol: data?.symbol ?? prevTicker?.symbol ?? '',
            trades: data?.trades ?? prevTicker?.trades ?? '',
            volume: data?.volume ?? prevTicker?.volume ?? '',
        })), `TICKER-${market}`);
        SignalingManager.getInstance().sendMessage({"method":"SUBSCRIBE","params":[`ticker.${market}`]}	);

        return () => {
            SignalingManager.getInstance().deRegisterCallback("ticker", `TICKER-${market}`);
            SignalingManager.getInstance().sendMessage({"method":"UNSUBSCRIBE","params":[`ticker.${market}`]}	);
        }
    }, [market]);



    return <div>
        <div className="flex items-center flex-row bg-[#14151C] relative w-full rounded-lg">
            <div className="flex items-center flex-row no-scrollbar mr-4 h-[72px] w-full overflow-auto pl-4">
                <div className="flex justify-between flex-row w-full gap-4">
                        <div className="flex flex-row shrink-0 gap-[32px]">
                                <TickerName market={market}/>
                            <div className="flex items-center flex-row flex-wrap gap-x-6">
                                <div className="flex flex-col h-full justify-center">
                                    <p className={`font-medium tabular-nums text-lg ${Number(ticker?.lastPrice) > 0 ? "text-green-500" : "text-red-500"}`}>${ticker?.lastPrice}</p>
                                    <p className="text-left text-sm font-bold tabular-nums">${ticker?.lastPrice}</p>
                                </div>
                                <div className="flex justify-center flex-col relative">
                                    <p className="font-medium text-gray-400 text-xs font-semibold">24 Change</p>
                                    <span className={`mt-1 text-sm leading-4 font-bold tabular-nums text-red-text ${Number(ticker?.priceChange) > 0 ? "text-green-500" : "text-red-500"}`}>{Number(ticker?.priceChange) > 0 ? "+" : " "} {ticker?.priceChange} {Number(ticker?.priceChangePercent)?.toFixed(2)}%</span>
                                </div>
                                <div className="flex justify-center flex-col relative">
                                    <p className="font-medium text-gray-400 text-xs font-semibold">24 High</p>
                                    <span className=" mt-1 text-sm leading-4 font-bold tabular-nums">{ticker?.high}</span>
                                </div>
                                <div className="flex justify-center flex-col relative">
                                    <p className="font-medium text-gray-400 text-xs font-semibold">24 Low</p>
                                    <span className=" mt-1 text-sm leading-4 font-bold tabular-nums">{ticker?.low}</span>
                                </div>
                                <div className="flex justify-center flex-col relative">
                                    <p className="font-medium text-gray-400 text-xs font-semibold">24 Volume (USD)</p>
                                    <span className=" mt-1 text-sm leading-4 font-bold tabular-nums">{ticker?.volume}</span>
                                </div>
                            </div>  
                        </div>
                        
                </div>
            </div>
        </div>
    </div>
} 


export const TickerName = ({market}: {market: string}) => {
    return <div>
         <Link href="/trade/SOL_USDC">
                <div className="flex items-center justify-between flex-row bg-gray-700 cursor-pointer rounded-xl p-2 hover:opacity-90">
                    <div className="flex flex-row mr-4">
                            <div className="flex items-center flex-row min-w-max gap-2 undefined">
                                <div className="flex flex-row relative shrink-0">
                                    <Image src={'/sol.webp'} alt="SOl Logo" width={24} height={24} className="z-10 rounded-full h-6 w-6 mr-3"/>
                                    <p className="font-medium text-white text-nowrap font-semibold undefined">
                                        {market.replace("_", " / ")}
                                    </p>
                                </div>
                            </div>
                    </div>
            </div>
         </Link>
    </div>
}