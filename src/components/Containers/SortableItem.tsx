import {
    useSortable
} from '@dnd-kit/sortable';
import { ReactNode } from 'react';
import { FaBars } from 'react-icons/fa';
import { CSS } from '@dnd-kit/utilities';
import { useState } from 'react';

interface SortableItemProps {
    id: string
    children: ReactNode
    onClick?: () => void
    onEdit?: () => void
    onDelete?: () => void
    onReorder?: () => void
}

const SortableItem = (props: SortableItemProps) => {
    const { id, children, onClick } = props;
    const [isClick, setIsClick] = useState(true);
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

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

    // Handle the click event
    const handleClick = () => {
        if (isClick) {
            if (onClick) onClick();
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
    }
};

export default SortableItem;
