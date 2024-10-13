import { createPortal } from "react-dom"

interface ConfirmationModalProps {
    showModal: boolean
    content: string
    onConfirm: () => void
    onCancel: () => void
}

const ConfirmationModal = (props: ConfirmationModalProps) => {
    const { showModal, content, onConfirm, onCancel } = props;

    return (
        showModal ? createPortal(
            <div className="modal-overlay">
                <div className="modal">
                    <p>{content}</p>
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

export default ConfirmationModal;
