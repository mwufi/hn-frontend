
import NewItem from "../components/NewItem";

async function getHNArticles() {
  // Fetch data from external API
  const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
  const data = await response.json();
  let articleDetails = await Promise.all(data.slice(0, 40).map(async (id) => {
    const articleResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    return await articleResponse.json();
  }));
  articleDetails.sort((a, b) => (b.score - a.score));
  return articleDetails
}


export default async function Home() {
  const articles = await getHNArticles()
  console.log("top articles", articles.forEach(a => console.log(a.score, a.title)))
  return (
    <main>
      <section id="articles" className="space-y-2 p-1">
        {articles?.map((item, index) => (
          <NewItem key={item.id} item={item} index={index + 1} />
        ))}
      </section>
    </main>
  );
}
