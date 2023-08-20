import React from "react";
import Header from "@/components/ui/header";

const page = () => {
  return (
    <>
      <section>
        <Header headerText="Agenda" />

        <aside className="bg-[#6D381C] pt-10 ">
          <div className="w-[90%] mx-auto md:space-y-3 flex justify-between xs:gap-28 md:gap-44">
            <h2 className="xs:text-3xl md:text-[2.05rem] font-semibold">
              Our Agenda
            </h2>
            <p className="">
              They are building the next generation of technology companies and
              wield enormous levels of influence and buying power due to their
              high-impact, high-paying roles in tech and finance.
            </p>
          </div>

          <div className="w-[90%] mx-auto bg-black border-4 border-black py-[0.10rem] rounded-sm mt-10">
            <div className="flex justify-between items-center px-1 gap-3 xs:pr-5 lg:pr-10">
              <div className="bg-[#6D381C] px-2 py-1 rounded-sm">
                Day 1, Friday, September 15th
              </div>
              <div>Day 2, Friday, September 15th</div>
              <div>Day 3, Friday, September 15th</div>
            </div>
          </div>

          <div className="w-[90%] mx-auto py-9">
            <div className="border rounded-lg">
              <table className="w-[90%] mx-auto ">
                <thead>
                  <tr className="flex justify-between border-b-white border-b">
                    <th className="text-xl font-semibold">TIME</th>
                    <th className="py-2 text-xl font-semibold">EVENT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="flex justify-between border-b-white border-b">
                    <td className="py-2 text-xl font-semibold">6pm-6:30pm</td>
                    <td className="py-2 text-lg font-semibold">Check Ins</td>
                  </tr>
                  <tr className="flex justify-between border-b-white border-b">
                    <td className="py-2 text-xl font-semibold">6pm-6:30pm</td>
                    <td className="py-2 text-lg font-semibold">
                      Welcome Keynote
                    </td>
                  </tr>
                  <tr className="flex justify-between border-b-white border-b">
                    <td className="py-2 text-xl font-semibold">6pm-6:30pm</td>
                    <td className="py-2 text-lg font-semibold">
                      Career Fair Mixer
                    </td>
                  </tr>
                  <tr className="flex justify-between">
                    <td className="py-2 text-xl font-semibold">6pm-6:30pm</td>
                    <td className="py-2 text-lg font-semibold">
                      VIP Dinner W Speakers
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button className="bg-black text-white px-3 py-2 rounded-lg mt-7">
              Purchase a Ticket
            </button>
          </div>
        </aside>
      </section>
    </>
  );
};

export default page;
