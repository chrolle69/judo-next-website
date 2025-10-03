import React from 'react';
import SimpleButton from './simple_button';
import { IoIosArrowForward } from "react-icons/io";


type Props = {
    rounded?: number;
    text1?: string;
    text2?: string;
}

const DoubleButton = ({ rounded, text1, text2 }: Props) => {
    return (
        <div>
            <SimpleButton border={1} text={text1} rounded={rounded} />
            <SimpleButton border={0} text={text2} icon={<IoIosArrowForward />} />
        </div>
    );
}

export default DoubleButton;
