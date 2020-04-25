/// <reference path='../../../@type/import-png.d.ts'/>

import * as React from 'react';
import {ChangeEvent} from "react";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import * as logo from '../assets/qantas-logo.png';
import HotelSortFilter from "../components/hotelSortFilter/HotelSortFilter";
import useStyles from "./hotelListingPageStyle";
import * as ReactRedux from "react-redux";
import {mapDispatchToProps} from '../store/weather/action';


const Weather = ({getWeather, summary}: any): JSX.Element => {
    const classes = useStyles();
    const [isLoaded, setIsLoaded] = React.useState(false);
    React.useEffect(() => {
        getWeather();
        setIsLoaded(true);
    }, [isLoaded]);

    return(
        <Container fixed>
            <Grid container spacing={2}>
                <h1>{summary}</h1>
            </Grid>
        </Container>
    );
};

const mapStateToProps = (state: any) => {
    return {
        summary: state.weather.data[0].summary,
    }
};

export default ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps
)(Weather)
