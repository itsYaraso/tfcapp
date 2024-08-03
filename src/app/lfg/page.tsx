'use client'
import { useState } from "react"
import ContentMenu from "@/components/ContentMenu"
import ActivityList from "@/components/ActivityList"
import Link from "next/link"
import Image from "next/image"
import GroupCard from "@/components/GroupCard"

const Page: React.FC = () => {
    const [isPopupVisible, setPopupVisible] = useState(false)

    const creategroup = () => {
        setPopupVisible(true)
    }

    const creategroupclose = () => {
        setPopupVisible(false)
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
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

            <div className="border p-4 min-h-96 min-w-full grid grid-cols-5 grid-flow-row">
                <div className="grid grid-rows border">
                    <p className="mr-4 ">Activity</p>
                    <div className="border">
                    </div>

                </div>
                <div className="grid grid-rows border">
                    <p className="mr-4">Members</p>
                    <div className="border">

                    </div>
                </div>
                <div className="grid grid-rows border">
                    <p className="mr-4">Location</p>
                    <div className="border">

                    </div>
                </div>
                <div className="grid grid-rows border">
                    <p className="mr-4">Time</p>
                    
                    <div className="border">
                    </div>
                </div>
                <div className="mt-4">
                    <button onClick={creategroup}
                        className="border p-4 btn-wide hover:bg-zinc-950 hover:text-zinc-500">
                        Create Team
                    </button>
                </div>
            </div>
            {isPopupVisible && <GroupCreator creategroupclose={creategroupclose} />}
        </div>
    )
}

interface GroupCreatorProps {
    creategroupclose: () => void
}

const GroupCreator: React.FC<GroupCreatorProps> = ({ creategroupclose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className=" bg-zinc-950 p-6 rounded-lg relative border">
                <button onClick={creategroupclose} className="absolute top-2 right-2 p-2  text-white rounded-full">X</button>
                <div className="">
                    <h2 className="text-2xl font-bold">Create Team</h2>
                    <div className="border mt-10 rounded-xl  flex flex-col items-center justify-center p-5 relative" style={{ width: '90vw', height: '70vh' }}>
                        <div>
                            <h6 className="">Team Title</h6>
                            <textarea className="bg-zinc-900 border-zinc-900 resize-none text-white overflow-hidden" placeholder="Enter Team Title." />
                            <p className="">Players needed?</p>
                            <button onClick={() => {}} className="border p-4 px-6">
                                <p>1</p>
                            </button>
                            <button className="border p-4 px-6">
                                <p>2</p>
                            </button>
                            <button className="border p-4 px-6">
                                <p>3</p>
                            </button>
                            <div>
                                <p>Choose what platform you need.</p>
                                <button className="border p-4 px-6">
                                    <p>PC</p>
                                </button>
                                <button className="border p-4 px-6">
                                    <p>PS</p>
                                </button>
                                <button className="border p-4 px-6">
                                    <p>Xbox</p>
                                </button>
                                <div>
                                    <p>Is microphone required?</p>
                                </div>
                                <button className="border p-4 px-6">
                                    <p>Yes</p>
                                </button>
                                <button className="border p-4 px-6">
                                    <p>No</p>
                                </button>
                            </div>
                        </div>
                        <ActivityList />
                    </div>
                </div>
            </div>
        </div>
    )
}