import Grid from "@material-ui/core/Grid";
import HotelDetail from "../hotelDetail/HotelDetail";
import * as React from "react";
import Image from "../../../lib/components/image/Image";
import './hotelItemPanel.scss';

import useStyles from './hotelItemPanelStyle';
import Spinner from "../../../lib/components/loader/Spinner";

type Props = {
    imageUrl: string
    name: string
    starRating: number
    price: number
    currency?: string
    starRatingType: string
    promotionTitle: string
    cancellationTitle: string
    address: string
    offerName: string
    imageCaption: string
};

const HotelItemPanel = ({
    imageUrl,
    name,
    starRatingType,
    starRating,
    price,
    currency,
    promotionTitle,
    cancellationTitle,
    address,
    offerName,
    imageCaption
}: Props): JSX.Element => {
    const classes = useStyles();
    const preloadImage = new window.Image();
    preloadImage.src = imageUrl;
    return (
        <>
            <Grid item xs={4} md={2}>
                <div className={`frame`}>
                    <div className="offer-badge">
                        <div className="offer-badge__label">{promotionTitle}</div>
                    </div>
                    <div>
                        <Image className="hotel-image" title={imageCaption} imageUrl={preloadImage.src}
                               render={({isLoading})=> (
                                    <Spinner isLoading={isLoading} className={classes.spinner} />
                               )}
                        />
                    </div>
                </div>
            </Grid>
            <Grid item xs={8} md={10} className={`${classes.hotelItemPanel} hotel-item-panel`}>
                <HotelDetail
                    offerName={offerName}
                    address={address}
                    cancellationTitle={cancellationTitle}
                    name={name}
                    starRating={starRating}
                    starRatingType={starRatingType}
                    price={price}
                    currency={currency}
                />
            </Grid>
        </>
    );
};

export default HotelItemPanel;
