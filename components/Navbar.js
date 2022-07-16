import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
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
                    <ul className="flex items-center">
                        <button type="button" className="text-lg text-blue-600 ring-2 ring-blue-600 rounded-lg px-5 py-1.5 hover:bg-blue-600 hover:text-slate-300 transition-all active:scale-90 shadow-lg hover:shadow-blue-600 md:text-sm md:px-4 md:py-1">Connect wallet</button>
                    </ul>
                </nav>
            </header>
        </>
    )
}
