import { useState } from "react";
import { TopBar } from "../components/TopBar"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface PostInput {
    title: string;
    content: string;
}

export const Publish = () => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<PostInput>({
        title: "",
        content: ""
    })
    function goBack() {
        navigate("/blogs")
    }
    async function handlePublish() {
        if (!postInputs.title || !postInputs.content) {
            console.log("Please fill all the fields");
            return ;
        }
        try {
            await axios.post(`${BACKEND_URL}/api/v1/blog`, postInputs, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            navigate("/blogs")
        } catch (error) {
            //ALERT THE USER IF THE REQ FAILED
            console.log(error);
        }
    }

    return <div>
        <TopBar type="publish" />
        <div className="flex px-6 pt-10 lg:pl-60">
            <div className="flex flex-col justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor" // Keep this to allow Tailwind to control the color
                    className="bi bi-plus-circle text-gray-500" // Add the text-slate-500 class here
                    viewBox="0 0 16 16"
                >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
            </div>
            <div className="px-2 border-r border-slate-700"></div>
            <div className="w-full lg:pr-80">
                <div className="p-2 w-full ">
                    <input onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            title: e.target.value
                        })
                    }} type="text" placeholder="Title" className="text-6xl font-serif w-full outline-none caret-slate-600" />
                </div>
            </div>
        </div>

        <div className="px-8 pt-4 lg:pr-80 lg:pl-80">
            <textarea onChange={(e) => {
                setPostInputs({
                    ...postInputs,
                    content: e.target.value
                })
            }} id="content" rows={4} cols={100} placeholder="Tell your story..." className="text-2xl font-serif block w-full outline-none caret-slate-600"></textarea>
        </div>

        <div className="px-8 pt-5 flex justify-between lg:pl-80">
            <button onClick={handlePublish} type="button" className="shadow-md hover:text-white hover:bg-green-600 border border-gray-300 focus:outline-none bg-green-400 text-white focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">Publish</button>

            <button onClick={goBack} type="button" className="shadow-md hover:text-white hover:bg-green-600 border border-gray-300 focus:outline-none bg-gray-400 text-white focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">Go back</button>
        </div>

    </div>
}