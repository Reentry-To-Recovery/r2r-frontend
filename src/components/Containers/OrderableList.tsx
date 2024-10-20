import React, { useEffect, useState, ReactNode } from 'react';
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
import SortableItem, { Sortable } from './SortableItem';

interface OrderableListProps<TData extends Sortable> {
    data: TData[]
    onEdit?: (item: TData) => void
    onDelete?: (item: TData) => void
    onReorder?: (orderedItems: TData[]) => void
    renderExpandedItem?: (item: TData) => ReactNode
}

const OrderableList = <TData extends Sortable>(props: OrderableListProps<TData>) => {
    const { data, onEdit, onDelete, onReorder, renderExpandedItem } = props;
    const [items, setItems] = useState<TData[]>(data);

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

                if (onReorder) {
                    onReorder(newItems);
                }

                return newItems;
            });
        }
    };

    useEffect(() => {
        setItems(data);
    }, [data])

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext items={items.map(item => item.id)} strategy={verticalListSortingStrategy}>
                <ul style={styles.list}>
                    {items.map((item) => (
                        <SortableItem
                            key={item.id}
                            item={item}
                            onEdit={() => { }}
                            onDelete={() => { }}
                        >
                            {renderExpandedItem && renderExpandedItem(item)}
                        </SortableItem>
                    ))}
                </ul>
            </SortableContext>
        </DndContext >
    );
};

const styles = {
    list: {
        listStyleType: "none",
        padding: 0,
        margin: 0
    }
}

export default OrderableList;
