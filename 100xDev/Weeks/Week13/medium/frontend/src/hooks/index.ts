import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Blog {
    "id": number;
    "title": string;
    "content": string;
    "author": {
        "name": string;
    }
    "publishedAt": string;
}

export const useBlog = (id: number) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>(); 

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog`, {
            headers: {
                Authorization: localStorage.getItem("token")
            },
            params: {
                id
            }
        })
        .then((response) => {
            setBlog(response.data.blog);
            setLoading(false);
        })

    }, [id])

    return {
        loading,
        blog
    }
};

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/all`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((response) => {
            setBlogs(response.data.blogs);
            setLoading(false);
        })

    }, [])

    return {
        loading,
        blogs
    }
}