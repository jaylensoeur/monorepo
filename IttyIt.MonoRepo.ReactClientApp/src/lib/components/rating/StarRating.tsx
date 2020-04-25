import * as React from "react";
import { StarTypeProps, StarRatingProps }  from './StarTypeProps';

const StarRating = ({rating}: StarRatingProps): JSX.Element => {
    const starRating = {
        half: "◐",
        full: "●",
        empty: "○",
    };
    const star: JSX.Element[] = [];

    for (let i = 0; i < 5; i++) {
        let starType: StarTypeProps = {};

        if (i < rating) {
            if (Math.floor(rating) === i && rating % 1) {
                starType.shape = starRating.half;
            } else {
                starType.shape = starRating.full;
            }
            starType.color = '#f1e50e';
            starType.className = 'star-rating star-rating--star';
        } else {
            starType = {
                className: 'star-rating star-rating--star',
                shape: starRating.empty,
                color: '#ccc'
            };
        }
        star.push(<span key={i} style={{color: starType.color}} className={starType.className}>{starType.shape}</span>);
    }

    return (
        <div data-testid="rating" className="rating-block">
            {star}
        </div>
    );
};

export default StarRating;

