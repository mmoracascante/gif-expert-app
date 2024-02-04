import { ChangeEvent, FormEvent, useState } from "react"

interface Props {
    addCategory: (newCategory: string) => void
}


export const AddCategory = ({ addCategory }: Props) => {

    const [inputValue, setInputValue] = useState<string>('')

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (inputValue !== '' && inputValue.trim()) {
            addCategory(inputValue)
            setInputValue('')
        }
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Buscar gif..."
                    value={inputValue}
                    onChange={onInputChange}
                />
            </form>

        </>
    )
}
