import React, { useState } from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy
} from '@dnd-kit/sortable';
import SortableItem from './SortableItem';

interface OrderableListProps<TData extends { id: string, title: string }> {
    data: TData[]
    onExpandItem?: (item: TData) => void
    onEdit?: (item: TData) => void
    onDelete?: (item: TData) => void
    onReorder?: () => void
}

const OrderableList = <TData extends { id: string, title: string }>(props: OrderableListProps<TData>) => {
    const { data, onExpandItem, onEdit, onDelete, onReorder } = props;
    const [items, setItems] = useState<TData[]>(data);
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (active.id !== over?.id) {
            setItems((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id.toString());
                const newIndex = items.findIndex((item) => item.id === over?.id.toString());
                const newItems = arrayMove(items, oldIndex, newIndex);

                // Call the onReorder prop if it exists
                // if (onReorder) {
                //     onReorder(newItems);
                // }

                return newItems;
            });
        }
    };

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext items={items.map(item => item.id)} strategy={verticalListSortingStrategy}>
                <ul style={styles.list}>
                    {items.map((item) => (
                        <SortableItem key={item.id} id={item.id} onClick={() => {
                            if (onExpandItem) {
                                toggleCollapse();
                                onExpandItem(item);
                            }
                        }}>
                            <div style={styles.listItem}>
                                <span>{item.title}</span>
                                {onExpandItem && <span style={styles.arrow}>{isOpen ? "▲" : "▼"}</span>}
                            </div>
                        </SortableItem>
                    ))}
                </ul>
            </SortableContext>
        </DndContext>
    );
};

const styles = {
    list: {
        listStyleType: "none",
        padding: 0,
        margin: 0
    },
    arrow: {
        marginLeft: "8px",
        fontSize: "16px",
    },
    listItem: {
        display: "flex",
        justifyContent: "space-between",
        cursor: "pointer",
    }
}

export default OrderableList;
