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
import SortableItem, { Sortable } from './SortableItem';

interface OrderableListProps<TData extends Sortable> {
    data: TData[]
    onExpandItem?: (item: TData) => void
    onEdit?: (item: TData) => void
    onDelete?: (item: TData) => void
    onReorder?: (orderedItems: TData[]) => void
}

const OrderableList = <TData extends Sortable>(props: OrderableListProps<TData>) => {
    const { data, onExpandItem, onEdit, onDelete, onReorder } = props;
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
                            onExpandItem={() => { if (onExpandItem) { onExpandItem(item); } }}
                            onEdit={() => { }}
                            onDelete={() => { }}
                        >
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
