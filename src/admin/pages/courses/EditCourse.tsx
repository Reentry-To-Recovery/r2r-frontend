import { useNavigate, useParams } from "react-router-dom";
import AdminBreadcrumb from "../../components/AdminBreadcrumb";
import TextInput from "../../../components/Input/TextInput";
import MultilineInput from "../../../components/Input/MultilineInput";
import Checkbox from "../../../components/Input/Checkbox";
import { useState, useEffect } from "react";
import { Course } from "../../../types/courses";
import { useAdminApi } from "../../../hooks/useAdminApi";
import { AddEditCoursePayload } from "../../../types/courses";
import toast from "react-hot-toast";
import { isValidUrl } from "../../../util/urlHelpers";
import FormButtons from "../../components/FormButtons";

const EditCourse = () => {
    const { id } = useParams();
    const { fetchCourse, editCourse } = useAdminApi();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [course, setCourse] = useState<Course>();
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [iconUrl, setIconUrl] = useState<string>("");
    const [hasCertificate, setHasCertificate] = useState<boolean>(false);
    const [active, setActive] = useState<boolean>(false);

    const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    }

    const handleDescriptionChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        e.preventDefault();
        setDescription(e.target.value);
    }

    const handleIconUrlChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault();
        setIconUrl(e.target.value);
    }

    const handleToggleHasCertificate: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setHasCertificate(e.currentTarget.checked);
    }

    const handleToggleActive: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setActive(e.currentTarget.checked);
    }

    const submitCourse: React.MouseEventHandler<HTMLInputElement> = async (e) => {
        e.preventDefault();
        setIsSubmitting(true)

        try {
            const payload: AddEditCoursePayload = {
                title: title,
                description: description,
                iconUrl: iconUrl,
                hasCertificate: hasCertificate,
                active: active
            };

            const response = await editCourse(id ?? "", payload);

            setIsSubmitting(false);
            setCourse(response.data);
            toast.success("Successfully updated course");
        } catch (e: any) {
            console.log(e);
            const errorMessage = e.response?.data?.errorMessage;
            toast.error(errorMessage ?? "Error updating course");
        }
    };

    useEffect(() => {
        const adminFetchCourse = async () => {
            try {
                const response = await fetchCourse(id ?? "");

                const course = response.data;
                setCourse(course);
                setTitle(course.title);
                setDescription(course.description);
                setIconUrl(course.iconUrl);
                setHasCertificate(course.hasCertificate);
                setActive(course.active);

                setIsLoading(false);
            } catch (e) {
                console.log(e);
                toast.error("Error loading course");
            }
        };

        if (id) {
            adminFetchCourse();
        }
    }, [id, fetchCourse]);

    const isFormValid = title.trim().length > 0 && isValidUrl(iconUrl) && (title !== course?.title || description !== course?.description || iconUrl !== course?.iconUrl || hasCertificate !== course?.hasCertificate || active !== course?.active);

    return (<div className="webpage flex justify">
        <AdminBreadcrumb links={[{ title: "Courses", to: "/admin/courses" }]} current="Edit Course" />
        <form onChange={() => { setIsSubmitting(false) }}>
            <TextInput
                id="title"
                value={title}
                onChange={handleTitleChange}
                label="Title"
                helperText={title.length > 0 ? "" : "Title must not be empty"}
                error={!isLoading && title.trim().length === 0}
                disabled={isLoading}
            />
            <MultilineInput
                id="description"
                text={description}
                onChange={handleDescriptionChange}
                label="Description"
                rows={3}
                disabled={isLoading}
            />
            <TextInput
                id="iconUrl"
                value={iconUrl}
                onChange={handleIconUrlChange}
                label="Icon URL"
                helperText={iconUrl.trim().length > 0 ? (isValidUrl(iconUrl) ? "" : "Please enter a valid URL") : "Icon URL must not be empty"}
                error={!isLoading && (iconUrl.trim().length === 0 || !isValidUrl(iconUrl))}
                disabled={isLoading}
            />
            <Checkbox
                id="hasCertificate"
                label="Has Certificate?"
                checked={hasCertificate}
                onChange={handleToggleHasCertificate}
                disabled={isLoading}
            />
            <Checkbox
                id="active"
                label="Active?"
                checked={active}
                onChange={handleToggleActive}
                disabled={isLoading}
            />
            <FormButtons
                onSubmitClick={submitCourse}
                onCancelClick={() => { navigate("/admin/courses") }}
                submitDisabled={!isFormValid || isSubmitting || isLoading}
            />
        </form>
    </div>);
}

export default EditCourse;
