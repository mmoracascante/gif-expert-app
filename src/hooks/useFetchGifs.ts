import { useEffect, useState } from "react";
import { GifGridTypes } from "../types"
import { getGfis } from "../helpers/getGifs";

export const useFetchGifs = (category: string) => {

    const [gifs, setGifs] = useState<GifGridTypes[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)


    const getImages = async () => {
        const gifs = await getGfis(category);
        setGifs(gifs)
        setIsLoading(false)
    }

    useEffect(() => {
        getImages()
    }, [])



    return {
        gifs,
        isLoading
    }

}