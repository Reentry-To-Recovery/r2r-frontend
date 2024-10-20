import { useEffect, useState } from "react";
import OrderableList from "../../../components/Containers/OrderableList";
import { useAdminApi } from "../../../hooks/useAdminApi";
import { CourseSection } from "../../../types/courseSection";
import { Sortable } from "../../../components/Containers/SortableItem";

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

    const sortableSectionContent: Sortable[] = courseSection?.content.map(c => {
        if (c.lesson) {
            return { id: c.lesson.id, title: c.lesson.title };
        } else if (c.quiz) {
            return { id: c.quiz.id, title: c.quiz.title };
        } else {
            return { id: "", title: "" };
        }
    }) ?? [];

    return (
        <OrderableList data={sortableSectionContent} />
    )
}

export default CourseSectionBuilder;