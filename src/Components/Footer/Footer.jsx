import React, {useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/video(1).mp4'
import { LuSend } from "react-icons/lu";
import {MdOutlineModeOfTravel} from 'react-icons/md';
import { BsTwitterX } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import { TiSocialInstagram } from "react-icons/ti";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { CgPaypal } from "react-icons/cg";
import Aos from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {

//a react hook to add scroll animation//
useEffect(()=>{
  Aos.init({duration:2000})
},[])


  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2}loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email' />
            <button data-aos="fade-up" className='btn flex' type='submit'>SEND
            <LuSend className="icon"/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
              <MdOutlineModeOfTravel className="icon"/>Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footParagraph">
            Embark on the journey of a lifetime with Travel.; where your dreams of exploration become a reality. From the sun-kissed beaches of Bali to the historic streets of Rome, our curated travel experiences are designed to immerse you in the beauty and culture of each destination
            </div>

            <div data-aos="fade-up" className="footerSocials">
            <BsTwitterX className="icon" />
            <FiYoutube className="icon"/>
            <TiSocialInstagram className="icon" />
            <FaTripadvisor className="icon"/>
            <CgPaypal  className="icon"/>
            </div>
          </div>
           
          <div className="footerLinks grid">
              {/* Group One */}
            <div data-aos="fade-up" data-aos-duration="3000"className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">Services
              <FiChevronRight className="icon"/>
              </li>

              <li className="footerList flex">Insurance
              <FiChevronRight className="icon"/>
              </li>

              <li className="footerList flex">Agency
              <FiChevronRight className="icon"/>
              </li>

              <li className="footerList flex">Tourism
              <FiChevronRight className="icon"/>
              </li>

              <li className="footerList flex">Payment
              <FiChevronRight className="icon"/>
              </li>
            </div>

             {/* Group Two */}
             <div data-aos="fade-up"
             data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
               PARTNERS
              </span>

              <li className="footerList flex">Bookings
              <FiChevronRight className="icon"/>
              </li>

              <li className="footerList flex">RentalCars
              <FiChevronRight className="icon"/>
              </li>

              <li className="footerList flex">HostelWorld
              <FiChevronRight className="icon"/>
              </li>

              <li className="footerList flex">Trivago
              <FiChevronRight className="icon"/>
              </li>

              <li className="footerList flex">Tripadvisor
              <FiChevronRight className="icon"/>
              </li>
            </div>

            {/* Group Three */}
            <div data-aos="fade-up" data-aos-duration="5000"className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">London
              <FiChevronRight className="icon"/>
              </li>

              <li className="footerList flex">California
              <FiChevronRight className="icon"/>
              </li>

              <li className="footerList flex">Indonesia
              <FiChevronRight className="icon"/>
              </li>

              <li className="footerList flex">Europe
              <FiChevronRight className="icon"/>
              </li>

              <li className="footerList flex">Oceania
              <FiChevronRight className="icon"/>
              </li>
            </div>

          </div>

          <div className="footerDiv flex">

            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - NODDY</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
