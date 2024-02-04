import { GifGridTypes } from "../types"




export const GifCardItem = ({ title, url, }: GifGridTypes) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p className="card">{title}</p>
        </div>
    )
}
