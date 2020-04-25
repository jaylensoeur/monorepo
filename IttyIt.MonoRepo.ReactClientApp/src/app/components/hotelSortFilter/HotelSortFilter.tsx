import * as React from "react";
import { ChangeEvent } from "react";
import useStyles from "./hotelSortFilterStyle";


type Props = {
    totalFound: number
    className: string
    onFilterChange: (e: ChangeEvent<HTMLElement>) => void
};

const HotelSortFilter = ({totalFound, className,onFilterChange}: Props): JSX.Element => {
    const classes = useStyles();

    return (
        <div className={className}>
            <div>
                <b>{totalFound}</b><i> hotels in</i><b> Sydney.</b>
            </div>
            <div>
                <span className={classes.sortTitle}>Sort by</span>
                <select onChange={onFilterChange}>
                    <option value="DESC">Price high-low</option>
                    <option value="ASC">Price low-high</option>
                </select>
            </div>
        </div>
    );
};

export default HotelSortFilter;
