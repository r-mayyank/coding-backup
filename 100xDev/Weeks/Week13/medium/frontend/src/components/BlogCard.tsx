import { Link } from "react-router-dom";

interface BlogCardProps {
    id: number;
    authorName: string;
    title: string;
    content: string;
    publishedAt: string;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedAt
}: BlogCardProps) => {
    const date: string = publishedAt;
    const formattedDate: string = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })
    const contentLength = content.length;
    if (contentLength > 100) {
        content = content.substring(0, 100) + "...";
    }
    return <Link to={`/blog/${id}`}>
        <div className="border-b border-slate-200 py-4 w-screen max-w-screen-md cursor-pointer pr-10">

            <div className="flex pl-6">
                <div className="flex flex-col justify-center">
                    <Avatar name={authorName} />
                </div>
                <div className="font-extralight px-2">
                    {authorName}
                </div>
                ·
                <div className="text-slate-500 px-2 ">
                    {formattedDate}
                </div>
            </div>

            <div className="text-2xl font-bold pt-2 pl-6">
                {title}
            </div>

            <div className="text-lg text-slate-700 pl-6">
                {content}
                {contentLength > 100 ? " Read more" : null}
            </div>

            <div className="text-slate-600 text-sm pt-6 pl-6">
                {`${Math.ceil(contentLength / 500)} min read`}
            </div>

        </div>
    </Link>
}

export function Avatar({ name, s = "small" }: { name: string, s?: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-600 ${s === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
        <span className={`font-thin text-gray-300 ${s === "small" ? "text-md" : "text-lg"}`}>
            {name[0]}
        </span>
    </div>
}