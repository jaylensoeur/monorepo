import Grid from "@material-ui/core/Grid";
import * as React from "react";

import PricingPanel from "../../../lib/components/price/PricingPanel";
import HotelProductInfo from "./HotelProductInfo";

type Props = {
    name: string
    starRating: number
    starRatingType: string
    price: number
    currency: string
    cancellationTitle: string
    address: string
    offerName: string
    savingApproxPrice?: number
    priceDescription?: string
};

const HotelDetail = ({
     priceDescription = '1 night total',
     savingApproxPrice,
     offerName,
     address,
     cancellationTitle,
     name,
     starRating,
     starRatingType,
     price,
     currency
}: Props): JSX.Element => {
    return (
        <Grid container>
            <Grid item xs={12} md={8}>
               <HotelProductInfo
                   name={name}
                   starRating={starRating}
                    ratingType={starRatingType}
                    address={address}
                    offerName={offerName}
                    cancellationTitle={cancellationTitle}
               />
            </Grid>
        <Grid item xs={12} md={4}>
           <PricingPanel
                currency={currency}
                price={price}
                currencySymbol="$"
                priceDescription={priceDescription}
                savingApproxPrice={savingApproxPrice}
           />
        </Grid>
    </Grid>
   );
};

export default HotelDetail;
