import Head from "next/head";
import NavigasiSoal from "../components/layout/NavigasiSoal";
import FormPendaftaran from "../features/register/FormPendaftaran";

export default function Register() {
  return (
    <>
      <Head>
        <title>Register | Test Case Frontend</title>
        <meta name="description" content="Formulir pendaftaran dengan useState" />
      </Head>

      <NavigasiSoal />
      <FormPendaftaran />
    </>
  );
}
