import { Heart } from "lucide-react";
import { useLiked } from "../context/liked-context";

export function LikeButton({
    id
}: {
    id: number
}) {
    const {liked, setLiked} = useLiked();
    return (
        <button 
            className="group"
            onClick={() => {
                if (liked.includes(id)) {
                    setLiked(liked.filter((likedId) => likedId !== id))
                } else {
                    setLiked([...liked, id])
                }
            }}>
            <Heart 
                className={
                    liked.includes(id)
                        ? "fill-pink-500 stroke-none"
                        : "stroke-slate-200 group-hover:stroke-slate-300"
                } 
            />
        </button>
    )
}