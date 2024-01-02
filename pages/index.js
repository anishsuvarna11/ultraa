import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

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

export default function Home() {
  return (
    <>
      <Head>
        <title>UltraGrasp</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="UltraGrasp"
        title=" Mission">
        Our mission is to empower amputees by providing a revolutionary, noninvasive prosthetic device that uses deep learning and vision transformers to enable autonomous grasping. We aim to reduce prosthetic stigma, improve comfort, and increase affordability for all amputees. Our passion for improving lives drives us to make our product accessible to everyone.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Product Demos">
        Below are a couple short videos of our product demos
      </SectionTitle>
      <Video />
      <Video2 />
      <Video3 />
      <Video4 />
      <Cta />
      <Footer />
    </>
  );
}
