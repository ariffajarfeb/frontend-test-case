import { useState } from "react";
import styles from "../../styles/Register.module.css";

const dataAwalForm = {
  name: "",
  email: "",
  password: "",
};

export default function FormPendaftaran() {
  const [dataForm, setDataForm] = useState(dataAwalForm);
  const [dataTerkirim, setDataTerkirim] = useState(null);

  function ubahInput(event) {
    const { name, value } = event.target;
    setDataForm((dataSekarang) => ({ ...dataSekarang, [name]: value }));
  }

  function kirimForm(event) {
    event.preventDefault();
    setDataTerkirim(dataForm);
  }

  return (
    <main className={styles.main}>
      <div className={styles.layout}>
        <section className={styles.intro}>
          <h1>Formulir pendaftaran</h1>
          <p>Isi data Anda.</p>
        </section>

        <section className={styles.panel}>
          <form
            autoComplete="off"
            className={styles.form}
            onSubmit={kirimForm}
          >
            <label htmlFor="name">Nama</label>
            <input
              id="name"
              name="name"
              autoComplete="new-password"
              onChange={ubahInput}
              placeholder="Masukkan nama lengkap"
              required
              type="text"
              value={dataForm.name}
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              autoComplete="new-password"
              onChange={ubahInput}
              placeholder="email@gmail.com"
              required
              type="email"
              value={dataForm.email}
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              minLength="8"
              name="password"
              autoComplete="new-password"
              onChange={ubahInput}
              placeholder="Minimal 8 karakter"
              required
              type="password"
              value={dataForm.password}
            />

            <button type="submit">Daftar sekarang</button>
          </form>

          {dataTerkirim && (
            <div className={styles.result} aria-live="polite">
              <span>Data berhasil dikirim</span>
              <h2>{dataTerkirim.name}</h2>
              <p>{dataTerkirim.email}</p>
              <p>Password: {dataTerkirim.password}</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
