import Head from 'next/head';
import dynamic from 'next/dynamic';

const ToolkitPage = dynamic(() => import('../components/ToolkitPage'), {
  ssr: false
});

export default function Toolkit() {
  return (
    <>
      <Head>
        <title>Legal Memory · Civilian Toolkit</title>
        <meta
          name="description"
          content="Utilities, documentation, and links for the Legal Memory protocol"
        />
      </Head>
      <ToolkitPage />
    </>
  );
}
