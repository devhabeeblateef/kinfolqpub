import React from "react";

const Hero = ({ head, paragraph, bgColor = true }) => {
  return (
    <>
      <section className={`mt-7 ${bgColor === true ? "bg-[#6D381C]" : "#000"}`}>
        <div className="w-[90%] mx-auto flex justify-between items-center xs:py-[20px] sm:py-[30px] xs:gap-6 sm:gap-10">
          <div>
            <h2 className="xs:text-[24px] xs:font-semibold sm:text-4xl mb-3">
              {head}
            </h2>
            <p className="xs:text-[14px] sm:text-[20px]">{paragraph}</p>
          </div>

          <div className="inline-block  border border-white xs:p-9 sm:p-14 rounded-[50%] relative">
            <div
              className="absolute text-6xl top-[50%] left-[50%]"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="xs:w-8 xs:h-8 sm:w-10 sm:h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
