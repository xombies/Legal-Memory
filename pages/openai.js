import Head from 'next/head';
import dynamic from 'next/dynamic';

const OpenAIPage = dynamic(() => import('../components/OpenAIPage'), {
  ssr: false
});

export default function OpenAI() {
  return (
    <>
      <Head>
        <title>Legal Memory · OpenAI Interface</title>
        <meta
          name="description"
          content="Legal Memory AI — OpenAI moral engine interface"
        />
      </Head>
      <OpenAIPage />
    </>
  );
}
