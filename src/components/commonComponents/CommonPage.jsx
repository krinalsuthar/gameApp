import { useLocation, useNavigate } from "react-router-dom";

//this page used for handling navigation for testing
const CommonPage = ({ data: propsData = [] }) => {
    const location = useLocation();
    const { data, info } = location.state || {};
    console.log(info)
    return (
        <>
            <h1>
                {data}
                This page will be in Process
            </h1>
        </>
    )
}

export default CommonPage