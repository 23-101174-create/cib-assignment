import React, { Component } from 'react';
import "./Home.css"
import Subtitle from '../components/Subtitle';
import SectionTitle from '../components/SectionTitle';
import CenterCards from '../components/CenterCards';
import img1 from '../assets/logo1.png';
import img2 from '../assets/logo2.png';
import img3 from '../assets/logo3.png';
import Button from '../components/Button';

const Home  = () => {
    return ( <>
    <section className='section-8'>
        <div className='icons-box'>
        <Subtitle text="Sustainable finance"/>
        <SectionTitle />
        <div className='cards-box'>
                <CenterCards img={img1} title="S&P/EGX ESG Index"/>
                <CenterCards img={img2} title="Bloomberg Gender Equality Index "/>
                <CenterCards img={img3} title="FTSE4Good Index"/>
        </div>
        <Button text="Learn More" />
        </div>


    </section>
    
    
    </>);
}
 
export default Home;