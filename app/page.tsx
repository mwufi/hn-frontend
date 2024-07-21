
import Link from "next/link";
import NewItem from "./NewItem";

type HackerNewsArticle = {
  id: number;
  title: string;
  url: string;
  score: number;
  time: number;
  descendants: number;
  by: string;
  type: string;
};


// This gets called on every request
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

const hackerNewsMenu = [
  { text: "New", href: "/new" },
  { text: "Top", href: "/top" },
  { text: "Best", href: "/best" },
  { text: "Ask", href: "/ask" },
  { text: "Show", href: "/show" },
  { text: "Jobs", href: "/jobs" },
  { text: "Submit", href: "/submit" },
];

export default async function Home() {
  const articles = await getHNArticles()

  return (
    <main>
      <nav className="flex bg-orange-400 p-2 px-4">
        <Link className="font-bold mr-2" href={"/"}>Hacker News</Link>
        {hackerNewsMenu.map(item => (
          <Link href={item.href} className="mr-2">{item.text}</Link>
        ))}
        <div className="ml-auto">
          <Link href={"/login"}>Login</Link>
        </div>
      </nav>
      <section id="articles" className="space-y-2 bg-[#f6f6ef] p-4 px-4">
        {articles?.map((item, index) => (
          <NewItem item={item} index={index + 1} />
        ))}
      </section>
    </main>
  );
}
