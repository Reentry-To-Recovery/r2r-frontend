import { FaSquarePlus } from "react-icons/fa6"

interface AddButtonProps {
    label: string
    onClick: () => void
    fillStyle: "solid" | "transparent"
}

const AddButton = (props: AddButtonProps) => {
    const { label, onClick, fillStyle } = props;

    const isTransparent = fillStyle === "transparent";

    return (
        <button
            type="button"
            onClick={onClick}
            className={`flex-center ${isTransparent ? "transparent-button" : "solid-button"}`}
            style={{
                paddingLeft: isTransparent ? undefined : "8px",
                paddingRight: isTransparent ? undefined : "8px"
            }}
        >
            <span style={{ marginRight: "4px" }}><FaSquarePlus /></span>
            {label}
        </button>
    )
}

export default AddButton;
