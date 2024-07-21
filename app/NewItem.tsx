'use client'

import { ArrowUpIcon } from "lucide-react";
import Link from "next/link";


function getRootDomainFromUrl(url) {
    const d = new URL(url);
    return d.hostname;
}

function formatDistanceToNow(datetime) {
    const current = new Date();
    const previous = new Date(datetime);
    const seconds = Math.floor((current.getTime() - previous.getTime()) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (seconds < 60) {
        return 'just now';
    } else if (minutes < 60) {
        return `${minutes} minutes ago`;
    } else if (hours < 24) {
        return `${hours} hours ago`;
    } else if (days < 30) {
        return `${days} days ago`;
    } else if (months < 12) {
        return `${months} months ago`;
    } else {
        return `${years} years ago`;
    }
}

function NewItem({ item, index }) {
    return (
        (
            <div key={item.id} className="flex items-start">
                <span>{index}.</span>
                <button onClick={() => console.log('Vote up clicked!')}>
                    <ArrowUpIcon className="h-5 w-5 text-gray-500" />
                </button>
                <div>
                    <div className="space-x-1">
                        <Link href={item.url} className="text-gray-800">{item.title}</Link>
                        <Link href={item.url} className="text-gray-300 text-sm hover:underline">({getRootDomainFromUrl(item.url)})</Link>
                    </div>
                    <div className="text-sm text-gray-400">
                        <span>{item.score} points</span> by <Link href={`/user/${item.by}`}>{item.by}</Link>
                        <span>{formatDistanceToNow(new Date(item.time * 1000))}</span> {' '}
                        | <Link href={`/hide/${item.id}`}>hide</Link> {' '}
                        | <Link href={`/comments/${item.id}`}>{item.descendants} comments</Link>
                    </div>
                </div>
            </div>
        )
    )
}

export default NewItem