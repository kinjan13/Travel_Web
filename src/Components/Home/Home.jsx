import React, {useEffect} from 'react'
import './home.css'
import video from '../../Assets/video(2).mp4'
import { GrLocationPin } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { TfiFacebook } from "react-icons/tfi";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { TbApps } from "react-icons/tb";


import Aos from 'aos'
import 'aos/dist/aos.css'
const Home = () => {
  //a react hook to add scroll animation//
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div>
      <section className='home'>
        <div className='overlay'>
          <video src={video} muted autoPlay loop type="video/mp4"></video>
          </div>

          <div className="homeContent container">
            <div className="textDiv">

              <span data-aos="fade-up"className='smallText'> 
                Our Packages
              </span>

                <h1 data-aos="fade-up"className='homeTitle'>
                  Search your Holiday
                </h1>
             
            </div>

            <div data-aos="fade-up" className="cardDiv grid">
              <div className="destinationInput">
                <label htmlFor="city" >Search Your Destination</label>
                <div className="input flex">
                  <input type="text"placeholder='Enter Name Here...'/>
                  <GrLocationPin className="icon"/>
                </div>
              </div>


              <div className="dateInput">
                <label htmlFor="date" >Select your date:</label>
                <div className="input flex">
                  <input type="date"/>
                </div>
              </div>

              <div className="priceInput">
                <div className="label_total flex">
                  <label htmlFor="price">Max Price</label>
                  <h3 className="total">$5000</h3>
                </div>
                <div className="input flex">
                  <input type="range" max="5000" min="1000" />
                </div>
              </div>


              <div className="searchOptions flex">
                <HiFilter className='icon'/>
                <span>MORE FILTERS</span>
              </div>


            </div>

            <div data-aos="fade-up" className="homeFooterIcons flex">
              <div className="rightIcons">
              <TfiFacebook className="icon"/>
              <AiFillInstagram  className="icon"/>
              <FaTripadvisor className="icon"/>

              </div>
              <div className="leftIcons">
              <FaList className="icon"/>
              <TbApps className="icon"/>
              </div>
            </div>
          </div>
        
      </section>
    </div>
  )
}

export default Home
