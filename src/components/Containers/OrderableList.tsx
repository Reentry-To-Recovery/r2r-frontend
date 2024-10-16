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


// Mock data
const initialItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

const OrderableList = () => {
    const [items, setItems] = useState(initialItems);

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
                const oldIndex = items.indexOf(active.id.toString());
                const newIndex = items.indexOf(over?.id?.toString() ?? "");
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    };

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext items={items} strategy={verticalListSortingStrategy}>
                <ul style={styles.list}>
                    {items.map((item) => (
                        <SortableItem key={item} id={item}>
                            {item}
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
    }
}

export default OrderableList;
