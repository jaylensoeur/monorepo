import * as React from "react";
import {ChangeEvent} from "react";
import * as ReactRedux from "react-redux";
import {mapDispatchToProps} from '../store/hotel/action';

import HotelListingPage from "./HotelListingPage";
import Weather from "./Weather";

const HotelListPageContainer = ({sortByPriceAsc,sortByPriceDesc, hotels}: any) => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    React.useEffect(() => {
        sortByPriceDesc();
        setIsLoaded(true);
    }, [isLoaded]);

    const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        if (e.target.value === 'ASC') {
            sortByPriceAsc();
        } else {
            sortByPriceDesc();
        }
    };

    return (
        <HotelListingPage
            onFilterChange={handleFilterChange}
        />
    )
};

export const mapStateToProps = (state: any) => {
    return {
        hotels: state.hotels.data,
    }
};

export default ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps
)(HotelListPageContainer)

