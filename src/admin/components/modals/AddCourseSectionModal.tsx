import AddEditModal from "./AddEditModal"
import TextInput from "../../../components/Input/TextInput"
import { useState } from "react"
import { useAdminApi } from "../../../hooks/useAdminApi"
import { AddEditCourseSectionPayload } from "../../../types/courseSection"
import toast from "react-hot-toast"

interface AddCourseSectionModalProps {
    courseId: string
    showModal: boolean
    setShowModal: (showModal: boolean) => void
    refreshCourseSections: () => Promise<any>
}

const AddCourseSectionModal = (props: AddCourseSectionModalProps) => {
    const { courseId, showModal, setShowModal, refreshCourseSections } = props;
    const { addCourseSection } = useAdminApi();
    const [title, setTitle] = useState<string>("");
    const [isTitleTouched, setIsTitleTouched] = useState<boolean>(false);

    const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
        setIsTitleTouched(true);
    }

    const isTitleError = isTitleTouched && title.trim().length === 0;

    const handleSubmit = async () => {
        try {
            const payload: AddEditCourseSectionPayload = {
                title: title
            };

            await addCourseSection(courseId, payload);

            setShowModal(false);
            toast.success("Successfully created topic");
            await refreshCourseSections();
        } catch (e: any) {
            console.log(e);
            const errorMessage = e.response?.data?.errorMessage;
            toast.error(errorMessage ?? "Error creating topic");
        }
    }

    return (
        <AddEditModal
            title={"Add Topic"}
            showModal={showModal}
            setShowModal={setShowModal}
            submitButtonLabel={"Add Topic"}
            onSubmit={handleSubmit}
            submitDisabled={!isTitleTouched || isTitleError}
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

export default AddCourseSectionModal;
