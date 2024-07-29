"use client"
import ContentMenu from "@/components/ContentMenu"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { getWeapons, weaponInfo } from "../API/weapons/api"

export default function Page() {

    const [weapons, setweapons] = useState<weaponInfo[]>([])
    const [selectedweapon, setSelectedWeapons] = useState<weaponInfo | null>(null)
    const [isPopupVisible, setPopupVisible] = useState(false)

    useEffect(() => {
        async function fetchweapon() {
            try {
                const data = await getWeapons()
                setweapons(data)
            } catch (error) {
                console.error("Failed to fetch weapon:", error)
            }
        }
        fetchweapon()
    }, [])

    const showPopup = (weapon: weaponInfo) => {
        setSelectedWeapons(weapon)
        setPopupVisible(true)
    }

    const closePopup = () => {
        setSelectedWeapons(null)
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
                {weapons.map(weapon => (
                    <WeaponButton
                        key={weapon.weapon_id}
                        weapon={weapon}
                        onClick={showPopup}
                    />
                ))}
            </div>
            <div className="absolute top-0 left-0 ml-3 mt-3">
                <ContentMenu />
            </div>
            {isPopupVisible && selectedweapon && (
                <Popup weapon={selectedweapon} onClose={closePopup} />
            )}
        </main>
    )
}

function WeaponButton({ weapon, onClick }: { weapon: weaponInfo, onClick: (weapon: weaponInfo) => void }) {
    
    return (
        <button
            onClick={() => onClick(weapon)}
            type="button"
            className="mt-10 flex flex-col items-center justify-center p-5 relative"
            style={{ width: '150px', height: '200px' }}
        >

            <div className="bg-zinc-950 border border-slate-700 flex rounded absolute top-[-10px]">
                <p className="">{weapon.weapon_name} </p>
                <p className="pl-3">{ }</p>
            </div>

            <Image
                src={weapon.image_url}
                alt={weapon.weapon_name}
                width={300}
                height={300}
            />
        </button>
    )
}

function Popup({ weapon, onClose }: { weapon: weaponInfo, onClose: () => void }) {
    const [currentLevel, setCurrentLevel] = useState(weapon.stat_detail[0].level)

    const increaseLevel = () => {
        setCurrentLevel(prevLevel => Math.min(prevLevel + 1, weapon.stat_detail.length))
    }

    const decreaseLevel = () => {
        setCurrentLevel(prevLevel => Math.max(prevLevel - 1, 1))
    }

    const currentStat = weapon.stat_detail.find(stat => stat.level === currentLevel)

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gradient-to-br from-blue-800 via-slate-900 to-blue-800 p-5 rounded-lg shadow-lg relative">
                <button onClick={onClose} className="absolute top-0 right-0 p-2">X</button>
                <h2>{weapon.weapon_name}</h2>
                <p>{weapon.weapon_type}</p>
                <p>{weapon.weapon_tier}</p>

                <Image
                    src={weapon.image_url}
                    alt={weapon.weapon_name}
                    width={100}
                    height={100}
                />

                <div className="mt-4">
                    <h3 className="text-lg font-bold">weapon Stats</h3>
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