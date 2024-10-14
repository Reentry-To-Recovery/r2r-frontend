interface CheckboxProps {
    id: string
    label: string
    checked: boolean
    onChange: React.ChangeEventHandler<HTMLInputElement>
    disabled?: boolean
}

const Checkbox = (props: CheckboxProps) => {
    const { id, label, checked, onChange, disabled } = props;

    return (
        <div className="checkbox">
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    )
}

export default Checkbox;
