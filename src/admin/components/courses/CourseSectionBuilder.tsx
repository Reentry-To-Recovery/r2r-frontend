import { useEffect, useState } from "react";
import OrderableList from "../../../components/Containers/OrderableList";
import { useAdminApi } from "../../../hooks/useAdminApi";
import { CourseSection } from "../../../types/courseSection";
import { Sortable } from "../../../components/Containers/SortableItem";
import AddButton from "../../../components/Buttons/AddButton";

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

    const sortableSectionContent: Sortable[] = [];
    let lessonCounter = 1;
    let quizCounter = 1;

    courseSection?.content.forEach(c => {
        if (c.lesson) {
            sortableSectionContent.push({ id: c.lesson.id, title: `Lesson ${lessonCounter}: ${c.lesson.title}` });
            lessonCounter++;
        } else if (c.quiz) {
            sortableSectionContent.push({ id: c.quiz.id, title: `Quiz ${quizCounter}: ${c.quiz.title}` });
            quizCounter++;
        }
    });


    return (
        <div>
            <OrderableList data={sortableSectionContent} />
            <div className="flex" style={{ columnGap: "12px", marginTop: sortableSectionContent.length > 0 ? "16px" : "8px" }}>
                <AddButton label={"Lesson"} onClick={() => { }} />
                <AddButton label={"Quiz"} onClick={() => { }} />
            </div>
        </div>
    );
}

export default CourseSectionBuilder;
