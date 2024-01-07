import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from 'next/link'

export default function Footer() {

return (
    <footer className="bg-black w-full">
        <div className="container mx-auto flex justify-center py-12">
            <div className="py-5">
                <div className="flex gap-6 justify-center">
                    <Link href={"/"}><ImFacebook color="#888888" /></Link>
                    <Link href={"/"}><ImTwitter color="#888888" /></Link>
                    <Link href={"/"}><ImYoutube color="#888888" /></Link>
                </div>

                <p className="py-5 text-gray-400">Copyright ©2024 All rights reserved.</p>
                <p className="text-gray-400 text-center">Terms & Condition</p>
            </div>
        </div>
    </footer>
)
}