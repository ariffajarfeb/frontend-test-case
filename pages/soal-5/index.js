export default function SoalLimaRedirect() {
  return null;
}

export function getServerSideProps() {
  return {
    redirect: {
      destination: "/gallery",
      permanent: false,
    },
  };
}
