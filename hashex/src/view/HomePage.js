import React from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Logo from "../images/logo_with_caption.svg";
import IntroBlock from '../components/blocks/IntroBlock'
import InfoBlock from '../components/blocks/InfoBlock'
import InfoBlock2 from '../components/blocks/Benefits'
import ContactsBlock from '../components/blocks/Contacts'
import homePageData from './HomePageData';

export default function HomePage() {
    return (
        <>
            <Header logo={Logo}/>
            <IntroBlock data={homePageData.introBlock}/>
            <InfoBlock data={homePageData.infoBlock}/>
            <InfoBlock2 data={homePageData.benefitsBlock}/>
            <ContactsBlock data={homePageData.contactBlock}/>
            <Footer logo={Logo}/>

        </>
    );
}

