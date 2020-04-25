import * as React from "react";
import HotelItemPanel from "../hotelItemPanel/HotelItemPanel";
import Grid from "@material-ui/core/Grid";

type Props = {
    hotels: any[]
}
const HotelListing = ({hotels}: Props): JSX.Element => {
        return (
            <>
                {hotels && hotels.length ?
                    hotels.map((hotel) => (<HotelItemPanel key={hotel.id} {...hotel} />))
                : (
                        <Grid item xs={12}>
                            <h2>Sorry there are no hotels!</h2>
                        </Grid>
                )}

            </>
        );
};

export default HotelListing;
