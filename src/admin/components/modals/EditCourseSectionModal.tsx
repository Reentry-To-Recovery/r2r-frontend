import AddEditModal from "./AddEditModal"
import TextInput from "../../../components/Input/TextInput"
import { useState } from "react"
import { useAdminApi } from "../../../hooks/useAdminApi"
import { AddEditCourseSectionPayload } from "../../../types/courseSection"
import toast from "react-hot-toast"

interface EditCourseSectionModalProps {
    courseId: string
    sectionId: string
    initialTitle: string
    showModal: boolean
    setShowModal: (showModal: boolean) => void
    refreshCourseSections: () => Promise<any>
}

const EditCourseSectionModal = (props: EditCourseSectionModalProps) => {
    const { courseId, sectionId, initialTitle, showModal, setShowModal, refreshCourseSections } = props;
    const { editCourseSection } = useAdminApi();
    const [title, setTitle] = useState<string>(initialTitle);

    const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    }

    const isTitleError = title.trim().length === 0;

    const handleSubmit = async () => {
        try {
            const payload: AddEditCourseSectionPayload = {
                title: title
            };

            await editCourseSection(courseId, sectionId, payload);

            setShowModal(false);
            toast.success("Successfully updated topic");
            await refreshCourseSections();
        } catch (e: any) {
            console.log(e);
            const errorMessage = e.response?.data?.errorMessage;
            toast.error(errorMessage ?? "Error updating topic");
        }
    }

    return (
        <AddEditModal
            title={"Update Topic"}
            showModal={showModal}
            setShowModal={setShowModal}
            submitButtonLabel={"Update Topic"}
            onSubmit={handleSubmit}
            submitDisabled={title === initialTitle || isTitleError}
        >
            <div>
                <TextInput
                    id="title"
                    value={title}
                    onChange={handleTitleChange}
                    label="Topic Name"
                    error={isTitleError}
                    helperText={isTitleError ? "Topic name must not be empty." : ""}
                />
            </div>
        </AddEditModal>
    );
}

export default EditCourseSectionModal;
