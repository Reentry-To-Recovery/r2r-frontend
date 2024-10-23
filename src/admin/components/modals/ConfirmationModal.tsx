import { ReactNode } from "react"
import { createPortal } from "react-dom"

interface ConfirmationModalProps {
    showModal: boolean
    children: ReactNode
    onConfirm: () => void
    onCancel: () => void
}

const ConfirmationModal = (props: ConfirmationModalProps) => {
    const { showModal, children, onConfirm, onCancel } = props;

    return (
        showModal ? createPortal(
            <div className="modal-overlay">
                <div className="modal" style={confirmationModalStyle}>
                    {children}
                    <div className="flex justify" style={{ columnGap: "8px" }}>
                        <button className="solid-button" style={{ width: "84px" }} onClick={onConfirm}>Yes</button>
                        <button
                            className="transparent-button"
                            style={{ width: "84px" }}
                            onClick={onCancel}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>,
            document.body
        ) : <></>
    )
}

const confirmationModalStyle = {
    display: "flex",
    flexDirection: "column" as "column",
    rowGap: "16px"
}

export default ConfirmationModal;
