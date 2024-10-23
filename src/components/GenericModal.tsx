import { ReactNode } from "react"
import { createPortal } from "react-dom"

interface GenericModalProps {
    showModal: boolean
    children: ReactNode
}

const GenericModal = (props: GenericModalProps) => {
    const { showModal, children } = props;

    return (
        showModal ? createPortal(
            <div className="modal-overlay">
                <div className="modal">
                    {children}
                </div>
            </div>,
            document.body
        ) : <></>
    )
}

export default GenericModal;
