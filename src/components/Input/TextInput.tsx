import { useState, useEffect } from "react"

interface TextInputProps {
    id: string
    value: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
    label: string
    disabled?: boolean
    error?: boolean
    helperText?: string
}

const TextInput = (props: TextInputProps) => {
    const { id, value, onChange, label, disabled, error, helperText } = props;

    return (
        <div className="inputField">
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type="text"
                value={value}
                onChange={onChange}
                placeholder={`Enter ${label}`}
                disabled={disabled}
            />
            <div>{helperText}</div>
        </div>
    )
}

export default TextInput;
