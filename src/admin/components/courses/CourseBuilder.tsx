import Collapsible from "../../../components/Containers/Collapsible";
import OrderableList from "../../../components/Containers/OrderableList";
import { useAdminApi } from "../../../hooks/useAdminApi";
import { CourseSection } from "../../../types/courseSection";
import { useState, useEffect } from "react";
import CourseSectionBuilder from "./CourseSectionBuilder";

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
            <OrderableList
                data={courseSections}
                onReorder={handleReorder}
                renderExpandedItem={(item) => <CourseSectionBuilder courseId={item.courseId} sectionId={item.id} />}
            />
        </Collapsible>
    );
}

export default CourseBuilder;
