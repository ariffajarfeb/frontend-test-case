import Head from "next/head";
import NavigasiSoal from "../components/layout/NavigasiSoal";
import GaleriGambar from "../features/gallery/GaleriGambar";

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery | Test Case Frontend</title>
        <meta
          name="description"
          content="Galeri gambar yang dioptimalkan menggunakan next/image"
        />
      </Head>

      <NavigasiSoal />
      <GaleriGambar />
    </>
  );
}
