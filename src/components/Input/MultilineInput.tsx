interface MultilineInputProps {
    id: string
    rows?: number
    cols?: number
    text: string
    label: string
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>
    disabled?: boolean
}

const MultilineInput = (props: MultilineInputProps) => {
    const { id, rows, cols, text, label, onChange, disabled } = props;

    return (
        <div className="inputField">
            <label htmlFor={id}>{label}</label>
            <textarea
                id={id}
                rows={rows ?? 1}
                cols={cols ?? 1}
                onChange={onChange}
                disabled={disabled}
                placeholder={`Enter ${label}`}
                value={text}
            />
        </div>

    )
}

export default MultilineInput;