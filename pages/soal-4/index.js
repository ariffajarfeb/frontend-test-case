export default function SoalEmpatRedirect() {
  return null;
}

export function getServerSideProps() {
  return {
    redirect: {
      destination: "/register",
      permanent: false,
    },
  };
}
