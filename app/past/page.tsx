import JsonLocalStorage from "./Local";
import { hello, readBarJson } from "./server.server";

export default async function Home() {
  const data = await readBarJson();

  return (
    <main>
      <section id="articles" className="space-y-2 bg-[#f6f6ef] p-4 px-4">
        {JSON.stringify(data)}
        <JsonLocalStorage updateServerStorage={hello}/>
      </section>
    </main>
  );
}
