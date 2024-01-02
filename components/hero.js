import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/rrr.png";
import heroImg2 from "../public/img/ree.png";
import heroImg3 from "../public/img/ucla.png";
import heroImg4 from "../public/img/mco.png";

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              UltraGrasp
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Revolutionizing Mobility with Autonomous, Non-invasive Prosthetics

            </p>
            <p className="py-5 text-md leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            ultragrasp@gmail.com

            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
             <span className="text-indigo-600">Our Partners</span>{" "}
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">

            <div className="text-gray-400 dark:text-gray-400">
              <VerizonLogo />
            </div>

            <div className="pt-1 text-gray-400 dark:text-gray-400">
              <NetflixLogo />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <SonyLogo />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function NetflixLogo() {
  return (
    <Image
    src={heroImg3}
    width="300"
    height="54"
    alt="Hero Illustration"
    layout="intrinsic"
    loading="eager"
    placeholder="blur"
  />
  );
}

function SonyLogo() {
  return (
    <Image
    src={heroImg4}
    width="320"
    height="60"
    alt="Hero Illustration"
    layout="intrinsic"
    loading="eager"
    placeholder="blur"
  />
  );
}

function VerizonLogo() {
  return (
    <Image
    src={heroImg2}
    width="260"
    height="85"
    alt="Hero Illustration"
    layout="intrinsic"
    loading="eager"
    placeholder="blur"
  />
  );
}

