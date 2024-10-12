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
            <label className={error ? "label label--error" : "label"} htmlFor={id}>{label}</label>
            <input
                id={id}
                className={error ? "input input--error" : "input"}
                type="text"
                value={value}
                onChange={onChange}
                placeholder={`Enter ${label}`}
                disabled={disabled}
            />
            <div className={error ? "helperText helperText--error" : "helperText"}>{helperText}</div>
        </div>
    )
}

export default TextInput;
