import '../styles/globals.css';

export const metadata = {
  title: 'Legal Memory AI',
  description: 'Custodian of Records • Guardian of Truth • Court Ready Proof',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
