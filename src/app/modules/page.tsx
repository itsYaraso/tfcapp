"use client"
import ContentMenu from "@/components/ContentMenu"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { getModules, moduleInfo } from "../API/Modules/api"

export default function Page() {

    const [modules, setModules] = useState<moduleInfo[]>([])

    useEffect(() => {
        async function fetchModule() {
            try {
                const data = await getModules()
                setModules(data)
            } catch (error) {
                console.error("Failed to fetch module:", error)
            }
        }
        fetchModule()
    }, [])

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
            <div className="mb-2 border-4 grid grid-cols-7 gap-4 justify-items-center no-scrollbar overflow-y-auto w-[62vw] h-[10vh]">

            </div>
            <div className="p-10 grid grid-cols-6 gap-4 justify-items-center no-scrollbar overflow-y-auto ">
                {modules.map(module => (
                    <ModuleButton
                        module={module} />
                ))}
            </div>
            <div className="absolute top-0 left-0 ml-3 mt-3">
                <ContentMenu />
            </div>
        </main >
    )
}

function ModuleButton({ module }: { module: moduleInfo }) {

    return (
        <button
            className="bg-purple-900 border flex flex-col items-center justify-center p-5"
            key={module.module_id}
            style={{ width: '150px', height: '150px' }}
        >
            <div className="border flex rounded">
                <p>test</p>
                <p className="pl-2">1</p>
            </div>
            <Image
                src={module.image_url}
                alt={module.module_name}
                width={50}
                height={50}
            />
            <div className="mt-2">
                <h2 className="text-center">{module.module_name}</h2>
            </div>
        </button>
    )

}
