import { useNavigate } from "react-router-dom";

const AddNewButton = () => {
    const navigate = useNavigate();

    return (<button className="addNew" onClick={() => { navigate("add") }}>+ Add New</button>)
}

export default AddNewButton;