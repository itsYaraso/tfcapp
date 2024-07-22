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
            <div className="absolute top-0 left-0 ml-3 mt-3">
                <ContentMenu />
            </div>

            <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-white">Sign Up</h1>
            <form className="space-y-4">
                <div>
                    <label className="label">
                        <span className="text-base label-text">Username</span>
                    </label>
                    <input type="text" placeholder="Username" className="w-full input input-bordered bg-black" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Email</span>
                    </label>
                    <input type="text" placeholder="Enter Email" className="w-full input input-bordered bg-black" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" className="w-full input input-bordered bg-black" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Confirm Password</span>
                    </label>
                    <input type="password" placeholder="Confirm Password" className="w-full input input-bordered bg-black" />
                </div>
                <div>
                    <button className="btn btn-block">Sign Up</button>
                </div>
                <span>Already have an account ?
                    <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline"> Login</a></span>
            </form>
        </div>
    </div>
        </main>
    )
}