import Hero from "./Hero.jsx";
import LeftSection from "./LeftSection.jsx";
import RightSection from "./RightSection.jsx";
import Universe from "./Universe.jsx"

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        link="media/images/kite.png"
        heading="Kite"
        para="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        a1="Try Demo"
        a2="Learn More"
        arrow={<i className="fa-solid fa-arrow-right"></i>}
        logo1="media/images/googlePlayBadge.svg"
        logo2="media/images/appstoreBadge.svg"
      />
      <RightSection
       link="media/images/console.png"
       heading="Console"
       para="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
       a1="Learn More"
       arrow={<i className="fa-solid fa-arrow-right"></i>}
       
      />
       <LeftSection
        link="media\images\coin.png"
        heading="Coin"
        para="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        a1="Try Demo"
        a2="Learn More"
        arrow={<i className="fa-solid fa-arrow-right"></i>}
        logo1="media/images/googlePlayBadge.svg"
        logo2="media/images/appstoreBadge.svg"
      />
      <RightSection
       link="media/images/kiteconnect.png"
       heading="Kite connect API"
       para="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
       a1="Learn More"
   
       arrow={<i className="fa-solid fa-arrow-right"></i>}
      
      />
      <LeftSection
        link="media\images\varsity.png"
        heading="Varsity mobile"
        para="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        a1="Try Demo"
        a2="Learn More"
        arrow={<i className="fa-solid fa-arrow-right"></i>}
        logo1="media/images/googlePlayBadge.svg"
        logo2="media/images/appstoreBadge.svg"
      />
      <Universe/>
      
    </>
  );
}

export default ProductPage;
