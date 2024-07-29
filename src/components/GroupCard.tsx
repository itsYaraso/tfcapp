import Link from "next/link"
import Image from "next/image"
import { lfgGroup, groupsettings } from "@/types/lfgtypes"

export default function GroupCard ({getgroup} : {getgroup : lfgGroup}) {
    
    return (
        <div className="rounded-box h-96">
            <div className="w-full">
                <button
                    className="m-10 border rounded-xl flex flex-col items-center justify-center p-5 relative"
                    style={{
                        width: '1200px',
                        height: '200px'
                    }}>
                    <p className="border justify-end flex">{getgroup.selectedactivity}</p>
                    <p className="border justify-end flex">{getgroup.currplayercount}</p>
                    <p className="border justify-end flex">{getgroup.maxplayercount}</p>
                    <p className="border justify-end flex">{getgroup.currdescendant}</p>
                </button>
            </div>
        </div>
    )
}