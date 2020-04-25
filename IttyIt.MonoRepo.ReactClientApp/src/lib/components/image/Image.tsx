import * as React from 'react';
import { useState } from 'react';

type Props = {
    imageUrl: string
    alt?: string
    title?: string
    className? : string
    render?: (data: {isLoading: boolean}) => void
};

const Image = ({render, className, imageUrl, alt, title}: Props): JSX.Element => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoaded = () => {
        setIsLoading(false);
    };

    return (
        <>
            <img data-testid="image"
                className={className}
                alt={alt}
                title={title}
                src={imageUrl}
                onLoad={handleImageLoaded}
            />
            {render ? render({isLoading}) : ''}
        </>
    );
};

export default Image;
