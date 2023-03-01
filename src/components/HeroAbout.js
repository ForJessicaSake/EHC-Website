import React, { useEffect } from "react";
import AOS from "aos";


const HeroAbout = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  return (
    <section className="bg-primary bg-opacity-10">
      <div className="container xl:max-w-screen-xl mx-auto px-4">
        <div className="grid md:grid-cols-2 py-4 md:py-16 md:px-24">
          <div
            className=" hero-about-list text-dark font-normal md:text-lg text-3xl  leading-7"
            data-aos="fade-right"
          >
            <img src="/contact-dots.svg" alt="" />
            <ul className="ml-8 mt-8">
              <li className="font-semibold my-1"> About Us. </li>
              <li className="font-semibold my-1"> Our Vision. </li>
              <li className="font-semibold my-1"> Our Mission. </li>
              <li className="font-semibold my-1"> The Team. </li>
            </ul>
          </div>
          <div>
            <h2 className="md:text-5xl text-4xl font-bold text-center my-10 w-fit  relative">
              About Us
              <span>
                <img src="/line2.png" alt="" />
              </span>
            </h2>
            <p
              className="font-normal md:text-xl text-2xl mb-4 md:leading-6"
              data-aos="fade-left"
            >
              The
              <span className="text-primary text-opacity-60">
                EmpowerHer Community
              </span>
              is a female oriented tech community which focuses on training and
              promoting women in the field of information technology. We aim to
              promote and spread more awareness for opportunities in information
              technology and incorporate as many women as possible. Having
              started our journey in May 2019, we have not backed down in
              helping women transition smoothly into the Information Technology
              industry. We have kickstarted the tech careers of more than 1,500
              women all across the globe. Our aim is to train 10,000 women by
              the end of 2025.
            </p>
          </div>
        </div>
      </div>
      <div
        className="h-[300px] md:h-[450px] w-full bg-no-repeat bg-cover bg-top bg-[url('/events/group.png')]"
        data-aos="zoom-in"
      >
        {/* <div className="h-4/5 w-full" data-aos='zoom-in'>  */}
        {/* <Image src='/group.png' alt='' className='w-full h-4/5' /> */}
      </div>
    </section>
  );
};
export default HeroAbout;
