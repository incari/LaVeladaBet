import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ReactPlayer from "react-player";
import { useWindowSize } from "../hooks/useWindowSize";
import styles from "../styles/Home.module.css";
import { BannerCombat } from "../components/BannerCombat";

import CAROLASPURSITO from "../public/fightcards/carola-spursito.webp";
import JAGGERBUSTAMANTE from "../public/fightcards/jagger-bustamante.webp";
import LUZULOLITO from "../public/fightcards/luzu-lolito.webp";
import MOMOVIRUZZ from "../public/fightcards/momo-viruzz.webp";
import ARIPARACETAMOR from "../public/fightcards/ari-paracetamor.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const Home: NextPage = () => {
  const size = useWindowSize();

  return (
    <div className={styles.container}>
      <Head>
        <title>La Velada del año 2</title>
        <meta name="description" content="La velada del año 2 de Ibai " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ReactPlayer
          url="https://www.twitch.tv/ibai"
          muted={true}
          width={size.width}
          height={size.height}
        />

        <div style={{ width: "100%" }} className=".swiper-container">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <BannerCombat fight={CAROLASPURSITO} />
            </SwiperSlide>
            <SwiperSlide>
              <BannerCombat fight={MOMOVIRUZZ} />
            </SwiperSlide>
            <SwiperSlide>
              <BannerCombat fight={ARIPARACETAMOR} />
            </SwiperSlide>
            <SwiperSlide>
              <BannerCombat fight={LUZULOLITO} />
            </SwiperSlide>
            <SwiperSlide>
              <BannerCombat fight={JAGGERBUSTAMANTE} />
            </SwiperSlide>
          </Swiper>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
