import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';

const HeroHome = () => {

  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  return (
    <section className="bg-primary bg-opacity-10 lg:px-0 px-3">
      <div className="container xl:max-w-screen-xl mx-auto px-4">
        <div className='flex justify-between lg:py-32 sm:py-12 py-7' >
          <div data-aos='fade-left'>
            <article>
              <div className='lg:text-base text-base w-96 h-6 uppercase tracking-widest font-light'>
                A female-oriented tech community
              </div>
              <div className='md:text-7xl text-6xl text-primary font-bold'>
                Empower Her Community
              </div>
              <div className=' md:text-lg text-xl lg:text-lg md:my-8 my-4 w-96 md:h-20 h-24'>
                We are a female community seeing to the growth and progress of all women in tech worldwide
              </div>
              <div>
                <div className="flex gap-4">
                  <button className='bg-transparent py-3 px-4 border border-primary hover:border-transparent w-44'>
                    <Link href='https://paystack.com/pay/empowerhercommunity'>
                      <a target='_blank'>
                        <span className="text-primary text-xl">  Support Us </span>
                      </a>
                    </Link>
                  </button>
                  <button className='bg-primary py-3 px-4 border border-primary hover:border-transparent w-44'>
                    <Link href='https://docs.google.com/forms/d/e/1FAIpQLSdiqxcF-QKi9bf97M6XaNUEmr1dc-5wOLpeAJqNWaCtRjTb5A/viewform'>
                      <a target='_blank'>
                        <span className="text-white text-xl"> Join Us Today </span>
                      </a>
                    </Link>
                  </button>
                </div>
                <div className='mt-14'>
                  <Image src='/group2.png' width='137px' height='137px' alt='' />
                </div>
              </div>
            </article>
          </div>
          <div className='hidden md:block bg-slate-100 rounded-r-lg h-3/4' data-aos='fade-right'>
            <Image src='/herogirl.png' width='548px' height='539px' alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroHome