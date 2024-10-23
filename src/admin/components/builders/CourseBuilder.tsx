import Collapsible from "../../../components/Containers/Collapsible";
import OrderableList from "../../../components/Containers/OrderableList";
import { useAdminApi } from "../../../hooks/useAdminApi";
import { CourseSection } from "../../../types/courseSection";
import { useState, useEffect } from "react";
import CourseSectionBuilder from "./CourseSectionBuilder";
import AddButton from "../../../components/Buttons/AddButton";
import AddCourseSectionModal from "../modals/AddCourseSectionModal";
import EditCourseSectionModal from "../modals/EditCourseSectionModal";
import ConfirmationModal from "../modals/ConfirmationModal";
import toast from "react-hot-toast";

interface CourseBuilderProps {
    courseId: string
}

const CourseBuilder = (props: CourseBuilderProps) => {
    const { courseId } = props;
    const { fetchCourseSections, orderCourseSections, deleteCourseSection } = useAdminApi();
    const [courseSections, setCourseSections] = useState<CourseSection[]>([]);
    const [showAddTopicModal, setShowAddTopicModal] = useState<boolean>(false);
    const [showEditTopicModal, setShowEditTopicModal] = useState<boolean>(false);
    const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState<boolean>(false);
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

    const handleDelete = (item: CourseSection) => {
        setSelectedSection(item);
        setShowDeleteConfirmationModal(true);
    }

    const onDeleteConfirmation = async () => {
        try {
            await deleteCourseSection(selectedSection?.courseId ?? "", selectedSection?.id ?? "");

            setShowDeleteConfirmationModal(false);
            toast.success("Successfully delete topic");

            await handleRefresh();
        } catch (e: any) {
            console.log(e);
            const errorMessage = e.response?.data?.errorMessage;
            toast.error(errorMessage ?? "Error deleting topic");
        }
    }

    return (
        <>
            <Collapsible title="Course Builder">
                <OrderableList
                    data={courseSections}
                    onReorder={handleReorder}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
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
            {
                showDeleteConfirmationModal && selectedSection &&
                <ConfirmationModal
                    showModal={showDeleteConfirmationModal}
                    onConfirm={onDeleteConfirmation}
                    onCancel={() => { setShowDeleteConfirmationModal(false); }}
                >
                    <span>
                        <span>Are you sure you would like to delete</span>{' '}
                        <span style={{ fontWeight: "bold" }}>{selectedSection.title}</span>{"?"}
                    </span>
                </ConfirmationModal>
            }
        </>
    );
}

export default CourseBuilder;
