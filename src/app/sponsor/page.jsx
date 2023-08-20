import React from "react";
import Header from "@/components/ui/header";

const page = () => {
  return (
    <>
      <section>
        <Header headerText="Become A Sponsor" />

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

            <main className="pt-7">
              <aside className="xs:block md:flex justify-between gap-48 pb-10">
                <div className="space-y-3 pb-7">
                  <p className="whitespace-nowrap">Gold Sponsor</p>
                  <p className="font-bold text-3xl">$15K+</p>
                </div>

                <div className="space-y-3 ">
                  <p>PERKS:</p>
                  <ul className="list-disc border-b pb-5 xs:pl-3 sm:pl-0">
                    <li>
                      A dedicated email blast to the Kinfolq community about
                      your company/initiatives
                    </li>
                    <li>Hackathon prize named after your organization</li>
                    <li>
                      Speaking opportunity on one of our conference panels
                    </li>
                    <li>
                      In-person recognition during every day of programming
                    </li>
                    <li>
                      Shared speaking slot with industry leaders at the
                      conference
                    </li>
                    <li>Represent your company at our career fair</li>
                    <li>
                      Logo placement & recognition on the conference website &
                      materials
                    </li>
                    <li>
                      Access to attendee resume book & hackathon semifinalists
                    </li>
                    <li>Two free tickets for you or anyone you nominate</li>
                  </ul>
                </div>
              </aside>

              <aside className="xs:block md:flex justify-between gap-48 lg:pr-20 pb-10">
                <div className="space-y-3 pb-7">
                  <p className="whitespace-nowrap">Silver Sponsor</p>
                  <p className="font-bold text-3xl">$7500</p>
                </div>

                <div className="space-y-3 xs:pl-3 sm:pl-0">
                  <p>PERKS:</p>
                  <ul className="list-disc border-b pb-5">
                    <li>Seeking opportunity on one of our conference panels</li>
                    <li>
                      In-person recognition during every day of programming
                    </li>
                    <li>
                      Shared speaking slot with industry leaders at the
                      conference
                    </li>
                    <li>Represent your company at our career fair</li>
                    <li>
                      Logo placement & recognition on the conference website &
                      materials
                    </li>
                    <li>
                      Access to attendee resume book & hackathon semifinalists
                    </li>
                    <li>Two free tickets for you or anyone you nominate</li>
                  </ul>
                </div>
              </aside>

              <aside className="xs:block md:flex justify-between gap-48 lg:pr-20 pb-10">
                <div className="space-y-3 pb-7">
                  <p className="whitespace-nowrap">Bronze Sponsor</p>
                  <p className="font-bold text-3xl">$5000</p>
                </div>

                <div className="space-y-3 xs:pl-3 sm:pl-0">
                  <p>PERKS:</p>
                  <ul className="list-disc border-b pb-5">
                    <li>
                      Logo placement & recognition on the conference website &
                      materials
                    </li>
                    <li>
                      Access to attendee resume book & hackathon semifinalists
                    </li>
                    <li>Two free tickets for you or anyone you nominate</li>
                  </ul>
                </div>
              </aside>
            </main>
          </div>
        </aside>
      </section>
    </>
  );
};

export default page;
