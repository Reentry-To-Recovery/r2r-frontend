import { useNavigate } from "react-router-dom";

interface AddNewButtonProps {
    link: string
}

const AddNewButton = (props: AddNewButtonProps) => {
    const { link } = props;
    const navigate = useNavigate();

    return (<button className="addNew" onClick={() => { navigate(link) }}>+ Add New</button>)
}

export default AddNewButton;
