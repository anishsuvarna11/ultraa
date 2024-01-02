import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Video2 from "../components/video2";
import Video3 from "../components/video3";
import Video4 from "../components/video4";
import Video5 from "../components/video5";

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

export default function Home() {
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
        title="DeltaAI - 3D Rendering Videos">
        Semi-Autonomous Tissue Grossing Measurements and Recommendations using Neural Radiance Fields to Facilitate Rapid and Complete Intraoperative Histological Assessment of Tumor Margins
      </SectionTitle>
      <Video />
      <Video2 />
      <Video3 />
      <Video4 />
      <Video5 />

    </>
  );
}
