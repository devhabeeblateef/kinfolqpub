import Image from "next/image";

import Hero from "@/components/ui/hero";
import img1 from "../../public/img1.png";
import img2 from "../../public/img2.png";
import img3 from "../../public/img3.png";
import bainCapital from "../../public/bain-capital-logo.png";
import brex from "../../public/brex.png";
import contrary from "../../public/contrary.png";
import jpm from "../../public/jpm.png";
import mhackWeek from "../../public/mhackweek.png";
import primitives from "../../public/primitives.png";

import marcella from "../../public/marcella.png";
import ojxu from "../../public/ojxu.png";
import malcolm from "../../public/malcolm.png";
import taylor from "../../public/taylor.png";
import aminat from "../../public/aminat.png";
import eni from "../../public/eni.png";
import rahmana from "../../public/rahmana.png";
import jonathan from "../../public/jonathan.png";

import styles from "./Page.module.css";

export default function Home() {
  return (
    <>
      {/* <header className="xs:w-[320px] sm:w-[600px] md:w-[738px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] mx-auto mt-16">
        <p className="italic text-xs mb-2 text-[28px]">
          An invite-only conference for 300 Ambitious Black technologist in NYC
          this fall
        </p>
        <h2 className="xs:text-[21px] sm:text-[40px] font-bold mb-2">
          THE BLACK TECH CONFERENCE
        </h2>
        <p className="xs:text-[18px] sm:text-[28px]">
          Our 2nd Annual NYC Conference. SEPT 29 - OCT 1, 2023
        </p>
      </header> */}

      <header className="my-16 text-center">
        <p className="italic sm:text-[22px] mb-2">
          An invite-only conference for 300 Ambitious Black technologist in NYC
          this fall
        </p>
        <h2 className="xs:text-[21px] sm:text-[40px] font-bold mb-2">
          THE BLACK TECH CONFERENCE
        </h2>
        <p className="xs:text-[18px] sm:text-[28px]">
          Our 2nd Annual NYC Conference. SEPT 29 - OCT 1, 2023
        </p>
      </header>

      <section className="object-contain">
        <Image
          src={img1}
          alt="Black Technologist Meet Up"
          // fill={true}
          className={styles.img}
        />
      </section>

      <Hero
        head={"Apply To Attend Our Conference"}
        paragraph="A $250 ticket purchase is required if accepted to confirm your attendance"
      />
      <Hero head={"Our Agenda"} bgColor={false} />
      <Hero
        head="Become A Sponsor"
        paragraph="Our sponsorship tiers for this conference are"
      />

      <section className="mt-3 w-[90%] mx-auto xs:py-[20px] sm:py-[30px] xs:gap-8 sm:gap-28 flex justify-between items-center">
        <h2 className="xs:text-2xl md:text-4xl font-bold">Our Gatherings</h2>
        <p className="xs:text-[12px] md:text-lg">
          We partner with leading tech companies & brands to host brunches,
          co-living houses at conferences and concerts, pitch competitions, day
          parties, kickbacks, and more to bring driven Black people in tech
          together in meaningful ways that catalyse relationship-building among
          one another.
        </p>
      </section>

      <section className="relative w-[90%] mx-auto xs:h-[300px] md:h-[500px] lg:h-[600px]">
        <Image src={img2} alt="" fill={true} className=" object-cover" />

        <div
          className="p-6 border-4 rounded-full absolute top-[50%] left-[50%] cursor-pointer"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
        </div>
      </section>

      <section className="bg-white text-black py-10">
        <h2 className="text-center font-semibold mb-7">PREVIOUS SPONSORS</h2>
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between spacex">
            <Image
              className="xs:w-[45px] md:w-[80px] lg:w-[140px] object-contain"
              src={bainCapital}
              alt="Bain Capital Logo"
            />
            <Image
              className="xs:w-[45px] md:w-[70px] lg:w-[140px] object-contain"
              src={brex}
              alt="Brex Logo"
            />
            <Image
              className="xs:w-[45px] md:w-[70px] lg:w-[140px] object-contain"
              src={contrary}
              alt="Contrary Logo"
            />
            <Image
              className="xs:w-[45px] md:w-[70px] lg:w-[140px] object-contain"
              src={jpm}
              alt="JP Morgan Logo"
            />
            <Image
              className="xs:w-[45px] md:w-[70px] lg:w-[140px] object-contain"
              src={mhackWeek}
              alt="Miami Hack Week logo"
            />
            <Image
              className="xs:w-[45px] md:w-[70px] lg:w-[140px] object-contain"
              src={primitives}
              alt="Primitives Logo"
            />
          </div>
        </div>
      </section>

      <section className="bg-black text-white mt-10">
        <h2 className="text-center text-4xl font-semibold mb-4">Our Members</h2>
        <p className="text-center text-lg">
          They are building the next generation of technology & finance
          companies
        </p>

        <aside className="mt-10 w-[90%] mx-auto grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-10">
          <div className="flex flex-col items-center space-y-2">
            <Image
              className="w-[85%]"
              src={marcella}
              alt="Marcella Imoisimi - SWE @ Ebay"
            ></Image>

            <div className="text-center xs:text-sm sm:text-lg">
              <p>Marcella Imoisimi</p>
              <p>SWE @ Ebay</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <Image
              className="w-[85%]  "
              src={ojxu}
              alt="Ojxu Junaid - UX @ Google"
            ></Image>
            <div className="text-center xs:text-sm sm:text-lg">
              <p>Ojxu Junaid</p>
              <p>UX @ Google</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <Image
              className="w-[85%]  "
              src={malcolm}
              alt="Malcolm Akinie - SWE II @ Slack"
            ></Image>

            <div className="text-center xs:text-sm sm:text-lg">
              <p>Malcolm Akinie</p>
              <p>SWE II @ Slack</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <Image
              className="w-[85%]"
              src={taylor}
              alt="Taylor Facen - Product @ AngelList"
            ></Image>
            <div className="text-center xs:text-sm sm:text-lg">
              <p>Taylor Facen</p>
              <p>Product @ AngelList</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <Image
              className="w-[85%]  "
              src={aminat}
              alt="Aminat Iriafen - Research @ Quantilope"
            ></Image>
            <div className="text-center xs:text-sm sm:text-lg">
              <p>Aminat Iriafen</p>
              <p>Research @ Quantilope</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <Image
              className="w-[85%]  "
              src={eni}
              alt="Eni Asebiomo - Design @ Percapita"
            ></Image>
            <div className="text-center xs:text-sm sm:text-lg">
              <p>Eni Asebiomo</p>
              <p>Design @ Percapita</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <Image
              className="w-[85%]  "
              src={rahmana}
              alt="Rahmana Muhammad - SWE @ Mastercard"
            ></Image>
            <div className="text-center xs:text-sm sm:text-lg">
              <p>Rahmana Muhammad</p>
              <p>SWE @ Mastercard</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <Image
              className="w-[85%]  "
              src={jonathan}
              alt="Jonathan Anderson - SWE @ Vise"
            ></Image>
            <div className="text-center xs:text-sm sm:text-lg">
              <p>Jonathan Anderson</p>
              <p>SWE @ Vise</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="mt-10 w-[90%] mx-auto">
        <p className="text-center text-xl mb-10">
          They Are Founders, Operators, Investors, & Alumni At Institutions Like
        </p>

        <div className="relative w-full xs:h-[300px] md:h-[500px] lg:h-[600px] mb-10">
          <Image
            src={img3}
            alt=""
            fill={true}
            className="object-cover rounded-2xl"
          />
        </div>
      </section>
    </>
  );
}
