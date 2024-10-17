import {
    useSortable
} from '@dnd-kit/sortable';
import { ReactNode } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaPenToSquare, FaAngleDown, FaAngleUp, FaRegTrashCan } from 'react-icons/fa6';
import { CSS } from '@dnd-kit/utilities';
import { useState } from 'react';

interface SortableItemProps<TData extends Sortable> {
    item: TData
    onEdit?: () => void
    onDelete?: () => void
    onExpandItem?: (item: TData) => void
    children?: ReactNode
}

export interface Sortable {
    id: string
    title: string
}

const SortableItem = <TData extends Sortable>(props: SortableItemProps<TData>) => {
    const { item, children, onEdit, onDelete, onExpandItem } = props;
    const [isClick, setIsClick] = useState(true);
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: item.id });
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        const newIsOpen = !isOpen;
        setIsOpen(newIsOpen);

        if (newIsOpen) {
            if (onExpandItem) {
                onExpandItem(item);
            }
        }
    };

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
        ...styles.listItem,
    };

    // Handle the mouse down event
    const handleMouseDown = () => {
        setIsClick(true);
    };

    // Handle mouse move to detect drag
    const handleMouseMove = () => {
        setIsClick(false);
    };

    const handleClick = () => {
        if (isClick) {
            toggleCollapse();
        }
    };

    return (
        <li
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleClick}
        >
            <span style={styles.handle}>
                <FaBars />
            </span>
            <div style={styles.header}>
                <span>{item.title}</span>
                <div style={styles.actions}>
                    {onEdit && <span style={styles.action}><FaPenToSquare /></span>}
                    {onDelete && <span style={styles.action}><FaRegTrashCan /></span>}
                    {onExpandItem && <span style={styles.arrow}>{isOpen ? <FaAngleUp /> : <FaAngleDown />}</span>}
                </div>
            </div>
            {children}
        </li>
    );
};

const styles = {
    listItem: {
        display: "flex",
        alignItems: "center",
        padding: "16px",
        marginBottom: "8px",
        backgroundColor: "#f0f0f0",
        borderRadius: "4px",
        border: "1px solid #ccc",
        cursor: "grab",
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
    }
};

export default SortableItem;
