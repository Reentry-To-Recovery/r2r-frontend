import Collapsible from "../../../components/Containers/Collapsible";
import OrderableList from "../../../components/Containers/OrderableList";
import { useAdminApi } from "../../../hooks/useAdminApi";
import { CourseSection } from "../../../types/courseSection";
import { useState, useEffect } from "react";

interface CourseBuilderProps {
    courseId: string
}

const CourseBuilder = (props: CourseBuilderProps) => {
    const { courseId } = props;
    const [courseSections, setCourseSections] = useState<CourseSection[]>([]);
    const { fetchCourseSections, orderCourseSections } = useAdminApi();

    useEffect(() => {
        const fetchSections = async () => {
            try {
                const response = await fetchCourseSections(courseId);

                setCourseSections(response.data.sections);
            } catch (e) {
                console.log(e);
            }
        }

        fetchSections();
    }, [courseId, fetchCourseSections]);

    const handleExpandItem = async (item: CourseSection) => {

    }

    const handleReorder = async (data: CourseSection[]) => {
        try {
            const orderedIds = data.map(cs => cs.id);
            await orderCourseSections(courseId, orderedIds);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Collapsible title="Course Builder">
            <OrderableList data={courseSections} onExpandItem={handleExpandItem} onReorder={handleReorder} />
        </Collapsible>
    );
}

export default CourseBuilder;