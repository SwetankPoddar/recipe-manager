import React, { useState } from 'react';
import Image from 'next/image';

/*
Sourced from: https://stackoverflow.com/a/66953317/6460856
*/

export default function ImageWithFallback(props) {
    const { src, fallbackSrc, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image
            {...rest}
            src={imgSrc}
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
        />
    );
};