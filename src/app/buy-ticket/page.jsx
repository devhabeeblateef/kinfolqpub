import React from "react";
import Header from "@/components/ui/header";
import Hero from "@/components/ui/hero";

const page = () => {
  return (
    <>
      <section>
        <Header headerText="Get A Ticket" />

        <aside className="bg-[#6D381C] pt-10 ">
          <div className="w-[90%] mx-auto space-y-3">
            <h2 className="md:text-[2.05rem] font-semibold">
              Our Sponsorship Tiers For This Conference Are:
            </h2>
            <p className="">
              They are building the next generation of technology companies and
              wield enormous levels of influence and buying power due to their
              high-impact, high-paying roles in tech and finance.
            </p>
          </div>
        </aside>

        <Hero
          head="Buy A Ticket To Attend"
          paragraph="A ticket for this conference is $250 per attendee"
          bgColor={false}
        />
      </section>
    </>
  );
};

export default page;
