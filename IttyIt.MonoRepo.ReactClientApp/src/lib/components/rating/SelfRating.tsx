import * as React from "react";
import { StarTypeProps, StarRatingProps }  from './StarTypeProps';

const SelfRating = ({rating}: StarRatingProps): JSX.Element => {
const star: JSX.Element[] = [];
    const starRating = {
        half: "◐",
        full: "⚫",
        empty: "⚪",
    };

    for (let i = 0; i < 5; i++) {
        let starType: StarTypeProps = {};

        if (i < rating) {
            if (Math.floor(rating) === i && rating % 1) {
                starType.shape = starRating.half;
                starType.className = 'star-rating star-rating--half-circle';
            } else {
                starType.shape = starRating.full;
                starType.className = 'star-rating';
            }
            starType.color = '#f1e50e';

        } else {
            starType = {
                className: 'star-rating',
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

export default SelfRating;
