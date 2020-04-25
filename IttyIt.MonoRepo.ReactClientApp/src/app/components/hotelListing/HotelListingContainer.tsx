import * as React from 'react';
import HotelListing from "./HotelListing";
import * as ReactRedux from "react-redux";
import Spinner from "../../../lib/components/loader/Spinner";

const HotelListingContainer = ({hotels, isLoaded}: any): JSX.Element => {
    return (
        <>
            {isLoaded ? (
                    <HotelListing hotels={hotels} />
                ): (
                    <Spinner isLoading={!isLoaded} className={''} />
            )}
        </>
    )
};

export const mapStateToProps = (state: any) => {
    return {
        hotels: state.hotels && state.hotels.data || [],
        isLoaded: state.hotels && state.hotels.meta && !!state.hotels.meta.isLoaded
    }
};

export default ReactRedux.connect(
    mapStateToProps,
    null
)(HotelListingContainer)
