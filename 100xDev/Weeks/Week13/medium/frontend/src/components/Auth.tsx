import { SignupInput } from "@r_mayyank/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: "",
    })

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs)
            const jwt = response.data.jwt;
            localStorage.setItem("token", jwt)
            navigate("/blogs")
        } catch (error) {
            //ALERT THE USER IF THE REQ FAILED
            console.log(error);
        }
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div>
                    <div className="flex justify-center text-4xl font-extrabold">
                        {type === "signup" ? "Create an account" : "Login"}
                    </div>
                    <div className="flex justify-center pt-2 text-lg font-medium text-slate-400	">
                        {type === "signup" ?
                            (
                                <>
                                    Already have an account? <Link className="underline pl-2 font-medium" to="/signin">Login</Link>
                                </>
                            ) : (
                                <>
                                    Don't have an account? <Link className="underline pl-2 font-medium" to="/signup">Sign up</Link>
                                </>
                            )}
                    </div>
                </div>

                <div className="pt-6">
                    {type === "signup" ? (<LabelledInput label={"Username"} placeholder={"Enter your username"} onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value
                        })
                    }} />) : null}
                    <LabelledInput label={"Email"} placeholder={"abc@gmail.com"} onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            email: e.target.value
                        }))
                    }} />
                    <LabelledInput label={"Password"} type="password" onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            password: e.target.value
                        }))
                    }} />
                </div>

                <div className="pt-4">
                    <button onClick={sendRequest} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-96 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{
                        type === "signup" ? "Sign up" : "Log in"
                    }</button>
                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputProps {
    label: string;
    placeholder?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputProps) {
    return <div>
        <div className="pt-4">
            <label className="block mb-2 text-md font-bold text-gray-900">{label}</label>
            <input type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-md font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5" placeholder={placeholder || " "} required onChange={onChange} />
        </div>
    </div>
}