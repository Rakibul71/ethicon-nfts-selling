import Link from "next/link";
import Image from "next/image";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
export default function Navbar() {
    const connectWithMetamask = useMetamask();
    const address = useAddress();
    const disconnectToWallet = useDisconnect();
    return (
        <>
            {/* <header className="border border-l-0 border-r-0 bg-[#1B2129] border-white/10 h-[9vh] flex items-center justify-center fixed top-0 left-o right-0"> */}
            <header className="border border-l-0 border-r-0 bg-[#1B2129] border-white/10 h-[9vh] flex items-center justify-center fixed top-0 left-0 right-0 opacity-100 z-[2000] ">
                <nav className="flex items-center justify-between w-10/12 lg:w-11/12 m-auto">
                    <Link href={`/`} passHref>
                        <a className="flex items-center">
                            <Image src={`https://raw.githubusercontent.com/thirdweb-dev/typescript-sdk/main/logo.svg`} alt="third web logo" width={45} height={43} priority decoding="async" objectFit="contain" />
                            <span className="text-2xl text-slate-300 font-bold ml-2">NFTs</span>
                        </a>
                    </Link>
                    {/* <ul className="flex items-center">
                        <button type="button" className="text-lg text-blue-600 ring-2 ring-blue-600 rounded-lg px-5 py-1.5 hover:bg-blue-600 hover:text-slate-300 transition-all active:scale-90 shadow-lg
                         hover:shadow-blue-600 md:text-sm md:px-4 md:py-1" onClick={connectWithMetamask}>Connect wallet</button>
                    </ul> */}
                    {
                        !address ? (
                            <ul className="flex items-center">
                                <button type="button" className="text-lg text-blue-600 ring-2 ring-blue-600 rounded-lg px-5 py-1.5 hover:bg-blue-600 hover:text-slate-300 transition-all active:scale-90 shadow-lg
                         hover:shadow-blue-600 md:text-sm md:px-4 md:py-1" onClick={connectWithMetamask}>Connect wallet</button>
                            </ul>
                        ) : (
                            <ul className="group relative">
                                <div className="border border-slate-600 bg-black/50 cursor-pointer flex items-center justify-between px-3 gap-3 py-1 rounded-md hover:border-blue-500 group-hover:bg-slate-900 xsm:gap-2 transition-all" >
                                    <div className="flex items-center "><Image src={`https://ethereum.org/static/a183661dd70e0e5c70689a0ec95ef0ba/81d9f/eth-diamond-purple.webp`} alt='img/eth' width={15} height={25} objectFit='contain' /></div>
                                    <div className="grid items-center">
                                        <p className="text-xs leading-tight text-gray-400 group-hover:text-slate-300">3.303 Eth</p>
                                        <p className="text-xs leading-tight text-gray-400 group-hover:text-slate-300">{address?.substring(0, 4)}...{address?.substring(address.length - 4)}</p>
                                    </div>
                                    <div className="flex items-center"><Image src={`https://thirdweb.com/_next/static/media/metamask-fox.a725b9ae.svg`} alt='img/eth' width={23} height={23} objectFit='contain' /></div>
                                </div>

                            </ul>
                        )
                    }
                </nav>
            </header>
        </>
    )
}
