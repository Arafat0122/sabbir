import React from 'react';
import Hero from './Component/Hero';
import { HeroVideoDialogDemo } from './Component/HeroVideoDialog';
import PromoMarque from './Component/PomoMarque';
import WhyChoose from './Component/WhyChoose';
import IntroVideo from './Component/IntroVideo';
import OurServices from './Component/OurServices';

const Home = () => {
    return (
        <div>
            <Hero />

            {/* <div className="h-[500px]">
                <HeroVideoDialogDemo/>
            </div> */}
            <PromoMarque />
            <IntroVideo />
            <OurServices />
            <WhyChoose />

        </div>
    );
};

export default Home;