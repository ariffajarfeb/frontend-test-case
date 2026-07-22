import Link from "next/link";
import styles from "../../styles/Users.module.css";

export default function DaftarPengguna({ users, error }) {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div>
          <h1>Daftar pengguna</h1>
          <p>Daftar pengguna dari JSONPlaceholder</p>
        </div>
      </section>

      {error ? (
        <p className={styles.error}>{error}</p>
      ) : (
        <section className={styles.directory} aria-label="Daftar pengguna">
          <div className={styles.directoryHeader} aria-hidden="true">
            <span>Nama</span>
            <span>Email</span>
            <span>Perusahaan</span>
            <span>Aksi</span>
          </div>
          {users.map((user) => (
            <article className={styles.userRow} key={user.id}>
              <div className={styles.identity}>
                <span className={styles.number}>
                  {String(user.id).padStart(2, "0")}
                </span>
                <div>
                  <h2>{user.name}</h2>
                  <p>@{user.username}</p>
                </div>
              </div>
              <span className={styles.email}>{user.email.toLowerCase()}</span>
              <span className={styles.company}>{user.company.name}</span>
              <Link className={styles.detailLink} href={`/users/${user.id}`}>
                Details
              </Link>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
