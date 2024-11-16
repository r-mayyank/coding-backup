import { Link, useNavigate } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const TopBar = ({type="none"}: {type: "publish" | "none"}) => {
    const navigate = useNavigate();

    const handlePost = () => {
        navigate('/publish');
    };
    return <div className="border-b flex justify-between px-10 py-4">
        <div className="flex flex-col justify-center font-semibold text-xl">
            <Link to={'/blogs'}>

                Medium
            </Link>

        </div>
        <div className="flex">
            <div className="pr-4"> 
                {type === "none" ? (<button onClick={handlePost} type="button" className="shadow-md hover:text-gray-300 hover:bg-gray-600 border border-gray-300 focus:outline-none bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">Post</button>) : null}
                
            </div>
            <Avatar name="User" s={"big"} />
        </div>
    </div>
}