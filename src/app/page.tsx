import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold tracking-tight">Welcome home!</h1>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/blog"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
        >
          Blog
        </Link>
        <Link
          href="/products"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
        >
          Products
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
          Read the article in
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/articles/breacking-news-123?lang=en"
            className="text-indigo-600 underline-offset-4 hover:underline"
          >
            English
          </Link>
          <Link
            href="/articles/breacking-news-123?lang=es"
            className="text-indigo-600 underline-offset-4 hover:underline"
          >
            Spanish
          </Link>
          <Link
            href="/articles/breacking-news-123?lang=ka"
            className="text-indigo-600 underline-offset-4 hover:underline"
          >
            Georgian
          </Link>
        </div>
      </div>
    </section>
  );
}
