'use client'
import { useEffect, useState } from "react"
import ContentMenu from "@/components/ContentMenu"
import Link from "next/link"
import Image from "next/image"
import { getVIntercept, VIntercept } from "../API/VIntercept/api"
import Trailer from "@/components/Trailer"

    export default function Page() {

        const [Collosus, setCollosus] = useState<VIntercept[]>([])
        const [selectedCollosus, setSelectedCollosus] = useState<VIntercept | null>(null)
        const [isPopupVisible, setPopupVisible] = useState(false)
    
        useEffect(() => {
            async function fetchCollosus() {
                try {
                    const data = await getVIntercept()
                    setCollosus(data)
                } catch (error) {
                    console.error("Failed to fetch Collosus:", error)
                }
            }
            fetchCollosus()
        }, [])
    
        const showPopup = (Collosus: VIntercept) => {
            setSelectedCollosus(Collosus)
            setPopupVisible(true)
        }
    
        const closePopup = () => {
            setSelectedCollosus(null)
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
                    {Collosus.map(Collosus => (
                        <CollosusButton
                            key={Collosus.void_battle_id}
                            Collosus={Collosus}
                            onClick={showPopup}
                        />
                    ))}
                </div>
                <div className="absolute top-0 left-0 ml-3 mt-3">
                    <ContentMenu />
                </div>
            </main>
        )
    }
    
    function CollosusButton({ Collosus, onClick }: { Collosus: VIntercept, onClick: (Collosus: VIntercept) => void }) {
        
        return (
            <button
                onClick={() => onClick(Collosus)}
                type="button"
                className="mt-10 border-slate-700 bg-gradient-to-br from-blue-800 via-slate-900 to-blue-800 rounded-xl border flex flex-col items-center justify-center p-5 relative"
                style={{ width: '150px', height: '200px' }}
            >
    
                <div className="">
                    <h2 className="">{Collosus.void_battle_name}</h2>
                </div>
            </button>
        )
    }
