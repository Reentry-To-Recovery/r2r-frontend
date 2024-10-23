import Collapsible from "../../../components/Containers/Collapsible";
import OrderableList from "../../../components/Containers/OrderableList";
import { useAdminApi } from "../../../hooks/useAdminApi";
import { CourseSection } from "../../../types/courseSection";
import { useState, useEffect } from "react";
import CourseSectionBuilder from "./CourseSectionBuilder";
import AddButton from "../../../components/Buttons/AddButton";
import AddCourseSectionModal from "../modals/AddCourseSectionModal";
import EditCourseSectionModal from "../modals/EditCourseSectionModal";

interface CourseBuilderProps {
    courseId: string
}

const CourseBuilder = (props: CourseBuilderProps) => {
    const { courseId } = props;
    const { fetchCourseSections, orderCourseSections } = useAdminApi();
    const [courseSections, setCourseSections] = useState<CourseSection[]>([]);
    const [showAddTopicModal, setShowAddTopicModal] = useState<boolean>(false);
    const [showEditTopicModal, setShowEditTopicModal] = useState<boolean>(false);
    const [selectedSection, setSelectedSection] = useState<CourseSection | null>(null);

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

    const handleRefresh = async () => {
        try {
            const response = await fetchCourseSections(courseId);

            setCourseSections(response.data.sections);
        } catch (e) {
            console.log(e);
        }
    }

    const handleEdit = (item: CourseSection) => {
        setSelectedSection(item);
        setShowEditTopicModal(true);
    }

    return (
        <>
            <Collapsible title="Course Builder">
                <OrderableList
                    data={courseSections}
                    onReorder={handleReorder}
                    onEdit={handleEdit}
                    renderExpandedItem={(item) => <CourseSectionBuilder courseId={item.courseId} sectionId={item.id} />}
                />
                <AddButton label="Add new topic" fillStyle="solid" onClick={() => { setShowAddTopicModal(true); }} />
            </Collapsible>
            {
                showAddTopicModal &&
                <AddCourseSectionModal
                    courseId={courseId}
                    showModal={showAddTopicModal}
                    setShowModal={setShowAddTopicModal}
                    refreshCourseSections={handleRefresh}
                />
            }
            {
                showEditTopicModal && selectedSection &&
                <EditCourseSectionModal
                    courseId={courseId}
                    sectionId={selectedSection.id}
                    initialTitle={selectedSection.title}
                    showModal={showEditTopicModal}
                    setShowModal={setShowEditTopicModal}
                    refreshCourseSections={handleRefresh}
                />
            }
        </>
    );
}

export default CourseBuilder;
