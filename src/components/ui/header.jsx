import React from "react";
import Image from "next/image";
import img1 from "../../../public/img1.png";
import styles from "./header.module.css";

const Header = ({ headerText }) => {
  return (
    <>
      <section>
        <div
          className={`${styles.imgContainer} xs:h-[300px] md:h-[500px] lg:h-[600px]`}
        >
          <Image src={img1} alt="" fill={true} className={styles.img} />
          <h2
            className={`${styles.imgText} xs:text-[35px] md:text-[60px] lg:text-[80px] font-semibold xs:left-4 xs:bottom-6 md:left-12 md:bottom-14 lg:left-24 lg:bottom-24`}
          >
            {headerText}
          </h2>
        </div>
      </section>
    </>
  );
};

export default Header;
