"use client"
import ContentMenu from "@/components/ContentMenu"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { getModules, moduleInfo } from "../API/Modules/api"

export default function Page() {

    const [modules, setModules] = useState<moduleInfo[]>([])
    const [selectedModule, setSelectedModule] = useState<moduleInfo | null>(null)
    const [isPopupVisible, setPopupVisible] = useState(false)

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

    const showPopup = (module: moduleInfo) => {
        setSelectedModule(module)
        setPopupVisible(true)
    }

    const closePopup = () => {
        setSelectedModule(null)
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
            <div className="flex flex-wrap mb-2 mt-24 border-2 grid grid-cols-7 gap-4 justify-items-center no-scrollbar overflow-y-auto w-[62vw] h-[0vh]">
            </div>
            <div className="p-10 grid grid-cols-6 gap-4 justify-items-center no-scrollbar overflow-y-auto h-[100vh] w-[68vw]">
                {modules.map(module => (
                    <ModuleButton
                        key={module.module_id}
                        module={module}
                        onClick={showPopup}
                    />
                ))}
            </div>
            <div className="absolute top-0 left-0 ml-3 mt-3">
                <ContentMenu />
            </div>
            {isPopupVisible && selectedModule && (
                <Popup module={selectedModule} onClose={closePopup} />
            )}
        </main>
    )
}

function ModuleButton({ module, onClick }: { module: moduleInfo, onClick: (module: moduleInfo) => void }) {
    
    return (
        <button
            onClick={() => onClick(module)}
            type="button"
            className="mt-10 border-slate-700 bg-gradient-to-br from-blue-800 via-slate-900 to-blue-800 rounded-xl border flex flex-col items-center justify-center p-5 relative"
            style={{ width: '150px', height: '200px' }}
        >

            <div className="bg-blue-950 border border-slate-700 flex rounded absolute top-[-10px]">
                <p className="">{module.module_socket_type} </p>
                <p className="pl-3">{ }</p>
            </div>

            <Image
                src={module.image_url}
                alt={module.module_name}
                width={50}
                height={50}
            />

            <div className="">
                <h2 className="flex">{module.module_name}</h2>
            </div>

            <div className="absolute bottom-0 w-full">
                <p className="">module type</p>
            </div>
        </button>
    )
}

function Popup({ module, onClose }: { module: moduleInfo, onClose: () => void }) {
    const [currentLevel, setCurrentLevel] = useState(module.module_stat[0].level)

    const increaseLevel = () => {
        setCurrentLevel(prevLevel => Math.min(prevLevel + 1, module.module_stat.length))
    }

    const decreaseLevel = () => {
        setCurrentLevel(prevLevel => Math.max(prevLevel - 1, 1))
    }

    const currentStat = module.module_stat.find(stat => stat.level === currentLevel)

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gradient-to-br from-blue-800 via-slate-900 to-blue-800 p-5 rounded-lg shadow-lg relative">
                <button onClick={onClose} className="absolute top-0 right-0 p-2">X</button>
                <h2>{module.module_name}</h2>
                <p>{module.module_type}</p>
                <p>{module.module_tier}</p>

                <Image
                    src={module.image_url}
                    alt={module.module_name}
                    width={100}
                    height={100}
                />

                <div className="mt-4">
                    <h3 className="text-lg font-bold">Module Stats</h3>
                    {currentStat && (
                        <div className="align-text-center">
                            <p>Level: {currentStat.level}</p>
                            <p>Capacity: {currentStat.module_capacity}</p>
                            <p>Value: {currentStat.value}</p>
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