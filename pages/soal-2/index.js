export default function PintasanDaftarPengguna() {
  return null;
}

export function getServerSideProps() {
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
}
