import ContentMenu from "@/components/ContentMenu"
import Link from "next/link"
import Image from "next/image"

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

            <div>
                <div className="relative flex flex-col justify-center h-screen overflow-hidden">
                    <div className="w-full p-6 m-auto rounded-md shadow-md lg:max-w-lg">
                        <h1 className="text-3xl font-semibold text-center text-white-700">The First Companion</h1>
                        <form className="space-y-4">
                            <div>
                                <label className="label">
                                    <span className="text-base label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Email Address" className="w-full input input-bordered input-primary bg-black border-white" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="text-base label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Enter Password" className="w-full input input-bordered input-primary bg-black " />
                            </div>
                            <a href="#" className="text-xs text-white hover:underline hover:text-blue-600 ">Forget Password?</a>
                            <div>
                                <button className="btn btn-primary w-full bg-black text-white">Login</button>
                            </div>
                            <div>
                                
                            <a href="/register" className="text-xs text-white hover:underline hover:text-blue-600">Create an account</a>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}