import {
    useSortable
} from '@dnd-kit/sortable';
import { ReactNode } from 'react';
import { FaBars } from 'react-icons/fa';
import { CSS } from '@dnd-kit/utilities';

interface SortableItemProps {
    id: string
    children: ReactNode
}

const SortableItem = (props: SortableItemProps) => {
    const { id, children } = props;
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
        ...styles.listItem
    };

    return (
        <li ref={setNodeRef} style={style} {...attributes} {...listeners}>
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
    },
};

export default SortableItem;
