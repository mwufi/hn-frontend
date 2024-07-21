import NewItem from "@/components/NewItem";

async function getAskItem(id) {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    const data = await response.json();
    return data;
}

export default async function Page({ searchParams }) {
    const { id } = searchParams;
    const item = await getAskItem(id)
    console.log(item)
    return (
        <main>
            <NewItem item={item} index={1} />

            <div className="p-2 px-4 text-lg" dangerouslySetInnerHTML={{ __html: item.text }}></div>
        </main>
    )
}