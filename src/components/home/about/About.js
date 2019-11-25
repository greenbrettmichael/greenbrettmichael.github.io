import React from 'react';

import profilePic from "../../../assets/images/profile.png"

import "../../_common/common.css"
import "./about.css"

import ReactGA from 'react-ga';

const About = () => {

    const onLinkClick = () => {
        ReactGA.event({
            category: 'User',
            action: 'Click on CV'
        });
    }

    return (
        <div className="home-section container-about">        
            <img className="profile-picture-about" alt="profilepic" src={profilePic} />
            <div className="about-text">
                <span className="about-text-main">Hi! I'm <span className="about-name">Brett</span></span>
                <br/><span className="about-text-subtitle">I'm a software engineer!</span>
                <br/><br/>My interests are graphics, vision, and concurrency. 
                <br/>I love C++, mountains, dungeons, and dragons &#129497;
                {/* TODO reformat resume for WORD <br/><br/>If you want to know more: <a onClick={onLinkClick} href="https://docs.google.com/document/" target="_blank" rel="noopener noreferrer"><span className="about-cv">HERE is my CV.</span></a> */}
                <br/><br/>Keep scrolling to see some of the projects I've worked on.
            </div>                
        </div>
    );
}

export default About;