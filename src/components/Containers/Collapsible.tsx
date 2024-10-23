import React, { ReactNode, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

interface CollapsibleProps {
    title: string;
    children: ReactNode;
}

const Collapsible = (props: CollapsibleProps) => {
    const { title, children } = props;
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={styles.container}>
            <div onClick={toggleCollapse} style={styles.header}>
                <div style={styles.titleContainer}>
                    <span>{title}</span>
                    <span style={styles.arrow}>
                        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                </div>
            </div>
            {isOpen && <div style={styles.borderLine}></div>}
            {isOpen && <div style={styles.content}>{children}</div>}
        </div>
    );
};

const styles = {
    container: {
        border: "1px solid #ccc",
        borderRadius: "4px",
    },
    header: {
        cursor: "pointer",
        fontWeight: "bold",
        padding: "8px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    titleContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    arrow: {
        marginLeft: "8px",
        fontSize: "16px",
    },
    borderLine: {
        borderBottom: "1px solid #ccc"
    },
    content: {
        marginTop: "8px",
        padding: "8px",
        borderRadius: "4px",
    },
};

export default Collapsible;
