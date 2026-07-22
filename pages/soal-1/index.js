export default function SoalSatuRedirect() {
  return null;
}

export function getServerSideProps() {
  return {
    redirect: {
      destination: "/articles",
      permanent: false,
    },
  };
}
