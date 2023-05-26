import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const AboutUs = () => { 
    return (
        <>
            <h2 style={{textAlign: 'center'}}>Welcome to Vtrendo</h2>
            <p style={{textAlign: 'center'}}>Vtrendo is an Australian based e-commerce store with an expertise in providing superior quality products worldwide within shorter time frames.</p>
            <p style={{textAlign: 'center'}}><br /><strong>Our Mission:</strong><br />We aspire to deliver great trendy outwear by innovation and <br />collaborating with our partners to provide an enriching experience<br />to the customer. We provide quality fashionable clothing at very competitive pricing. Our design collection will keep you always in trend with confidence and comfort.<br /><br />Vtrendo strives to be an empathy driven organization and to take care of business partners, customers, employees and be a responsible corporate citizen of the society.<br /><br /><strong>Our Value:</strong><br />We value superior design collection, top quality products and customers trust. We ensure our clients to have an amazing experience with us. We incorporate a flexible strong and satisfying customer support service. <br /><br /><strong>Giving Back:</strong><br />We are also proud to donate 5% of our profits to local charity initiatives in NSW. You may follow us on Instagram and Facebook for our donations.</p>
            <div style={{textAlign: 'center'}}><strong>Come, Visit and enjoy!!</strong><br /><strong>Thank you very much for choosing to shop with Vtrendo.</strong></div>
            <div style={{textAlign: 'center'}}><strong></strong></div>
            <div style={{textAlign: 'center'}}><strong>Visit our page of <Link to="/faqs" title="Vtrendo FAQs Page">Frequently Asked Questions</Link></strong></div>
            <div style={{textAlign: 'center'}}><strong>For addressing issues or queries related to shipping / return / refund / exchange freely contact us on support@vtrendo.com.au</strong></div>
            <div style={{textAlign: 'center'}}><strong> </strong></div>
        </>     
 )   
}

export default AboutUs;