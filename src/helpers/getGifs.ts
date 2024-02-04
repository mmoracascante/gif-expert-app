import { GIFTypes, GifGridTypes } from "../types"


export const getGfis = async (category: string): Promise<GifGridTypes[]> => {

    try {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=EuZpCHaeRJv5ewGNC0vu2mqNu8usRiRU&q=${category}&limit=10`
        const response = await fetch(url)
        const { data = [] } = await response.json()
        const gifs = data.map((item: GIFTypes) => ({
            id: item.id,
            title: item.title,
            url: item.images.downsized_medium.url,
        }))

        return gifs

    } catch (error) {
        throw error
    }


}