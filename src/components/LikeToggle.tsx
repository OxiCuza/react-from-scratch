import { Heart } from "lucide-react";
import { useState } from "react";

export function LikeButton() {
    const [isLiked, setIsLiked] = useState(false);
    const [count, setCount] = useState(0);

    function handleClick() {
        setIsLiked(!isLiked);
        setCount(count + 1);
    }

    return (
        <button 
            className="group flex items-center gap-1"
            onClick={handleClick}>
            <Heart 
                className={
                    isLiked // Chase
                        ? "fill-pink-500 stroke-none"
                        : "stroke-slate-200 group-hover:stroke-slate-300"
                } 
            />

            <span>{count}</span>
        </button>
    )
}