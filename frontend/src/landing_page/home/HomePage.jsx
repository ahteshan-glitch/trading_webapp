import React from 'react';
import Hero from "./Hero.jsx";
import Award from "./Award.jsx";
import Education from "./Education.jsx";

import OpenAccount from "../OpenAccount.jsx";
import Stats from "./Stats.jsx";
import Pricing from "./Pricing.jsx";

function HomePage() {
    return (
        <>
            
            <Hero />
            <Award />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />

            
           
        </>
    );
}

export default HomePage;
