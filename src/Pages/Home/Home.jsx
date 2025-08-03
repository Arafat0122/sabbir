import React from 'react';
import Hero from './component/Hero';
import { HeroVideoDialogDemo } from './component/HeroVideoDialog';
import PromoMarque from './component/PomoMarque';
import WhyChoose from './component/WhyChoose';
import IntroVideo from './component/IntroVideo';

const Home = () => {
    return (
        <div>
            <Hero/>

            {/* <div className="h-[500px]">
                <HeroVideoDialogDemo/>
            </div> */}
            <PromoMarque/>
            <IntroVideo/>
            <WhyChoose/>
            
        </div>
    );
};

export default Home;