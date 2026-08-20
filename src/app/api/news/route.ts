import { NextRequest, NextResponse } from "next/server";

const CATEGORY_QUERIES: Record<string, { q: string; section: string }> = {
  all: { q: "marketing OR \"market intelligence\" OR \"AI marketing\" OR martech OR \"brand strategy\" OR \"consumer insights\"", section: "business|technology|media|culture|science|commentisfree" },
  marketing: { q: "marketing strategy OR brand marketing OR content marketing OR advertising", section: "business|media" },
  intelligence: { q: "\"market intelligence\" OR \"market research\" OR \"consumer insights\" OR \"data analytics\"", section: "business|technology" },
  ai: { q: "artificial intelligence marketing OR \"AI marketing\" OR \"generative AI\" OR \"machine learning\" brand", section: "technology|business" },
  martech: { q: "marketing technology OR marketing automation OR martech OR \"digital marketing\"", section: "technology|business|media" },
};

export async function GET(req: NextRequest) {
  const category = req.nextUrl.searchParams.get("category") ?? "all";
  const { q, section } = CATEGORY_QUERIES[category] ?? CATEGORY_QUERIES.all;

  const apiKey = process.env.GUARDIAN_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "GUARDIAN_API_KEY not set" }, { status: 500 });
  }

  const url = new URL("https://content.guardianapis.com/search");
  url.searchParams.set("q", q);
  url.searchParams.set("api-key", apiKey);
  url.searchParams.set("show-fields", "thumbnail,trailText,byline");
  url.searchParams.set("order-by", "newest");
  url.searchParams.set("page-size", "12");
  url.searchParams.set("section", section);

  const res = await fetch(url.toString(), {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to fetch news" }, { status: res.status });
  }

  const data = await res.json();

  const articles = (data.response?.results ?? []).map((item: {
    webTitle: string;
    webUrl: string;
    webPublicationDate: string;
    fields?: { thumbnail?: string; trailText?: string; byline?: string };
    sectionName?: string;
  }) => ({
    title: item.webTitle,
    description: item.fields?.trailText ?? null,
    url: item.webUrl,
    urlToImage: item.fields?.thumbnail ?? null,
    publishedAt: item.webPublicationDate,
    source: { name: item.sectionName ?? "The Guardian" },
    author: item.fields?.byline ?? null,
  }));

  return NextResponse.json({ articles });
}
