import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';

export default function FileTypes() {
  return (
    <>
      <Head>
        <title>Many file types</title>
        <meta
          name="description"
          content="An optimized picture of the pillars of creation"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main className={styles.main}>
        <figure>
          <figcaption>Webm</figcaption>
          <video
            src="/sample-10s.webm"
            autoPlay={false}
          />
        </figure>

        <figure>
          <figcaption>mp4</figcaption>
          <video
            src="/sample-20s.mp4"
            autoPlay={false}
          />
        </figure>

        <figure>
          <figcaption>wav</figcaption>
          <audio
            src="/sample-3s.wav"
            autoPlay={false}
          />
        </figure>

        <figure>
          <figcaption>mp3</figcaption>
          <audio
            src="/sample-15s.wav"
            autoPlay={false}
          />
        </figure>

        <figure>
          <figcaption>gif</figcaption>
          <Image
            src="/sample-success-kid.wav"
            alt="Success kid gif"
            height={300}
          />
        </figure>
        <figure>
          <figcaption>png</figcaption>
          <Image
            src="/sample-bumblebee-400x300.png"
            alt="Bumblebee"
            height={300}
          />
        </figure>
        <figure>
          <figcaption>jpg</figcaption>
          <Image
            src="/sample-clouds-400x300.jpg"
            alt="Clouds"
            height={300}
          />
        </figure>

        <figure>
          <figcaption>PDF</figcaption>
          <a href="/sample-wellarchitected-framework.pdf">Well Architected</a>
        </figure>
      </main>
    </>
  );
}
