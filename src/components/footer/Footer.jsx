import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <>
      <footer className="bg-white text-black">
        <div className="xs:w-[97%] md:w-[90%] mx-auto flex justify-between items-center xs:pt-[60px] md:pt-[80px] pb-5 border-b border-black xs:gap-2  md:gap-8">
          <h2 className="xs:text-[15px] xs:font-extrabold sm:font-bold sm:text-[2.6rem] mb-3">
            Contact Our Team
          </h2>
          <aside className="flex justify-between xs:gap-2 md:gap-7 font-semibold text-[13px]">
            <div>
              <p>Timi Dayo-Kayode👋🏾</p>
              <p>Email: T@Kinfolq.com</p>
            </div>

            <div>
              <p>Insta: @Oversabiboyy</p>
              <p>Twitter: @heistimi</p>
            </div>
          </aside>
        </div>
        <aside className="xs:w-[97%] md:w-[90%] mx-auto mt-6 flex justify-between font-semibold pb-10 xs:text-[10px] sm:text-[14px]">
          <div>
            <p>Kinfolq@{date} - All rights reserved.</p>
          </div>
          <div>Designed By: Adewale Ayoola</div>
          <div className="flex justify-between space-x-1">
            <p>Terms</p>
            <p>Privacy</p>
            <p>Cookies</p>
          </div>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
