import React, { ReactNode, useState } from "react";

interface CollapsibleProps {
    title: string
    children: ReactNode
}

const Collapsible = (props: CollapsibleProps) => {
    const { title, children } = props;
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={styles.container}>
            <div
                style={{
                    ...styles.header,
                    borderBottom: isOpen ? "1px solid #ccc" : "none",
                    paddingBottom: isOpen ? "8px" : undefined
                }}
                onClick={toggleCollapse}
            >
                <span>{title}</span>
                <span style={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
            </div>
            {isOpen && <div style={styles.content}>{children}</div>}
        </div>
    );
};

const styles = {
    container: {
        border: "1px solid #ccc",
        borderRadius: "4px",
        padding: "8px"
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        cursor: "pointer",
        fontWeight: "bold"
    },
    arrow: {
        marginLeft: "8px",
        fontSize: "16px",
    },
    content: {
        marginTop: "8px",
        padding: "8px",
        borderRadius: "4px",
    },
};

export default Collapsible;
