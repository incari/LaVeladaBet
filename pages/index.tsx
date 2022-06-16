import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Carousel } from "react-responsive-carousel";
import { CarouselContainer } from "../components/CarouselContainer";
import { useWindowSize } from "../hooks/useWindowSize";
import styles from "../styles/Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { BetCard } from "../components/BetCard";

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

        <BetCard />
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
