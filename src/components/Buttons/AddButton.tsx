import { FaSquarePlus } from "react-icons/fa6"

interface AddButtonProps {
    label: string
    onClick: () => void
}

const AddButton = (props: AddButtonProps) => {
    const { label, onClick } = props;

    return (
        <button onClick={onClick} className="transparent-button flex-center">
            <span style={{ marginRight: "4px" }}><FaSquarePlus /></span>
            {label}
        </button>
    )
}

export default AddButton;
