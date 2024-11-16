import { Blog } from "../hooks"

export const FullBlog = ({ blog }: { blog: Blog }) => {
    const date: string = blog.publishedAt;
    const formattedDate: string = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })
    return <div className="p-2">
        <div className="text-6xl font-extrabold pb-2">
            {blog.title}
        </div>

        <div className="py-2 text-slate-700">
            {formattedDate}
        </div>

        <div className="text-lg font-extralight font-serif pt-2">
            {blog.content}
        </div>
    </div>
}