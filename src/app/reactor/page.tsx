"use client"
import ContentMenu from "@/components/ContentMenu"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { getReactors, reactorInfo } from "../API/Reactors/api"

export default function Page() {

    const [reactors, setreactors] = useState<reactorInfo[]>([])
    const [selectedReactor, setSelectedReactor] = useState<reactorInfo | null>(null)
    const [isPopupVisible, setPopupVisible] = useState(false)

    useEffect(() => {
        async function fetchReactor() {
            try {
                const data = await getReactors()
                setreactors(data)
            } catch (error) {
                console.error("Failed to fetch module:", error)
            }
        }
        fetchReactor()
    }, [])

    const showPopup = (reactor: reactorInfo) => {
        setSelectedReactor(reactor)
        setPopupVisible(true)
    }

    const closePopup = () => {
        setSelectedReactor(null)
        setPopupVisible(false)
    }

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
            <div className="mb-2 mt-24 border-2 grid grid-cols-7 gap-4 justify-items-center no-scrollbar overflow-y-auto w-[62vw] h-[0vh]">
            </div>
            <div className="p-10 grid grid-cols-6 gap-4 justify-items-center no-scrollbar overflow-y-auto h-[100vh] w-[68vw]">
                {reactors.map(reactor => (
                    <ReactorButton
                        key={reactor.reactor_id}
                        reactor={reactor}
                        onClick={showPopup}
                    />
                ))}
            </div>
            <div className="absolute top-0 left-0 ml-3 mt-3">
                <ContentMenu />
            </div>
            {isPopupVisible && selectedReactor && (
                <Popup reactor={selectedReactor} onClose={closePopup} />
            )}
        </main>
    )
}

function ReactorButton({ reactor, onClick }: { reactor: reactorInfo, onClick: (reactor: reactorInfo) => void }) {
    return (
        <button
            onClick={() => onClick(reactor)}
            type="button"
            className="mt-10 border-slate-700 bg-gradient-to-br from-blue-800 via-slate-900 to-blue-800 rounded-xl border flex flex-col items-center justify-center p-5 relative"
            style={{ width: '150px', height: '200px' }}
        >

            <div className="bg-blue-950 border border-slate-700 flex rounded absolute top-[-10px]">
                <p className="">{reactor.reactor_tier} </p>
                <p className="pl-3">{ }</p>
            </div>

            <Image
                src={reactor.image_url}
                alt={reactor.reactor_name}
                width={50}
                height={50}
            />

            <div className="">
                <h2 className="flex">{reactor.reactor_name}</h2>
            </div>

            <div className="absolute bottom-0 w-full">
                <p className="">module type</p>
            </div>
        </button>
    )
}

function Popup({ reactor, onClose }: { reactor: reactorInfo, onClose: () => void }) {
    const [currentLevel, setCurrentLevel] = useState(reactor.reactor_skill_power[0].level)
    const [currentEnchant, SetCurrentEnchant] = useState(reactor.enchant_effect[0].enchant_level)

    const increaseLevel = () => {
        setCurrentLevel(prevLevel => Math.min(prevLevel + 1, reactor.reactor_tier.length))
    }

    const decreaseLevel = () => {
        setCurrentLevel(prevLevel => Math.max(prevLevel - 1, 1))
    }

    const increaseEnchant = () => {
        SetCurrentEnchant(prevEnchant => Math.min(prevEnchant + 1, reactor.enchant_effect.length))
    }

    const currentStat = reactor.reactor_skill_power.find(stat => stat.level === currentLevel)
    const currentEnchantStat = reactor.enchant_effect.find(stat => stat.enchant_level === currentEnchant)

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gradient-to-br from-blue-800 via-slate-900 to-blue-800 p-5 rounded-lg shadow-lg relative">
                <button onClick={onClose} className="absolute top-0 right-0 p-2">X</button>
                <h2>{reactor.reactor_name}</h2>
                <p>{reactor.reactor_tier}</p>

                <Image
                    src={reactor.image_url}
                    alt={reactor.reactor_name}
                    width={100}
                    height={100}
                />

                <div className="mt-4">
                    <h3 className="text-lg font-bold">Module Stats</h3>
                    {currentStat && (
                        <div className="align-text-center">
                            <p>Level: {currentStat.level}</p>
                            <p>Skill Attack Power: {currentStat.skill_atk_power}</p>
                            <p>Sub Attack Power:   {currentStat.sub_skill_atk_power} </p>
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
                    
                    <button onClick={increaseEnchant} className="p-2">
                        <Image
                            src="/arrowR.svg"
                            alt="Increase level"
                            width={20}
                            height={20} />
                    </button>

                    <button onClick={decreaseLevel} className="p-2">
                        <Image
                            src="/arrowL.svg"
                            alt="decrease level"
                            width={20}
                            height={20} />
                    </button>
                    

                </div>
            </div>
        </div>
    )
}