import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kunder | Smartlocks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="blue">
        <div className="standard-block">
          <h1>Kunder</h1>
        </div>
      </section>
      <section className="white">
        <div className="standard-block">
          <h2>Vad gör vi</h2>
          <p>
            Smartlocks erbjuder digitala lås- och säkerhetssystem med kundens
            speciella behov i fokus. För oss är det vikitgt att lösningen blir
            optimal för kunden och gör att kunden sparar tid, pengar och miljö.
          </p>
        </div>
      </section>
    </div>
  );
}
