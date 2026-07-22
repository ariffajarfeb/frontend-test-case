import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../../styles/Products.module.css";

const formatRupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

export default function TabelProduk() {
  const [daftarProduk, setDaftarProduk] = useState([]);
  const [sedangMemuat, setSedangMemuat] = useState(true);
  const [pesanError, setPesanError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function ambilProduk() {
      try {
        const response = await fetch("/api/products", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Gagal mengambil produk (${response.status})`);
        }

        const hasil = await response.json();
        setDaftarProduk(hasil.data ?? []);
      } catch (error) {
        if (error.name !== "AbortError") {
          setPesanError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setSedangMemuat(false);
        }
      }
    }

    ambilProduk();

    return () => controller.abort();
  }, []);

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div>
          <h1>Daftar produk</h1>
          <p>
            {sedangMemuat
              ? "Memuat produk..."
              : `${daftarProduk.length} produk tersedia`}
          </p>
        </div>
        <Link
          className={styles.apiLink}
          href="/api/products"
          rel="noreferrer"
          target="_blank"
        >
          Buka JSON API
        </Link>
      </header>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Produk</th>
              <th>Kategori</th>
              <th>Harga</th>
              <th>Stok</th>
            </tr>
          </thead>
          <tbody>
            {pesanError && (
              <tr>
                <td colSpan="4">{pesanError}</td>
              </tr>
            )}
            {daftarProduk.map((produk) => (
              <tr key={produk.id}>
                <td>{produk.name}</td>
                <td>{produk.category}</td>
                <td>{formatRupiah.format(produk.price)}</td>
                <td>{produk.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
