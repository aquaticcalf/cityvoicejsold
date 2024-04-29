import { useState } from "react"

const Option = ({ index, updateOption = () => {} }) => {
    const [optionValue, setOptionValue] = useState("")

    const handleChange = (event) => {
        setOptionValue(event.target.value)
        updateOption(index, event.target.value)
    }

    return (
        <input className="rounded-[100px] p-2" type="text" name={`Option ${index}`} placeholder={`Option ${index}`} value={optionValue} onChange={handleChange} />
    )
}

export default Option
