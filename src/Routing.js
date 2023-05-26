import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import HelpDesk from './Components/ContactUs/HelpDesk';
import FAQs from './Components/FAQs';
import PrivacyPolicy from './Components/PrivacyPolicy';
import RefundPolicy from './Components/RefundPolicy';
import ShippingPolicy from './Components/ShippingPolicy';
import TermsOfService from './Components/TermsOfService';


const Routing = () => { 
    return (
        <BrowserRouter>
            <Header />

            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/help-desk" component={HelpDesk} />
            <Route path="/faqs" component={FAQs} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/refund-policy" component={RefundPolicy} />
            <Route path="/shipping-policy" component={ShippingPolicy} />
            <Route path="/terms-of-service" component={TermsOfService} />

            <Footer/>
        </BrowserRouter>
   )
}

export default Routing;