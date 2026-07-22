import Link from "next/link";
import styles from "../../styles/UserDetail.module.css";

export default function DetailPengguna({ pengguna }) {
  if (!pengguna) {
    return null;
  }

  return (
    <main className={styles.main}>
      <Link className={styles.backLink} href="/">
        ← Kembali ke daftar pengguna
      </Link>

      <section className={styles.profile}>
        <div>
          <p className={styles.label}>
            ID {String(pengguna.id).padStart(2, "0")}
          </p>
          <h1>{pengguna.name}</h1>
          <p className={styles.username}>@{pengguna.username}</p>
        </div>
      </section>

      <section className={styles.detailGroup} aria-labelledby="kontak-title">
        <h2 id="kontak-title">Kontak</h2>
        <dl className={styles.details}>
          <div className={styles.detailRow}>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${pengguna.email}`}>
                {pengguna.email.toLowerCase()}
              </a>
            </dd>
          </div>
          <div className={styles.detailRow}>
            <dt>Telepon</dt>
            <dd>
              <a href={`tel:${pengguna.phone}`}>{pengguna.phone}</a>
            </dd>
          </div>
          <div className={styles.detailRow}>
            <dt>Website</dt>
            <dd>
              <a href={`https://${pengguna.website}`}>{pengguna.website}</a>
            </dd>
          </div>
        </dl>
      </section>

      <section className={styles.detailGroup} aria-labelledby="alamat-title">
        <h2 id="alamat-title">Alamat</h2>
        <dl className={styles.details}>
          <div className={styles.detailRow}>
            <dt>Jalan</dt>
            <dd>
              <strong>
                {pengguna.address.street}, {pengguna.address.suite}
              </strong>
            </dd>
          </div>
          <div className={styles.detailRow}>
            <dt>Kota</dt>
            <dd>
              {pengguna.address.city} · {pengguna.address.zipcode}
            </dd>
          </div>
        </dl>
      </section>

      <section className={styles.detailGroup} aria-labelledby="perusahaan-title">
        <h2 id="perusahaan-title">Perusahaan</h2>
        <dl className={styles.details}>
          <div className={styles.detailRow}>
            <dt>Nama</dt>
            <dd>
              <strong>{pengguna.company.name}</strong>
            </dd>
          </div>
          <div className={styles.detailRow}>
            <dt>Bidang</dt>
            <dd>
              <span>{pengguna.company.catchPhrase}</span>
            </dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
