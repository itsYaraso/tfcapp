"use client"
import ContentMenu from "@/components/ContentMenu"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { getDescendant, DescendantInfo } from "../API/Descendants/api"
import DescendantButton from "@/components/DescendantButton"

export default function Page() {
    const [descendants, setDescendants] = useState<DescendantInfo[]>([])
    const [selectedDescendant, setSelectedDescendant] = useState<DescendantInfo | null>(null)
    const [isPopupVisible, setPopupVisible] = useState(false)

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

    const showPopup = (descendant: DescendantInfo) => {
        setSelectedDescendant(descendant)
        setPopupVisible(true)
    }

    const closePopup = () => {
        setSelectedDescendant(null)
        setPopupVisible(false)
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
            <div className="w-full flex justify-between items-start">
                <Link href="/">
                    <Image
                        className="mt-6"
                        src="/tfclogo.svg"
                        alt="tfc logo"
                        width={35}
                        height={35}
                        priority
                    />
                </Link>
                <div className="ml-3 mt-3">
                    <ContentMenu />
                </div>
            </div>
            <div className="p-10 grid grid-cols-6 gap-4 justify-items-center no-scrollbar overflow-y-auto h-[100vh] w-[68vw]">
                {descendants.map(descendant => (
                    <DescendantButton
                        key={descendant.descendant_id}
                        descendant={descendant}
                        onClick={showPopup}
                    />
                ))}
            </div>
            {isPopupVisible && selectedDescendant && (
                <Popup descendant={selectedDescendant} onClose={closePopup} />
            )}
        </main>
    )
}

function Popup({ descendant, onClose }: { descendant: DescendantInfo, onClose: () => void }) {
    const [currentLevel, setCurrentLevel] = useState(descendant.descendant_stat[0].level)

    const increaseLevel = () => {
        setCurrentLevel(prevLevel => Math.min(prevLevel + 1, descendant.descendant_stat.length))
    }

    const decreaseLevel = () => {
        setCurrentLevel(prevLevel => Math.max(prevLevel - 1, 1))
    }

    const currentStat = descendant.descendant_stat.find(stat => stat.level === currentLevel)

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gradient-to-br from-blue-800 via-slate-900 to-blue-800 p-5 rounded-lg shadow-lg relative">
                <button onClick={onClose} className="absolute top-0 right-0 p-2">X</button>
                <h2>{descendant.descendant_name}</h2>

                <Image
                    src={descendant.descendant_image_url}
                    alt={descendant.descendant_name}
                    width={100}
                    height={100}
                />

                <div className="mt-4">
                    <h3 className="text-lg font-bold">Module Stats</h3>
                    {currentStat && (
                        <div className="align-text-center">
                            <p>Level: {currentStat.level}</p>
                        </div>
                    )}
                </div>
                <div className="mt-4 flex space-x-2 relative">
                    <button onClick={decreaseLevel} className="p-2">
                        <Image
                            src="/arrowL.svg"
                            alt="decrease level"
                            width={20}
                            height={20} />
                    </button>

                    <button onClick={increaseLevel} className="p-2 ">
                        <Image
                            src="/arrowR.svg"
                            alt="Increase level"
                            width={20}
                            height={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}
