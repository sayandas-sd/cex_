"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { PrimaryButton, WithDrawButton } from "../ui/button/Button";


export default function Appbar() {


    const route = usePathname();
    const router = useRouter();

    return <div className="relative flex h-14 w-full flex-col justify-center">
        <div className="flex items-center justify-between">
            <div className="flex items-center flex-row">
                <Link href="/" className="items-center rounded-lg text-center font-semibold flex flex-col justify-center bg-transparent h-8 text-lg p-0 xs:mr-6 mr-3 ml-4 shrink-0 sm:ml-[21px]">
                    Exchange
                </Link>

                <div className="items-center justify-center flex-row gap-5 sm:mx-4 sm:gap-8">
                    <div className={`items-center rounded-lg text-center font-semibold flex flex-col justify-center bg-transparent h-8 text-sm p-0 cursor-pointer ${route.startsWith('/market') ? 'text-white' : 'text-gray-400'}`} onClick={() => router.push('/market')}>
                        Markets
                    </div>
                </div>
                <div className="items-center justify-center flex-row gap-5 sm:mx-4 sm:gap-8">
                    <div className={`items-center rounded-lg text-center font-semibold flex flex-col justify-center bg-transparent h-8 text-sm p-0 cursor-pointer ${route.startsWith('/trade') ? 'text-white' : 'text-gray-400'}`} onClick={() => router.push('/trade/SOL_USDC')}>
                        Trade
                    </div>
                </div>
            </div>

            


            <div className="flex flex-row gap-8 pr-4">
                <PrimaryButton>Deposit</PrimaryButton>
                <WithDrawButton>Withdraw</WithDrawButton>
            </div>

        </div>

    </div>
}

