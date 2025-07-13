import { useState } from "react";
import { BuyButton, OrderTab, SellButton } from "./button/Swapbutton";
import Image from "next/image";


export const Swapui = () => {
    const [activeTab, setActiveTab] = useState('buy');
    const [type, setType] = useState('limit');

    return <div className="flex flex-col bg-[#14151C] w-[332px] gap-4 rounded-lg px-[16px] py-[16px]">
        <div className="flex flex-col gap-4">
            <div className="bg-[#202126] flex h-[48px] w-full overflow-hidden rounded-xl">
              <BuyButton activeTab={activeTab} setActiveTab={setActiveTab} />
              <SellButton activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row">
                    <div className="items-center justify-center flex-row flex gap-2 gap-x-0">
                            <OrderTab label="Limit" value="limit" activeType={type} setType={setType} />
                            <OrderTab label="Market" value="market" activeType={type} setType={setType} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col text-white flex-1 gap-3">
                        <div className="flex justify-between flex-row">
                             <p className="text-xs font-semibold text-gray-400 ">Available Balance</p>
                            <p className="font-semibold text-xs text-gray-400">36.94 USDC</p>
                        </div>

                        {type === "limit" && (
                            <div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between flex-row">
                                        <p className="text-xs font-semibold text-gray-400">Price</p>
                                    </div>
                                    </div>
                                <div className="relative">
                                        <div className="flex flex-col relative">
                                            <input
                                                step="0.01"
                                                placeholder="0"
                                                className="h-12 mt-2 rounded-lg bg-[#202126] pr-12 text-right text-2xl leading-9 text-white placeholder:text-gray-500 transition"
                                                type="text"
                                                inputMode="numeric"
                                            />
                                            <div className="flex flex-row absolute right-1 top-1 p-2">
                                            <div className="relative">
                                                <Image
                                                    src={"/usdc.webp"}
                                                    alt="USD Logo"
                                                    width={24}
                                                    height={24}
                                                    className="z-10 rounded-full h-6 w-6 ml-2"
                                                />
                                            </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        )}

                        <div className="flex flex-col gap-2 mt-2">
                            <div className="flex items-center justify-between flex-row">
                                <p className="text-xs font-semibold text-gray-400">Quantity</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="flex flex-col relative">
                                <input
                                    step="0.01"
                                    placeholder="0"
                                    className="h-12 rounded-lg bg-[#202126] pr-12 text-right text-2xl leading-9 text-white placeholder:text-gray-500 transition"
                                    type="text"
                                    inputMode="numeric"
                                />
                                <div className="flex flex-row absolute right-1 top-1 p-2">
                                    <div className="relative">
                                        <Image
                                        src={"/sol.webp"}
                                        alt="SOL Logo"
                                        width={24}
                                        height={24}
                                        className="z-10 rounded-full h-6 w-6 ml-2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between flex-row">
                                <p className="text-xs font-semibold text-gray-400">Price</p>
                            </div>
                        </div> 
                        <div className="relative">
                            <div className="flex flex-col relative">
                                <input step="0.01" placeholder="0" className="h-12 rounded-lg  bg-[#202126] pr-12 text-right text-2xl leading-9 text-[$text] placeholder:text-gray-500 transition " type="text" inputMode="numeric"/>
                                <div className="flex flex-row absolute right-1 top-1 p-2">
                                    <div className="relative">
                                         <Image src={'/usdc.webp'} alt="USD Logo" width={24} height={24} className="z-10 rounded-full h-6 w-6 ml-10"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between flex-row">
                                <p className="text-xs font-semibold text-gray-400">Quantity</p>
                            </div>
                        </div> 
                        <div className="relative">
                            <div className="flex flex-col relative">
                                <input step="0.01" placeholder="0" className="h-12 rounded-lg  bg-[#202126] pr-12 text-right text-2xl leading-9 text-[$text] placeholder:text-gray-500 transition " type="text" inputMode="numeric"/>
                                <div className="flex flex-row absolute right-1 top-1 p-2">
                                    <div className="relative">
                                         <Image src={'/sol.webp'} alt="USD Logo" width={24} height={24} className="z-10 rounded-full h-6 w-6 ml-10"/>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <div className="flex justify-end flex-row text-right">
                            <p className="font-medium pr-2 text-sm ">≈ 0.00 USDC</p>
                        </div>
                        <div></div>
                        {activeTab === "buy" && (
                                <div className="mt-4">
                                
                                    <button
                                        type="button"
                                        className="cursor-pointer font-semibold focus:ring-blue-200 focus:outline-none text-center h-12 rounded-xl text-base px-4 py-2 bg-green-500 text-white active:scale-98 w-full hover:bg-green-400 ">
                                        Buy
                                    </button>
                                </div>
                        )}

                        {activeTab === "sell" && (
                                <div className="mt-4">
                                
                                    <button
                                        type="button"
                                        className="cursor-pointer font-semibold focus:ring-blue-200 focus:outline-none text-center h-12 rounded-xl text-base px-4 py-2 bg-red-500 text-white active:scale-98 w-full hover:bg-red-400">
                                        Sell
                                    </button>
                                </div>
                        )}

                        <div className="flex flex-row mt-2 flex-wrap gap-x-4 gap-y-3">
                            <div className="flex items-center flex-row">
                                <input 
                                    type="checkbox"
                                    className="rounded-lg bg-[#202126]  h-4 w-5 rounded-sm border-2 text-transparent ring-0 shadow-transparent outline-hidden cursor-pointer"
                                />
                                <label className="font-medium select-none text-xs text-gray-400 ml-2">Post Only</label>
                            </div>
                            <div className="flex items-center flex-row">
                                <input 
                                    type="checkbox"
                                    className="rounded-lg bg-[#202126]  h-4 w-5 rounded-sm border-2 text-transparent shadow-transparent focus:ring-0 focus:outline-none outline-hidden cursor-pointer"
                                />
                                <label className="font-medium select-none text-xs text-gray-400 ml-2">Ioc</label>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}