import { useEffect } from "react";
import OrderableList from "../../../components/Containers/OrderableList";
import { useAdminApi } from "../../../hooks/useAdminApi";
import { CourseSection } from "../../../types/courseSection";

interface CourseSectionBuilderProps {
    courseId: string
    sectionId: string
}

const CourseSectionBuilder = (props: CourseSectionBuilderProps) => {
    const { courseId, sectionId } = props;
    const { fetchCourseSection } = useAdminApi();
    const [courseSection, setCourseSection] = useState<CourseSection>();

    useEffect(() => {
        const fetchSection = async () => {
            try {
                const response = await fetchCourseSection(courseId, sectionId);

                setCourseSection(response.data);
            } catch (e) {
                console.log(e);
            }
        }

        fetchSection();
    }, [courseId, fetchCourseSection, sectionId]);

    return (
        <OrderableList />
    )
}

export default CourseSectionBuilder;