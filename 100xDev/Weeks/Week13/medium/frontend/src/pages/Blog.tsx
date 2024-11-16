import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { TopBar } from "../components/TopBar";
import { FullBlog } from "../components/FullBlog";
import { Avatar } from "../components/BlogCard";

export const Blog = () => {
    const { id } = useParams<{ id: string }>();
    const { loading, blog } = useBlog(Number(id));
    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <TopBar type="none"/>
            <div className="p-4 lg:grid grid-cols-3 lg:p-20">
                <div className="col-span-2 pr-3">
                    {blog ? (
                        <FullBlog blog={blog} />
                    ) : (
                        <div>Error: Blog not found</div>
                    )}
                </div>

                <div className="p-2 lg:pl-3">
                    <div className="font-semibold">
                        Author
                    </div>
                    <div className="flex pt-3">
                        <Avatar name={blog?.author.name || "U"} s="big" />
                        <div className="flex items-center text-2xl font-semibold pl-3">
                            {blog?.author.name}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}