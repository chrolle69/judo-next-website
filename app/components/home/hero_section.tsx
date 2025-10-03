import React from 'react';

const HeroSection = () => {
    return (
        <div className='relative flex justify-center w-full '>
            <h1 className='absolute mt-20 text-center text-white font-heading z-1'>Judomester i støbeskeen</h1> {/* Fremtidens judomester - Judomester undervejs - Judotalent på vej mod toppen */}
            <p className='absolute mt-43 px-5 text-center font-sans text-white font-light text-shadow-xs text-shadow-black z-1'>En passioneret ung judotalent, drevet af vilje og konstant forbedring. Klar til at vise sine færdigheder og inspirere andre gennem konkurrence og dedikation.</p>
            <div className='bg-black opacity-50 absolute w-full h-full  z-0'></div>
            <img className='opacity-100 h-[92svh] object-cover' src="judo_home_2.jpg" />
        </div>
    );
}

export default HeroSection;
