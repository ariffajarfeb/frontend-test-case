import Head from "next/head";
import NavigasiSoal from "../../components/layout/NavigasiSoal";
import DetailPengguna from "../../features/users/DetailPengguna";
import { ambilDetailPengguna } from "../../lib/api/jsonPlaceholder";

export default function HalamanDetailPengguna({ pengguna }) {
  return (
    <>
      <Head>
        <title>{`${pengguna.name} | Detail Pengguna`}</title>
        <meta
          name="description"
          content={`Informasi detail ${pengguna.name}`}
        />
      </Head>

      <NavigasiSoal />
      <DetailPengguna pengguna={pengguna} />
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const pengguna = await ambilDetailPengguna(params.id);
    return { props: { pengguna } };
  } catch {
    return { notFound: true };
  }
}
