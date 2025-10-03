import React from 'react';
import { GoTrophy, GoGoal } from "react-icons/go";
import { IoIosConstruct, IoIosArrowForward } from "react-icons/io";
import SimpleButton from '../simple_button';
import DoubleButton from '../double_button';


const FeaturesSection = () => {
    return (
        <div className='f-center flex-col mt-8 mb-16 gap-15 text-center'>
            <div className='f-center flex-col gap-4 max-w-3xl px-4'>
                <h6 className=''>Næste store talent</h6>
                <h2 className='text-center font-heading px-8'>MIN JUDO REJSE OG SKARPHED I KONKURRENCE</h2>
                <p>Dedikeret til at udvikle advanceret judo teknikker og strategisk ydevende gennem grunding træning og konkurrence erfaring</p>
            </div>
            <div className='f-center flex-col gap-4 flex-wrap px-4'>
                <GoTrophy className='size-15' />
                <h2 className='text-center font-heading'>KONKURENCE BEDRIFTER</h2>
                <p>Flere vundene gulmedaljer fra bl.a [indæt], [indsæt] og [indsæt]</p>
            </div>
            <div className='f-center flex-col gap-4 flex-wrap px-4'>
                <IoIosConstruct className='size-15' />
                <h2 className='text-center font-heading'>TEKNISKE EVNER</h2>
                <p>Advanceret kast og grund teknikker som adskiller mig fra modstanderen</p>
            </div>
            <div className='f-center flex-col gap-4 flex-wrap px-4'>
                <GoGoal className='size-15' />
                <h2 className='text-center font-heading'>MENTAL STYRKE</h2>
                <p>Advanceret kast og grund teknikker som adskiller mig fra modstanderen</p>
            </div>
            <div>
                <DoubleButton text1={'Læs mere'} text2={'Se videoer'} rounded={4}></DoubleButton>
            </div>
        </div>
    );
}

export default FeaturesSection;
