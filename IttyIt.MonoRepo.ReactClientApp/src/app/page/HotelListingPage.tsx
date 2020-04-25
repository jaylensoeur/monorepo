/// <reference path='../../../@type/import-png.d.ts'/>

import * as React from 'react';
import {ChangeEvent} from "react";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import HotelListingContainer from "../components/hotelListing/HotelListingContainer";

import * as logo from '../assets/qantas-logo.png';
import HotelSortFilter from "../components/hotelSortFilter/HotelSortFilter";
import useStyles from "./hotelListingPageStyle";
import * as ReactRedux from "react-redux";
import Weather from "./Weather";

type Props = {
    onFilterChange: (e: ChangeEvent<HTMLElement>) => void,
    counter? : number,
}

const HotelListingPage = ({onFilterChange, counter = 0}: Props): JSX.Element => {
    const classes = useStyles();

    return(
        <Container fixed>
            <div className={classes.logoPanel}>
                <img className={classes.logo} src={logo.default}  alt="logo"/>
                <Weather />
            </div>
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <HotelSortFilter className={classes.sortFilterPanel} totalFound={counter} onFilterChange={onFilterChange}/>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                    <HotelListingContainer />
            </Grid>
        </Container>
    );
};

const mapStateToProps = (state: any) => {
    return {
        counter: state.hotels && state.hotels.data && state.hotels.data.length || 0,
    }
};

export default ReactRedux.connect(
    mapStateToProps,
    null
)(HotelListingPage)
