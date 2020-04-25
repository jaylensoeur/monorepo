import * as React from "react";
import { create } from "react-test-renderer";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import StarRating from "../StarRating";

describe("<StarRating />", () => {
    it("should render", async () => {
        const component = create(<StarRating rating={1} />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it("should see 2 1/2 stars", async () => {
        render(<StarRating rating={2.5}/>);
        const ratingSection = await screen.getByTestId('rating');
        expect(ratingSection).toHaveTextContent('●●◐○○');
    });

    [
        {rating: 1, expected: '●○○○○'},
        {rating: 2, expected: '●●○○○'},
        {rating: 3, expected: '●●●○○'},
        {rating: 4, expected: '●●●●○'},
        {rating: 5, expected: '●●●●●'},
        {rating: 6, expected: '●●●●●'},
    ].map((dataProvider) => {
        it(`should see ${dataProvider.expected} when rating is ${dataProvider.rating} stars`, async () => {
            render(<StarRating rating={dataProvider.rating}/>);
            const ratingSection = await screen.getByTestId('rating');
            expect(ratingSection).toHaveTextContent(dataProvider.expected);
        });
    });

    [
        {rating: -1, expected: '○○○○○'},
        {rating: 2.5, expected: '●●◐○○'},
        {rating: 3.5, expected: '●●●◐○'},
        {rating: 4.5, expected: '●●●●◐'},
        {rating: 5.5, expected: '●●●●●'},
    ].map((dataProvider) => {
        it(`should see ${dataProvider.expected} when rating is ${dataProvider.rating} stars`, async () => {
            render(<StarRating rating={dataProvider.rating}/>);
            const ratingSection = await screen.getByTestId('rating');
            expect(ratingSection).toHaveTextContent(dataProvider.expected);
        });
    });
});
