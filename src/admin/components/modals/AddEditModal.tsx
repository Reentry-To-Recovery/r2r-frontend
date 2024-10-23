import { ReactNode } from "react";
import GenericModal from "../../../components/GenericModal";
import { FaXmark } from "react-icons/fa6";

interface AddModalProps {
    title: string
    children: ReactNode
    showModal: boolean
    setShowModal: (showModal: boolean) => void
    submitButtonLabel: string
    onSubmit: () => void
    submitDisabled: boolean
}

const AddEditModal = (props: AddModalProps) => {
    const { title, children, showModal, setShowModal, submitButtonLabel, onSubmit, submitDisabled } = props;

    const hideModal = () => {
        setShowModal(false);
    }

    return (
        <GenericModal showModal={showModal}>
            <div style={styles.header}>
                <span style={styles.title}>{title}</span>
                <span style={styles.exit}><FaXmark onClick={hideModal} /></span>
            </div>
            <div style={styles.borderLine}></div>
            <div style={styles.content}>
                {children}
            </div>
            <div style={styles.borderLine}></div>
            <div style={styles.footer}>
                <button className="transparent-button" onClick={hideModal}>Cancel</button>
                <button className="solid-button" onClick={onSubmit} disabled={submitDisabled}>{submitButtonLabel}</button>
            </div>
        </GenericModal>
    );

}

const styles = {
    header: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "8px"
    },
    footer: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "8px"
    },
    content: {
        marginTop: "16px",
        marginBottom: "16px"
    },
    exit: {
        cursor: "pointer",
        fontSize: "18px"
    },
    title: {
        fontSize: "20px",
        fontWeight: "bold"
    },
    borderLine: {
        borderBottom: "1px solid #ccc",
        marginLeft: "-16px",
        marginRight: "-16px",
        width: "calc(100% + 32px)"
    }
}

export default AddEditModal;
