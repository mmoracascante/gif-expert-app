
import { GifCardItem } from "."
import { useFetchGifs } from "../hooks/useFetchGifs"

interface Props {
    category: string

}

export const GifGrid = ({ category }: Props) => {


    const { gifs, isLoading } = useFetchGifs(category)



    return (
        <>

            {
                isLoading ? 'Cargando...' :
                    <>
                        <h3>{category}</h3>
                        <div className="card-grid">
                            {
                                gifs.map(gif => (
                                    <GifCardItem {...gif} key={gif.id} />
                                ))
                            }
                        </div>
                    </>
            }
        </>
    )
}
