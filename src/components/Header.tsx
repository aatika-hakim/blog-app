'use client'
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from 'next/link'
import { useRouter } from "next/navigation";
export default function Header (){
    const router = useRouter();

    return (
        <div className="bg-black min-w-full">
            <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                <div className="md:flex-none text-white text-3xl w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                    {/* <input type="text" className="input-text" placeholder="Search..." /> */}
                    Discover the Latest News
                </div>
                <div className="shrink w-90 sm:order-2">
                    <Link href={"/"} className="text-white font-semibold uppercase text-3xl" onClick={() => router.push('/')}>
                        {/* Discover Latest News */}
                    </Link>
                </div>
                <div className="w-96 order-3 flex justify-center">
                    <div className="flex gap-6">
                        <Link href={"/"}><ImFacebook color="#888888" /></Link>
                        <Link href={"/"}><ImTwitter color="#888888" /></Link>
                        <Link href={"/"}><ImYoutube color="#888888" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}