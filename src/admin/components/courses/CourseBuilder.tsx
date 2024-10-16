import Collapsible from "../../../components/Containers/Collapsible";
import OrderableList from "../../../components/Containers/OrderableList";
import { CourseSection } from "../../../types/courseSection";

const CourseBuilder = () => {
    const courseSections: CourseSection[] = [
        {
            id: "1234",
            courseId: "1234",
            title: "1234",
            sortIndex: 0
        }
    ];

    return (
        <Collapsible title="Course Builder">
            <OrderableList />
        </Collapsible>
    );
}

export default CourseBuilder;