import Link from "next/link"
import Image from "next/image"

export default function GroupCard() {
    return (
        <div className="rounded-box h-96">
            <div className="w-full">
                <button
                    className="m-10 border rounded-xl flex flex-col items-center justify-center p-5 relative"
                    style={{
                        width: '1200px',
                        height: '200px'
                    }}>
                    <p className="border justify-end flex">LFG group</p>
                </button>
            </div>
        </div>

    )
}