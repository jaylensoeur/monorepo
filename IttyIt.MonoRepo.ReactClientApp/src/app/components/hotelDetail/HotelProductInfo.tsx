import * as React from "react";
import SelfRating from "../../../lib/components/rating/SelfRating";
import StarRating from "../../../lib/components/rating/StarRating";

import useStyles from "./hotelDetailStyles";
const SELF_RATING = 'self';

type Props = {
    name: string
    starRating?: number
    ratingType?: string
    address?: string
    offerName: string
    cancellationTitle?: string
}
const HotelProductInfo = ({
    name,
    starRating,
    ratingType,
    address,
    offerName,
    cancellationTitle
}: Props) => {
    const classes = useStyles();
    return(
        <>
            <div className={classes.hotelTitlePanel}>
                <span className={classes.hotelName}>{name}</span>
                {ratingType === SELF_RATING ? (
                        <SelfRating rating={starRating}/>
                    ) :
                    (
                        <StarRating rating={starRating}/>
                    )
                }
            </div>
            <div className={classes.address}>
                {address}
            </div>
            <div className={classes.offerName}>
                <a className={classes.offerNameLink} href="#">{offerName}</a>
            </div>
            <div className={classes.cancellation}>
                {cancellationTitle}
            </div>
        </>
    );
};

export default HotelProductInfo;
