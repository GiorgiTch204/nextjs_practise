import Link from "next/link";

export default async function NewsArticle({ params, searchParams }: {
    params: Promise <{ articleid: string }>;
    searchParams?: Promise<{ lang?: "en" | "es" | "ka" }>;
}) {
    const { articleid } = await params;
    const searchParamsData = await searchParams;
    const {lang = "en"} = searchParamsData || {};
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