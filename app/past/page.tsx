
import NewItem from "@/components/NewItem";

async function getHNArticles() {
  // Fetch data from external API
  const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
  const data = await response.json();
  const articleDetails = await Promise.all(data.slice(0, 10).map(async (id) => {
    const articleResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    return await articleResponse.json();
  }));

  return articleDetails
}


export default async function Home() {
  const articles = await getHNArticles()

  return (
    <main>
      <section id="articles" className="space-y-2 bg-[#f6f6ef] p-4 px-4">
        {articles?.map((item, index) => (
          <NewItem item={item} index={index + 1} />
        ))}
      </section>
    </main>
  );
}
