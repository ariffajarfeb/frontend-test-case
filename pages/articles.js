import Head from "next/head";
import NavigasiSoal from "../components/layout/NavigasiSoal";
import DaftarArtikel from "../features/articles/DaftarArtikel";
import { ambilArtikel } from "../lib/api/jsonPlaceholder";

export default function Articles({ articles, error }) {
  return (
    <>
      <Head>
        <title>Soal 1 | Test Case Frontend</title>
        <meta
          name="description"
          content="Daftar artikel yang dibuat dengan static generation"
        />
      </Head>

      <NavigasiSoal />
      <DaftarArtikel articles={articles} error={error} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const articles = await ambilArtikel();
    return { props: { articles: articles.slice(0, 20), error: null } };
  } catch {
    return {
      props: {
        articles: [],
        error: "Artikel belum dapat dimuat. Silakan coba lagi nanti.",
      },
    };
  }
}
