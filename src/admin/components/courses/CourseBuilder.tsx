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
    const { fetchCourseSections } = useAdminApi();

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

    const handleExpandItem = (item: CourseSection) => {

    }

    return (
        <Collapsible title="Course Builder">
            <OrderableList data={courseSections} onExpandItem={handleExpandItem} />
        </Collapsible>
    );
}

export default CourseBuilder;