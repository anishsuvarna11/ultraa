import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import dataaa from "../components/Screenshot_2023-06-18_at_2.36.36_PM-removebg-preview.png";
import Image from "next/image";
import dataa from "../components/Screenshot_2023-06-18_at_2.36.44_PM-removebg-preview.png";
import dat from "../components/Screenshot_2023-06-18_at_2.36.56_PM-removebg-preview.png";
import da from "../components/Screenshot_2023-06-18_at_2.37.03_PM-removebg-preview.png";
import d from "../components/Screenshot_2023-06-18_at_2.37.12_PM-removebg-preview.png";
import df from "../components/Screenshot_2023-06-18_at_2.37.19_PM-removebg-preview.png";
import dff from "../components/hgh.png";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Video2 from "../components/video2";
import Video3 from "../components/video3";
import Video4 from "../components/video4";

import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function index2() {
  return (
    <>
      <Head>
        <title>DeltaAI</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <SectionTitle
        pretitle="Demo"
        title="DeltaAI - Additional Images">
        Semi-Autonomous Tissue Grossing Measurements and Recommendations using Neural Radiance Fields to Facilitate Rapid and Complete Intraoperative Histological Assessment of Tumor Margins
      </SectionTitle>
      <div class = "flex items-center justify-center pb-8">
            <Image
              src={dataaa}
              alt="Benefits"
              layout="intrinsic"
              placeholder="blur"
            />
            <Image
              src={dataa}

              alt="Benefits"
              layout="intrinsic"
              placeholder="blur"
            />
          </div>

          <div class = "flex items-center justify-center pb-24">
            <Image
              src={dat}
              alt="Benefits"
              layout="intrinsic"
              placeholder="blur"
            />
            <Image
              src={da}

              alt="Benefits"
              layout="intrinsic"
              placeholder="blur"
            />
                        <Image
              src={d}
              alt="Benefits"
              layout="intrinsic"
              placeholder="blur"
            />
            <Image
              src={df}

              alt="Benefits"
              layout="intrinsic"
              placeholder="blur"
            />
          </div>

    </>
  );
}
