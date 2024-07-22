'use client'

import { ArrowUpIcon } from "lucide-react";
import Link from "next/link";
import { formatDistanceToNow } from "@/components/formatTime";


function getRootDomainFromUrl(url) {
    try {
        const d = new URL(url);
        return d.hostname;
    } catch {
        console.log("parse url failed", url)
        return url || "example.com"
    }
}


function NewItem({ item, index }) {
    const itemUrl = item.url ? item.url : (
        item.id ? `/item?id=${item.id}` : undefined
    )

    return (
        (
            <div key={item.id} className="flex items-start">
                <span>{index}.</span>
                <button onClick={() => console.log('Vote up clicked!')}>
                    <ArrowUpIcon className="h-5 w-5 text-gray-500" />
                </button>
                <div>
                    <div className="space-x-1">
                        {itemUrl ? (
                            <>
                                <Link href={itemUrl} className="text-gray-800">{item.title}</Link>
                                <Link href={itemUrl} className="text-gray-300 text-sm hover:underline">({getRootDomainFromUrl(itemUrl)})</Link>
                            </>

                        ) : (
                            <p className="text-gray-800">{item.title}</p>
                        )}
                    </div>
                    <div className="text-sm text-gray-400">
                        <span>{item.score} points</span> by <Link href={`/user/${item.by}`}>{item.by}</Link>
                        <span>{formatDistanceToNow(new Date(item.time * 1000))}</span> {' '}
                        | <Link href={`/hide/${item.id}`}>hide</Link> {' '}
                        | <Link href={`/item?id=${item.id}`}>{item.descendants} comments</Link>
                    </div>
                </div>
            </div>
        )
    )
}

export default NewItem