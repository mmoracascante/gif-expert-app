import { useState } from "react"
import { AddCategory, GifGrid } from "./components"




export const GifExpertApp = () => {

    const [categories, setCategories] = useState<string[]>([])

    const addCategory = (newCategory: string) => {
        const addNewCategory = categories.find(category => category.toLowerCase() === newCategory.toLowerCase())
        if (addNewCategory) return;
        return setCategories([
            newCategory,
            ...categories,
        ])
    }

    return (
        <>
            <h1>
                Gif Expert App
            </h1>
            <AddCategory addCategory={addCategory} />



            {
                categories && categories.map((item) => (
                    <GifGrid
                        category={item}
                        key={item}
                    />
                ))
            }
        </>
    )
}

