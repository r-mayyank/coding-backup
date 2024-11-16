import { BlogCard } from "../components/BlogCard"
import { Skeleton } from "../components/Skeleton";
import { TopBar } from "../components/TopBar"
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const { loading, blogs } = useBlogs();
    if (loading) {
        return <div>
            <TopBar type="none" />
            <div>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>

        </div>
    }
    return <div>
        <div>
            <TopBar type="none" />
        </div>
        <div className="flex justify-center">
            <div>
                {blogs.map(blog => <BlogCard
                    id={blog.id}
                    authorName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedAt={blog.publishedAt}
                />)}
            </div>
        </div>
    </div>
}