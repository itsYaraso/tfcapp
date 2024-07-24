import Image from "next/image";
import { DescendantInfo } from "../API/descendants/api.tsx";

interface DescendantButtonProps {
    descendant: DescendantInfo;
    onClick: (descendant: DescendantInfo) => void;
}

const DescendantButton: React.FC<DescendantButtonProps> = ({ descendant, onClick }) => {
    return (
        <button
            onClick={() => onClick(descendant)}
            type="button"
            className="flex flex-col items-center justify-center p-5"
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
    );
};

export default DescendantButton;
