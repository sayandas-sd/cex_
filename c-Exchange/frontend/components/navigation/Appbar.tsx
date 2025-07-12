"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import PrimaryButton from "../ui/button/Button";


export default function Appbar() {


    const route = usePathname();
    const router = useRouter();

    return <div className="relative flex h-14 w-full flex-col justify-center">
        <div className="flex items-center justify-between">
            <div className="flex items-center flex-row">
                <Link href="/" className="text-xl pl-4 flex flex-col justify-center cursor-pointer text-white">
                    Exchange
                </Link>
            </div>

            <div className="items-center justify-center flex-row xs:flex hidden gap-5 sm:mx-4 sm:gap-8">
                <div onClick={()=> router.push("market")} className={` ${route.startsWith('/market') ? 'text-white' : 'text-slate-500'} items-center focus:none rounded-lg text-center font-semibold hover:opacity-90 focus:ring-blue-200 focus:outline-hidden disabled:opacity-80 disabled:hover:opacity-80 flex flex-col justify-center bg-transparent h-8 text-sm p-0 text-high-emphasis `}>
                    Markets
                </div>
            </div>


            <div className="flex flex-row gap-8 pr-4">
                <PrimaryButton>Deposit</PrimaryButton>
            </div>

        </div>

    </div>
}