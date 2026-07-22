import Image from "next/image";
import daftarGambar from "../../lib/data/daftarGambar";
import styles from "../../styles/Gallery.module.css";

export default function GaleriGambar() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>Gallery</h1>
      </header>

      <section className={styles.grid} aria-label="Galeri gambar">
        {daftarGambar.map((gambar, urutan) => (
          <figure className={styles.card} key={gambar.id}>
            <Image
              alt={gambar.alt}
              className={styles.image}
              height={720}
              priority={urutan < 2}
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
              src={gambar.src}
              width={960}
            />
          </figure>
        ))}
      </section>
    </main>
  );
}
