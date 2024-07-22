import { formatDistanceToNow } from "@/components/formatTime";


function Comment({ comment, index }) {
    return (
        <div className="flex items-start p-4">
            <button className="mt-2 mr-2">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path d="M12 8l-6 6h12l-6-6z"></path>
                </svg>
            </button>
            <div className="my-2 rounded">
                <div className="text-xs text-gray-500 mb-1">
                    Posted by <a href={`/user/${comment.by}`} className=" hover:underline">{comment.by}</a> {formatDistanceToNow(new Date(comment.time * 1000))}
                </div>
                {comment.text && <div className="text-gray-600" dangerouslySetInnerHTML={{ __html: comment.text }}></div>}
            </div>
        </div>
    );
}

export default Comment