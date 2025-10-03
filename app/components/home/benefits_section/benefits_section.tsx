import React from 'react';
import DoubleButton from '../../double_button';

const BenefitsSection = () => {
    return (
        <div className='f-col gap-15 bg-white'>
            <div className='f-row gap-4 px-5 pt-10 border-t-1 border-gray-200'>
                <h4>01</h4>
                <h4>Brand Synlighed</h4>
            </div>
            <div className='f-col gap-4 max-w-3xl px-5 pb-10'>
                <h5>EKSPONERING</h5>
                <h1 className='font-heading'>STYRK DIT BRAND GENNEM ATLETISK PRÆSTATION</h1>
                <p>Sponsorer får stor synlighed gennem mine konkurrencepræstationer og min voksende tilstedeværelse på sociale medier.</p>
                <DoubleButton text1={'Læs mere'} text2={'Se eksempler'} rounded={1} />
                <img src="/" className='w-swh h-[40svh]' />
            </div>


            <div className='f-row gap-4 px-5 pt-10 border-t-1 border-gray-200'>
                <h4>02</h4>
                <h4>Medieengagement</h4>
            </div>
            <div className='f-col gap-4 max-w-3xl px-5'>
                <h5>DÆKNING</h5>
                <h1 className='font-heading'>FORBINDER BRANDS MED UNGE ATLETISKE TALENTER</h1>
                <p>Udnyt min voksende platform til at nå unge sportsentusiaster og kommende atleter.</p>
                <DoubleButton text1={'Læs mere'} text2={'Se eksempler'} rounded={1} />
                <img src="/" className='w-swh h-[40svh]' />
            </div>


            <div className='f-row gap-4 px-5 pt-10 border-t-1 border-gray-200'>
                <h4>04</h4>
                <h4>Udviklingspotentiale</h4>
            </div>
            <div className='f-col gap-4 max-w-3xl px-5'>
                <h5>INVESTER</h5>
                <h1 className='font-heading'>STØTTER UNGE ATLETER OG PERSONLOG VÆKST</h1>
                <p>Vis din støtte til atletisk udvikling og personlig vækst gennem sponsorater.</p>
                <DoubleButton text1={'Læs mere'} text2={'Se eksempler'} rounded={1} />
                <img src="/" className='w-swh h-[40svh]' />
            </div>


            <div className='f-row gap-4 px-5 pt-10 border-t-1 border-gray-200'>
                <h4>03</h4>
                <h4>Indflydelse i lokalsamfundet</h4>
            </div>
            <div className='f-col gap-4 max-w-3xl px-5'>
                <h5>INDSPIRATION</h5>
                <h1 className='font-heading'>INVESTER I FREMSKRIDENDE ATLETER</h1>
                <p>Indgå partnerskab med en dedikeret ung atlet, der er engageret i kontinuerlig udvikling og konkurrencepræstation.</p>
                <DoubleButton text1={'Læs mere'} text2={'Se eksempler'} rounded={1} />
                <img src="/" className='w-swh h-[40svh]' />
            </div>
        </div>
    );
}

export default BenefitsSection;
