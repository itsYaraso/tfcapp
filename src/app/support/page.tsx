import Link from "next/link"
import Image from "next/image"
import ContentMenu from "@/components/ContentMenu"
import Eform from "@/components/EmailForm"

export default function page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <Link href="/">
                    <Image
                        className="mt-6 absolute top-0"
                        src="/tfclogo.svg"
                        alt="Steam Logo"
                        width={35}
                        height={35}
                        priority
                    />
                </Link>
            </div>
                <div>
                    <Eform />
                </div>
            <div className="absolute top-0 left-0 ml-3 mt-3">
                <ContentMenu />
            </div>
        </main>
    )
}