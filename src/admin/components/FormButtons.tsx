interface FormButtonsProps {
    onSubmitClick: React.MouseEventHandler<HTMLInputElement>
    onCancelClick: React.MouseEventHandler<HTMLInputElement>
    submitDisabled?: boolean
}

const FormButtons = (props: FormButtonsProps) => {
    const { onSubmitClick, onCancelClick, submitDisabled } = props;

    return (
        <div className="flex justify" style={{ columnGap: "8px" }}>
            <input
                type="submit"
                className="solid-button"
                onClick={onSubmitClick}
                disabled={submitDisabled}
            />
            <input
                type="button"
                className="transparent-button"
                onClick={onCancelClick}
                value="Cancel"
            />
        </div>
    );
}

export default FormButtons;