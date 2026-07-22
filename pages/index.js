import Head from "next/head";
import NavigasiSoal from "../components/layout/NavigasiSoal";
import DaftarPengguna from "../features/users/DaftarPengguna";
import { ambilPengguna } from "../lib/api/jsonPlaceholder";

export default function Users({ users, error }) {
  return (
    <>
      <Head>
        <title>Daftar Pengguna | Test Case Frontend</title>
        <meta
          name="description"
          content="Daftar pengguna dari JSONPlaceholder menggunakan Next.js"
        />
      </Head>

      <NavigasiSoal />
      <DaftarPengguna error={error} users={users} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const users = await ambilPengguna();
    return { props: { users, error: null } };
  } catch {
    return {
      props: {
        users: [],
        error: "Data pengguna belum dapat dimuat. Silakan coba lagi nanti.",
      },
    };
  }
}
