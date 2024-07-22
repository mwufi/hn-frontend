import NewItem from "@/components/NewItem";
import Comment from "@/components/Comment";

async function getAskItem(id) {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);

    const item = await response.json();
    if (response.ok) {
        const kids = item.kids;
        if (kids && kids.length > 0) {
            const kidsDetails = await Promise.all(kids.slice(0, 10).map(async (kidId) => {
                const kidResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${kidId}.json`);
                return await kidResponse.json();
            }));
            item.kidsDetails = kidsDetails;
        }
    }

    return item;
}



export default async function Page({ searchParams }) {
    const { id } = searchParams;
    const item = await getAskItem(id)
    console.log(item)
    return (
        <main>
            <NewItem item={item} index={1} />

            {item.text &&
                <div className="p-2 px-4 text-lg" dangerouslySetInnerHTML={{ __html: item.text }}></div>
            }

            {item.kidsDetails && item.kidsDetails.map((kidDetail, index) => (
                <Comment key={index} comment={kidDetail} index={index + 1} />
            ))}
        </main>
    )
}
