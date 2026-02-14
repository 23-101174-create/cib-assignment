import React, { Component } from 'react';
import "./Home.css"
import Subtitle from '../components/Subtitle';
import SectionTitle from '../components/SectionTitle';
import CenterCards from '../components/CenterCards';
import img1 from '../assets/logo1.png';
import img2 from '../assets/logo2.png';
import img3 from '../assets/logo3.png';
import Button from '../components/Button';
import img4 from '../assets/icon1.png';
import img5 from '../assets/icon2.png';
import img6 from '../assets/icon3.png';
import CenterCards2 from '../components/CenterCards2';
import img7 from '../assets/global.png'
import img8 from '../assets/call.png'
import img9 from '../assets/branch.png'

const Home  = () => {
    return ( <>
    <section className='section-8'>
        <div className='icons-box'>
        <div className='title-box'>
        <Subtitle text="Sustainable finance"/>
        <SectionTitle text=" Sustainability is an integral part of the way we work"/>
        </div>
        <div className='cards-box'>
                <CenterCards img={img1} title="S&P/EGX ESG Index"/>
                <CenterCards img={img2} title="Bloomberg Gender Equality Index "/>
                <CenterCards img={img3} title="FTSE4Good Index"/>
        </div>
        <Button text="Learn More" />
        </div>

    </section>

    <section className='section-9'>
        <div className='icons-box'>
        <div className='title-box'>
        <Subtitle text="Awards"/>
        <SectionTitle text=" CIB's integrity and quality are recognized internationally " />
        </div>
        <div className='cards-box'>
                <CenterCards img={img4} title="Best Private Bank in Egypt" cardparagraph1="Global Finance - 2023" />
                <CenterCards img={img5} title="Best Mergers & Acquisitions Deal in MENA" cardparagraph1="EMEA Finance - 2023" />
                <CenterCards img={img6} title="Best Bank in Egypt" cardparagraph1="Euromoney - 2023" />
        </div>
        <Button text="See all our awards"/>
        </div>
    </section>

    <section className='section-8'>
    <div className='icons-box'>
        <div className='title-box'>
        <Subtitle text="We care"/>
        <SectionTitle text=" Our dedicated team is committed to meeting your needs " />
        </div>
        <div className='cards-box-2'>
            <CenterCards2 img={img7} title="Online" cardparagraph="Chat with 'Zaki' our digital assistant to guide you through our products and services, or reach out on social media. " />
            <CenterCards2 img={img8} title="On the phone" cardparagraph="For support, including emergencies such as cards closure or immediate critical feedback. " />
            <CenterCards2 img={img9} title="In branch" cardparagraph="Our trained team of tellers and relationship managers are here to help you get the service you need. " />
            </div>
        </div>
    </section>
    
    <footer>
        
    </footer>
    
    </>);
};
 
export default Home;