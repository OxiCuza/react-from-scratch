import { createContext, Dispatch, SetStateAction, use } from "react";
import { Puppy } from "../types";

export const LikedContext = createContext<{
    liked: Puppy["id"][];
    setLiked: Dispatch<SetStateAction<Puppy["id"][]>>;
}>(null);

export function useLiked() {
    const ctx = use(LikedContext);

    if (!ctx) {
        throw new Error("The useLiked hook must be used within a LikedContext wrapper");
    }

    return ctx;
}