import styles from "../../styles/Articles.module.css";

export default function DaftarArtikel({ articles, error }) {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>Artikel</h1>
        <p>Daftar artikel dari JSONPlaceholder.</p>
      </header>

      {error ? (
        <p className={styles.error}>{error}</p>
      ) : (
        <section className={styles.grid} aria-label="Daftar artikel">
          {articles.map((article) => (
            <article className={styles.card} key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.body}</p>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
