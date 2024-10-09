interface ButtonProps {
    onClick: () => void
    label: string
    disabled?: boolean
}

const SolidButton = (props: ButtonProps) => {
    const { onClick, label, disabled } = props;

    return (<button className="solid-button" onClick={() => { }}>+ Add New</button>);
}

export default SolidButton;
