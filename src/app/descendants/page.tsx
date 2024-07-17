"use client"
import ContentMenu from "@/components/ContentMenu"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { getDescendant, DescendantInfo } from "../API/Descendants/api"

export default function Page() {

    const [descendants, setDescendants] = useState<DescendantInfo>([])

    useEffect(() => {
        async function fetchDescendants() {
            try {
                const data = await getDescendant()
                setDescendants(data)
            } catch (error) {
                console.error("Failed to fetch descendants:", error)
            }
        }
        fetchDescendants()
    }, [])

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <Link href="/">
                    <Image
                        className="mt-6 absolute top-0"
                        src="/tfclogo.svg"
                        alt="tfc logo"
                        width={35}
                        height={35}
                        priority
                    />
                </Link>
            </div>
            <div className="grid grid-cols-6 gap-4 justify-items-center no-scrollbar overflow-y-auto h-[70vh]">
                {descendants.map(descendant => (
                    <button
                        className="border flex flex-col items-center justify-center p-5"
                        key={descendant.descendant_id}
                        style={{ width: '150px', height: '150px' }} // Ensures square shape
                    >
                        <Image
                            src={descendant.descendant_image_url}
                            alt={descendant.descendant_name}
                            width={50}
                            height={50}
                        />
                        <div className="mt-2">
                            <h2 className="text-center">{descendant.descendant_name}</h2>
                        </div>
                    </button>
                ))}
            </div>
            <div className="absolute top-0 left-0 ml-3 mt-3">
                <ContentMenu />
            </div>
        </main >
    )
}
