import Link from "next/link";
import { use } from "react";

export default  function NewsArticle({ params, searchParams }: {
    params: Promise <{ articleid: string }>;
    searchParams?: Promise<{ lang?: "en" | "es" | "ka" }>;
}) {
    const { articleid } = use(params);
    const { lang = "en" } = use(searchParams ?? Promise.resolve({} as { lang?: "en" | "es" | "ka" }));
    return (
        <div>
            <h1>News Article {articleid}</h1>
            <p>Reading in language: {lang}</p>

            <div>
                <Link href={`/articles/${articleid}?lang=en`}>English</Link>
                <Link href={`/articles/${articleid}?lang=es`}>Spanish</Link>
                <Link href={`/articles/${articleid}?lang=ka`}>Georgian</Link>
            </div>
        </div>
    );
}