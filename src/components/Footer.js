import React, { useEffect } from 'react';
import Link from 'next/link';
import { SiInstagram, SiTwitter, SiFacebook, SiLinkedin } from 'react-icons/si';
import { MdOutlineEmail } from 'react-icons/md';
import AOS from 'aos';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
    AOS.refresh();
  }, []);

  return (
    <footer className="footer">
      <div className="container xl:max-w-screen-xl mx-auto px-4 py-12 text-white">
        <h2 className='leading-10 md:text-5xl text-4xl font-normal mb-6'>Empower Her Community</h2>
        <div className='flex flex-wrap lg:flex-nowrap justify-between gap-10 w-full'>
          <div className='flex flex-col max-w-lg w-full' data-aos='zoom-in-up'>
            <p className='font-normal text-2xl md:text-xl leading-8 mb-8'>
              A Technology-based community focused on training
              and promoting women in the field of information
              technology, so as to help them advance in their career.
            </p>
            <div className='flex lg:gap-6 gap-10 mb-6'>
              <span className='border-2 border-solid rounded-full p-2'>
                <Link href="https://www.instagram.com/empowerher_community/" legacyBehavior>
                  <a target='_blank'>
                    <SiInstagram size='1.6rem' />
                  </a>
                </Link>
              </span>
              <span className='border-2 border-solid rounded-full p-2'>
                <Link href="https://twitter.com/empowerhercom?s=20" legacyBehavior>
                <a target='_blank'>
                    <SiTwitter size='1.6rem' />
                  </a>
                </Link>
              </span>
              <span className='border-2 border-solid rounded-full p-2'>
                <Link href="https://www.facebook.com/empowerhercom/" legacyBehavior>
                <a target='_blank'>
                    <SiFacebook size='1.6rem' />
                  </a>
                </Link>
              </span>
              <span className='border-2 border-solid rounded-full p-2'>
                <Link href="https://www.linkedin.com/company/empower-her-community/" legacyBehavior>
                <a target='_blank'>
                    <SiLinkedin size='1.6rem' />
                  </a>
                </Link>
              </span>
            </div>
            <h4 className='text-2xl md:text-xl'>Copyright &copy; {new Date().getFullYear()} EmpowerHer Community</h4>
          </div>
          <div className='flex flex-wrap sm:flex-nowrap gap-6 lg:gap-x-8 gap-x-16 w-full lg:w-auto text-xl' data-aos='zoom-in-down'>
            <ul className="min-w-max text-2xl md:text-xl">
              <li className="mb-4">
                <Link href='/' legacyBehavior>
                  <a>
                    Home
                  </a>
                </Link>
              </li>
              <li className="mb-4">
                <Link href='/aboutUs' legacyBehavior>
                  <a>
                    About Us
                  </a>
                </Link>
              </li>
              <li className="mb-4">
                <Link href='/events' legacyBehavior>
                  <a>
                    Events
                  </a>
                </Link>
              </li>
              <li className="mb-4">
                <Link href='/support' legacyBehavior>
                  <a target='_blank'>
                    Support Us
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="min-w-max text-2xl md:text-xl">
              <li className="mb-4">
                <Link href='/volunteer' legacyBehavior>
                  <a>
                    Volunteer
                  </a>
                </Link>
              </li>
              <li className="mb-4">
                <Link href='/aboutUs#team' legacyBehavior>
                  <a>
                    Meet The Team
                  </a>
                </Link>
              </li>
              <li className="mb-4">
                <Link href='/contact' legacyBehavior>
                  <a>
                    Contact
                  </a>
                </Link>
              </li>
              <li className="mb-4">
                <Link href='/#partnership'legacyBehavior>
                  <a>
                    Partners
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="w-full text-2xl md:text-xl">
              <li className="mb-4">
                Contact Information
              </li>
          
              <li className="mb-4 ">
                <Link href='mailto:info@empowerher.community'legacyBehavior>
                  <a className='flex items-center gap-4'>
                    <MdOutlineEmail />
                    info@empowerher.community
                  </a>
                </Link>
              </li>
              <li className="mt-8 text-right hidden lg:block">
                <img src='/footer-dots.png' className='w-24 h-24' alt='dot' />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;