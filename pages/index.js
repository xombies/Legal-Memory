import Head from 'next/head';
import dynamic from 'next/dynamic';

const LegalMemoryHome = dynamic(() => import('../components/LegalMemoryHome'), {
  ssr: false
});

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Legal Memory AI</title>
        <meta
          name="description"
          content="Custodian of Records · Guardian of Truth · Court Ready Proof"
        />
      </Head>
      <LegalMemoryHome />
    </>
  );
}
