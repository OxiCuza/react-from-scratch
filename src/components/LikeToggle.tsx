import { Heart, LoaderCircle } from "lucide-react";
import { useLiked } from "../context/liked-context";
import { useState } from "react";

export function LikeButton({
    id
}: {
    id: number
}) {
    const {liked, setLiked} = useLiked();
    const [pending, setPending] = useState(false);

    return (
        <button 
            className="group"
            onClick={() => {
                setPending(true);
                
                setTimeout(() => {
                    if (liked.includes(id)) {
                        setLiked(liked.filter((likedId) => likedId !== id))
                    } else {
                        setLiked([...liked, id])
                    }
                    setPending(false);
                }, 1000);

            }}>
            
            {pending ? (
                <LoaderCircle className="animate-spin stroke-slate-300" />
            ) : (
                <Heart 
                    className={
                        liked.includes(id)
                            ? "fill-pink-500 stroke-none"
                            : "stroke-slate-200 group-hover:stroke-slate-300"
                    } 
                />
            )}
        </button>
    )
}