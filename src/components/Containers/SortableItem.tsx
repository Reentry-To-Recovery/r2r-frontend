import { useSortable } from '@dnd-kit/sortable';
import { ReactNode } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaPenToSquare, FaAngleDown, FaAngleUp, FaRegTrashCan } from 'react-icons/fa6';
import { CSS } from '@dnd-kit/utilities';
import { useState } from 'react';

interface SortableItemProps<TData extends Sortable> {
    item: TData
    onEdit?: (item: TData) => void
    onDelete?: () => void
    children?: ReactNode
}

export interface Sortable {
    id: string
    title: string
    children?: ReactNode
}

const SortableItem = <TData extends Sortable>(props: SortableItemProps<TData>) => {
    const { item, children, onEdit, onDelete } = props;
    const [isClick, setIsClick] = useState(true);
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: item.id });
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
        ...styles.listItem
    };

    // Handle the mouse down event
    const handleMouseDown = () => {
        setIsClick(true);
    };

    // Handle mouse move to detect drag
    const handleMouseMove = () => {
        setIsClick(false);
    };

    const handleClick = (e: React.MouseEvent) => {
        if (isClick) {
            const target = e.target as HTMLElement;

            if (target.closest(".edit-icon")) {
                handleEdit(e);
                return;
            } else if (target.closest(".delete-icon")) {
                handleDelete(e);
                return;
            }

            toggleCollapse();
        }
    };

    const handleEdit = (e: React.MouseEvent) => {
        e.stopPropagation();
        onEdit && onEdit(item);
    };

    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation();
        onDelete && onDelete();
    };

    return (
        <div>
            <li
                ref={setNodeRef}
                style={style}
                {...attributes}
                {...listeners}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleClick}
            >
                <div style={styles.nonexpandedItem}>
                    <span style={styles.handle}>
                        <FaBars />
                    </span>
                    <div style={styles.header}>
                        <span>{item.title}</span>
                        <div style={styles.actions}>
                            {onEdit && <span className="edit-icon" style={styles.action}><FaPenToSquare /></span>}
                            {onDelete && <span className="delete-icon" style={styles.action}><FaRegTrashCan /></span>}
                            {children && <span style={styles.arrow}>{isOpen ? <FaAngleUp /> : <FaAngleDown />}</span>}
                        </div>
                    </div>
                </div>
                {isOpen && <div style={styles.expandedItem}>{children}</div>}
            </li>
        </div>
    );
};

const styles = {
    listItem: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column" as "column",
        borderRadius: "4px",
        border: "1px solid #ccc",
        cursor: "grab",
        marginBottom: "8px"
    },
    handle: {
        marginRight: "8px",
        cursor: "grab",
        fontSize: "18p",
    },
    action: {
        cursor: "pointer",
        fontSize: "18p",
        marginRight: "16px",
    },
    arrow: {
        fontSize: "16px",
        cursor: "pointer"
    },
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    },
    actions: {
        display: "flex",
        alignItems: "center"
    },
    nonexpandedItem: {
        display: "flex",
        alignItems: "center",
        padding: "16px",
        backgroundColor: "#f0f0f0",
        width: "100%",
        borderRadius: "4px"
    },
    expandedItem: {
        padding: "16px",
        backgroundColor: "#f9f9f9",
        width: "100%",
        borderRadius: "0px 0px 4px 4px"
    }
};

export default SortableItem;
