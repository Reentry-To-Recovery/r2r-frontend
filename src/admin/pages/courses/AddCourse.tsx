import AdminBreadcrumb from "../../components/AdminBreadcrumb";
import { useState } from "react";
import Checkbox from "../../../components/Input/Checkbox";
import { useAdminApi } from "../../../hooks/useAdminApi";
import { useNavigate } from "react-router-dom";
import { AddEditCoursePayload } from "../../../types/courses";
import TextInput from "../../../components/Input/TextInput";
import MultilineInput from "../../../components/Input/MultilineInput";
import { isValidUrl } from "../../../util/urlHelpers";
import toast from "react-hot-toast";
import FormButtons from "../../components/FormButtons";

const AddCourse = () => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [iconUrl, setIconUrl] = useState<string>("");
    const [hasCertificate, setHasCertificate] = useState<boolean>(false);
    const [active, setActive] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isTitleTouched, setIsTitleTouched] = useState<boolean>(false);
    const [isIconUrlTouched, setIsIconUrlTouched] = useState<boolean>(false);

    const { addCourse } = useAdminApi();
    const navigate = useNavigate();

    const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
        setIsTitleTouched(true);
    }

    const handleDescriptionChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        e.preventDefault();
        setDescription(e.target.value);
    }

    const handleIconUrlChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault();
        setIconUrl(e.target.value);
        setIsIconUrlTouched(true);
    }

    const handleToggleHasCertificate: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setHasCertificate(e.currentTarget.checked);
    }

    const handleToggleActive: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setActive(e.currentTarget.checked);
    }

    const submitCourse: React.MouseEventHandler<HTMLInputElement> = async (e) => {
        e.preventDefault();
        setIsLoading(true)

        try {
            const payload: AddEditCoursePayload = {
                title: title,
                description: description,
                iconUrl: iconUrl,
                hasCertificate: hasCertificate,
                active: active
            };

            await addCourse(payload);

            setIsLoading(false);
            toast.success("Successfully created course");
            navigate("/courses");
        } catch (e: any) {
            console.log(e);
            const errorMessage = e.response?.data?.errorMessage;
            toast.error(errorMessage ?? "Error creating course");
        }
    }

    const isFormValid = title.trim().length > 0 && isValidUrl(iconUrl);

    return (
        <div className="webpage flex justify">
            <AdminBreadcrumb links={[{ title: "Courses", to: "/courses" }]} current="Add New" />
            <form onChange={() => { setIsLoading(false) }}>
                <TextInput
                    id="title"
                    value={title}
                    onChange={handleTitleChange}
                    label="Title"
                    helperText={title.length > 0 ? "" : "Title must not be empty"}
                    error={isTitleTouched && title.trim().length === 0}
                />
                <MultilineInput
                    id="description"
                    text={description}
                    onChange={handleDescriptionChange}
                    label="Description"
                    rows={3}
                />
                <TextInput
                    id="iconUrl"
                    value={iconUrl}
                    onChange={handleIconUrlChange}
                    label="Icon URL"
                    helperText={iconUrl.trim().length > 0 ? (isValidUrl(iconUrl) ? "" : "Please enter a valid URL") : "Icon URL must not be empty"}
                    error={isIconUrlTouched && (iconUrl.trim().length === 0 || !isValidUrl(iconUrl))}
                />
                <Checkbox
                    id="hasCertificate"
                    label="Has Certificate?"
                    checked={hasCertificate}
                    onChange={handleToggleHasCertificate}
                />
                <Checkbox
                    id="active"
                    label="Active?"
                    checked={active}
                    onChange={handleToggleActive}
                />
                <FormButtons
                    onSubmitClick={submitCourse}
                    onCancelClick={() => { navigate("/courses") }}
                    submitDisabled={!isFormValid || isLoading}
                />
            </form>
        </div>
    )
}

export default AddCourse;