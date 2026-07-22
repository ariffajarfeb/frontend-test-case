import Head from "next/head";
import NavigasiSoal from "../../components/layout/NavigasiSoal";
import TabelProduk from "../../features/products/TabelProduk";

export default function HalamanProduk() {
  return (
    <>
      <Head>
        <title>Daftar Produk | Soal 3</title>
        <meta name="description" content="Daftar produk dari API Route lokal" />
      </Head>

      <NavigasiSoal />
      <TabelProduk />
    </>
  );
}
