import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Newsletter from '../Customers/Newsletter';

const Footer = () => { 

    // const [tab1Open, setTab1Open] = useState(false);
    // const [tab2Open, setTab2Open] = useState(false);
    // const [tab3Open, setTab3Open] = useState(false);
    // const [tab4Open, setTab4Open] = useState(false);
    
    // const toggleTab1 = () => {
    //     setTab1Open(!tab1Open);
    // };
    // const toggleTab2 = () => {
    //     setTab2Open(!tab2Open);
    // };
    // const toggleTab3 = () => {
    //     setTab3Open(!tab3Open);
    // };
    // const toggleTab4 = () => {
    //     setTab4Open(!tab4Open);
    // };

    const [tabStatus, setTabStatus] = useState({
        tab1: false,
        tab2: false,
        tab3: false,
        tab4: false
    });

    const toggleTab = (tabName) => { 
        setTabStatus((prevStatus) => ({ 
            ...prevStatus,
            [tabName]: !prevStatus[tabName]
        }));
    }

    return (
    <footer className='Footer'>
        <div className='Container'>
            <div className='Footer_main'>
                    <div className='Footer_block Footer_blockText'>
                        <h2 className="Footer_title Heading u-h6 desktop_heading">About the shop</h2>
                        <h2 className='Footer_title Heading u-h6 mobile_heading' onClick={() => toggleTab('tab1')}>About the shop
                            <FontAwesomeIcon className='mIcon' icon={tabStatus.tab1 ? faMinus : faPlus} />                            
                        </h2>                        
                        <div className={`Footer_blockContentWrapper ${tabStatus.tab1 ? "is-open" : ""}`}>
                            <div className='Footer_blockContentContainer'>
                                <div className='Footer_content Rte'>
                                    <p><strong>VTRENDO</strong> "aspires to deliver great trendy outwear by innovation and collaborating with different partners to provide an enriching experience to our customers. We provide quality clothing with a wide range of sizes from regular to plus-size at very competitive pricing." </p>
                                    <p><strong>Enhance your style with our trendy apparels and accessories.</strong></p>
                                </div>
                                <ul className='Footer_social horizontalList horizontalList_spacingLoose'>
                                    <li className='horizontalList_item'>
                                        <a href="https://www.facebook.com/Vtrendo" className='Link Link--primary'>
                                            <span className="Icon_wrapper--clickable">  
                                            <FontAwesomeIcon icon="fa-brands fa-facebook" />    
                                                <svg className="Icon Icon_facebook" viewBox="0 0 9 17">
                                                <path d="M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z"></path>
                                                </svg>
                                            </span>
                                        </a>
                                    </li>
                                    <li className='horizontalList_item'>
                                        <a href="https://instagram.com/vtrendo" className='Link Link--primary'>
                                            <span className="Icon_wrapper--clickable">                                                
                                                <svg className="Icon Icon_instagram" role="presentation" viewBox="0 0 32 32">
                                                <path d="M15.994 2.886c4.273 0 4.775.019 6.464.095 1.562.07 2.406.33 2.971.552.749.292 1.283.635 1.841 1.194s.908 1.092 1.194 1.841c.216.565.483 1.41.552 2.971.076 1.689.095 2.19.095 6.464s-.019 4.775-.095 6.464c-.07 1.562-.33 2.406-.552 2.971-.292.749-.635 1.283-1.194 1.841s-1.092.908-1.841 1.194c-.565.216-1.41.483-2.971.552-1.689.076-2.19.095-6.464.095s-4.775-.019-6.464-.095c-1.562-.07-2.406-.33-2.971-.552-.749-.292-1.283-.635-1.841-1.194s-.908-1.092-1.194-1.841c-.216-.565-.483-1.41-.552-2.971-.076-1.689-.095-2.19-.095-6.464s.019-4.775.095-6.464c.07-1.562.33-2.406.552-2.971.292-.749.635-1.283 1.194-1.841s1.092-.908 1.841-1.194c.565-.216 1.41-.483 2.971-.552 1.689-.083 2.19-.095 6.464-.095zm0-2.883c-4.343 0-4.889.019-6.597.095-1.702.076-2.864.349-3.879.743-1.054.406-1.943.959-2.832 1.848S1.251 4.473.838 5.521C.444 6.537.171 7.699.095 9.407.019 11.109 0 11.655 0 15.997s.019 4.889.095 6.597c.076 1.702.349 2.864.743 3.886.406 1.054.959 1.943 1.848 2.832s1.784 1.435 2.832 1.848c1.016.394 2.178.667 3.886.743s2.248.095 6.597.095 4.889-.019 6.597-.095c1.702-.076 2.864-.349 3.886-.743 1.054-.406 1.943-.959 2.832-1.848s1.435-1.784 1.848-2.832c.394-1.016.667-2.178.743-3.886s.095-2.248.095-6.597-.019-4.889-.095-6.597c-.076-1.702-.349-2.864-.743-3.886-.406-1.054-.959-1.943-1.848-2.832S27.532 1.247 26.484.834C25.468.44 24.306.167 22.598.091c-1.714-.07-2.26-.089-6.603-.089zm0 7.778c-4.533 0-8.216 3.676-8.216 8.216s3.683 8.216 8.216 8.216 8.216-3.683 8.216-8.216-3.683-8.216-8.216-8.216zm0 13.549c-2.946 0-5.333-2.387-5.333-5.333s2.387-5.333 5.333-5.333 5.333 2.387 5.333 5.333-2.387 5.333-5.333 5.333zM26.451 7.457c0 1.059-.858 1.917-1.917 1.917s-1.917-.858-1.917-1.917c0-1.059.858-1.917 1.917-1.917s1.917.858 1.917 1.917z"></path>
                                                </svg>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>                        
                    </div> 

                    
                    <div className='Footer_block Footer_blockLinks'>
                        <h2 className="Footer_title Heading u-h6 desktop_heading">Links</h2>
                        <h2 className='Footer_title Heading u-h6 mobile_heading' onClick={() => toggleTab('tab2')}>Links
                            <FontAwesomeIcon className='mIcon' icon={tabStatus.tab2 ? faMinus : faPlus} />                            
                        </h2>
                        <div className={`Footer_blockContentWrapper ${tabStatus.tab2 ? "is-open" : ""}`}>
                            <div className='Footer_blockContentContainer'>
                                <ul className='linkList Rte'>
                                    <li className='linkList_item'>
                                        <Link to='/search' className='Link Link--primary'>Search</Link>
                                    </li>
                                    <li className='linkList_item'>
                                    <Link to='/about-us' className='Link Link--primary'>About Us</Link>
                                    </li>
                                    <li className='linkList_item'>
                                    <Link to='/contact-us' className='Link Link--primary'>Contact Us</Link>
                                    </li>
                                    <li className='linkList_item'>
                                    <Link to='/help-desk' className='Link Link--primary'>Help Desk</Link>
                                    </li>
                                    <li className='linkList_item'>
                                    <Link to='/' className='Link Link--primary'>Home</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className='Footer_block Footer_blockLinks'>
                        <h2 className="Footer_title Heading u-h6 desktop_heading">Policies</h2>
                        <h2 className='Footer_title Heading u-h6 mobile_heading' onClick={() => toggleTab('tab3')}>Policies
                            <FontAwesomeIcon className='mIcon' icon={tabStatus.tab3 ? faMinus : faPlus} />                            
                        </h2>
                        <div className={`Footer_blockContentWrapper ${tabStatus.tab3 ? "is-open" : ""}`}>
                            <div className='Footer_blockContentContainer'>
                                <ul className='linkList Rte'>
                                    <li className='linkList_item'>
                                        <Link to='/shipping-policy' className='Link Link--primary'>Shipping Policy</Link>
                                    </li>
                                    <li className='linkList_item'>
                                    <Link to='/refund-policy' className='Link Link--primary'>Return/Refund Policy</Link>
                                    </li>
                                    <li className='linkList_item'>
                                    <Link to='/privacy-policy' className='Link Link--primary'>Privacy Policy</Link>
                                    </li>
                                    <li className='linkList_item'>
                                    <Link to='/terms-of-service' className='Link Link--primary'>Terms of Service</Link>
                                    </li>
                                    <li className='linkList_item'>
                                    <Link to='/faqs' className='Link Link--primary'>FAQ's</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='Footer_block Footer_blockNewsletter'>
                    <h2 className="Footer_title Heading u-h6 desktop_heading">Become a Member</h2>
                        <h2 className='Footer_title Heading u-h6 mobile_heading' onClick={() => toggleTab('tab4')}>Become a Member
                            <FontAwesomeIcon className='mIcon' icon={tabStatus.tab4 ? faMinus : faPlus} />                            
                        </h2>
                        <div className={`Footer_blockContentWrapper ${tabStatus.tab4 ? "is-open" : ""}`}>
                            <div className='Footer_blockContentContainer'>
                                <div className='Footer_content Rte'>
                                    <p><strong>Subscribe and save!</strong> Get notified about latest updates and exclusive offers! (Subscription discount code will be sent via email)</p>
                                <Newsletter/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
                
            <div className='Footer_down'>
                    
                {/* <div className='Footer_currency'>
                     <button>AUD$</button>   
                </div> */}
                    
                <div className='Footer_copyright'>
                    <Link to='/' className='Footer_storeName Heading Link Link--secondary'>© Vtrendo</Link>
                </div>
                
                <ul className='Footer_paymentList horizontalList'>
                    <li className='horizontalList_item'><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="38" height="24" aria-labelledby="pi-american_express"><title id="pi-american_express">American Express</title><g fill="none"><path fill="#000" d="M35,0 L3,0 C1.3,0 0,1.3 0,3 L0,21 C0,22.7 1.4,24 3,24 L35,24 C36.7,24 38,22.7 38,21 L38,3 C38,1.3 36.6,0 35,0 Z" opacity=".07"></path><path fill="#006FCF" d="M35,1 C36.1,1 37,1.9 37,3 L37,21 C37,22.1 36.1,23 35,23 L3,23 C1.9,23 1,22.1 1,21 L1,3 C1,1.9 1.9,1 3,1 L35,1"></path><path fill="#FFF" d="M8.971,10.268 L9.745,12.144 L8.203,12.144 L8.971,10.268 Z M25.046,10.346 L22.069,10.346 L22.069,11.173 L24.998,11.173 L24.998,12.412 L22.075,12.412 L22.075,13.334 L25.052,13.334 L25.052,14.073 L27.129,11.828 L25.052,9.488 L25.046,10.346 L25.046,10.346 Z M10.983,8.006 L14.978,8.006 L15.865,9.941 L16.687,8 L27.057,8 L28.135,9.19 L29.25,8 L34.013,8 L30.494,11.852 L33.977,15.68 L29.143,15.68 L28.065,14.49 L26.94,15.68 L10.03,15.68 L9.536,14.49 L8.406,14.49 L7.911,15.68 L4,15.68 L7.286,8 L10.716,8 L10.983,8.006 Z M19.646,9.084 L17.407,9.084 L15.907,12.62 L14.282,9.084 L12.06,9.084 L12.06,13.894 L10,9.084 L8.007,9.084 L5.625,14.596 L7.18,14.596 L7.674,13.406 L10.27,13.406 L10.764,14.596 L13.484,14.596 L13.484,10.661 L15.235,14.602 L16.425,14.602 L18.165,10.673 L18.165,14.603 L19.623,14.603 L19.647,9.083 L19.646,9.084 Z M28.986,11.852 L31.517,9.084 L29.695,9.084 L28.094,10.81 L26.546,9.084 L20.652,9.084 L20.652,14.602 L26.462,14.602 L28.076,12.864 L29.624,14.602 L31.499,14.602 L28.987,11.852 L28.986,11.852 Z"></path></g></svg></li>
                    <li className='horizontalList_item'><svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="pi-generic" width="38" height="24" role="img"><title id="pi-generic">Generic</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path fill="#999" d="M0 5h38v4H0V5z"></path><path opacity=".15" d="M5 17h10v2H5v-2zm24 0h4v2h-4v-2z"></path></svg></li> 
                    <li className='horizontalList_item'><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="38" height="24" aria-labelledby="pi-google_pay"><title id="pi-google_pay">Google Pay</title><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000" opacity=".07"></path><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF"></path><path d="M18.093 11.976v3.2h-1.018v-7.9h2.691a2.447 2.447 0 0 1 1.747.692 2.28 2.28 0 0 1 .11 3.224l-.11.116c-.47.447-1.098.69-1.747.674l-1.673-.006zm0-3.732v2.788h1.698c.377.012.741-.135 1.005-.404a1.391 1.391 0 0 0-1.005-2.354l-1.698-.03zm6.484 1.348c.65-.03 1.286.188 1.778.613.445.43.682 1.03.65 1.649v3.334h-.969v-.766h-.049a1.93 1.93 0 0 1-1.673.931 2.17 2.17 0 0 1-1.496-.533 1.667 1.667 0 0 1-.613-1.324 1.606 1.606 0 0 1 .613-1.336 2.746 2.746 0 0 1 1.698-.515c.517-.02 1.03.093 1.49.331v-.208a1.134 1.134 0 0 0-.417-.901 1.416 1.416 0 0 0-.98-.368 1.545 1.545 0 0 0-1.319.717l-.895-.564a2.488 2.488 0 0 1 2.182-1.06zM23.29 13.52a.79.79 0 0 0 .337.662c.223.176.5.269.785.263.429-.001.84-.17 1.146-.472.305-.286.478-.685.478-1.103a2.047 2.047 0 0 0-1.324-.374 1.716 1.716 0 0 0-1.03.294.883.883 0 0 0-.392.73zm9.286-3.75l-3.39 7.79h-1.048l1.281-2.728-2.224-5.062h1.103l1.612 3.885 1.569-3.885h1.097z" fill="#5F6368"></path><path d="M13.986 11.284c0-.308-.024-.616-.073-.92h-4.29v1.747h2.451a2.096 2.096 0 0 1-.9 1.373v1.134h1.464a4.433 4.433 0 0 0 1.348-3.334z" fill="#4285F4"></path><path d="M9.629 15.721a4.352 4.352 0 0 0 3.01-1.097l-1.466-1.14a2.752 2.752 0 0 1-4.094-1.44H5.577v1.17a4.53 4.53 0 0 0 4.052 2.507z" fill="#34A853"></path><path d="M7.079 12.05a2.709 2.709 0 0 1 0-1.735v-1.17H5.577a4.505 4.505 0 0 0 0 4.075l1.502-1.17z" fill="#FBBC04"></path><path d="M9.629 8.44a2.452 2.452 0 0 1 1.74.68l1.3-1.293a4.37 4.37 0 0 0-3.065-1.183 4.53 4.53 0 0 0-4.027 2.5l1.502 1.171a2.715 2.715 0 0 1 2.55-1.875z" fill="#EA4335"></path></svg></li> 
                    <li className='horizontalList_item'><svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-master"><title id="pi-master">Mastercard</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><circle fill="#EB001B" cx="15" cy="12" r="7"></circle><circle fill="#F79E1B" cx="23" cy="12" r="7"></circle><path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path></svg></li> 
                    <li className='horizontalList_item'><svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-paypal"><title id="pi-paypal">PayPal</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path fill="#003087" d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"></path><path fill="#3086C8" d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"></path><path fill="#012169" d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"></path></svg></li> 
                </ul>    
            </div>    
        </div>
    </footer>
    )
}

export default Footer