import * as React from "react";
import { create } from "react-test-renderer";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import PricingPanel from "./PricingPanel";

describe("<PricingPanel />", () => {
    it("should render", async () => {
        const price = 250;
        const currencySymbol = "$";
        const component = create(<PricingPanel price={price} currencySymbol={currencySymbol} />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it("should see a currency price", async () => {
        const price = 250;
        const currencySymbol = "$";
        render(<PricingPanel price={price} currencySymbol={currencySymbol} />);
        const priceSection = await screen.findByTestId('price');
        const currencyPriceSection = await screen.findByTestId('currency-price');
        const approxSavingsSection = await screen.findByTestId('approx-savings');

        expect(priceSection).toHaveTextContent(price.toString());
        expect(approxSavingsSection).toHaveTextContent('');
        expect(currencyPriceSection).toHaveTextContent(/\$250/i)

    });

    it("should see a approx savings", async () => {
        const price = 250;
        const approxSaving = 25;
        const currencySymbol = "$";
        render(<PricingPanel price={price} savingApproxPrice={approxSaving} currencySymbol={currencySymbol} />);
        const approxSavingsSection = await screen.findByTestId('approx-savings');

        expect(approxSavingsSection).toHaveTextContent(/Save \$25~/i);
    });

    it("should see a price description", async () => {
        const price = 250;
        const priceDescription = "1 night only";
        const currencySymbol = "$";
        render(<PricingPanel price={price} priceDescription={priceDescription} currencySymbol={currencySymbol} />);
        const priceDescriptionSection = await screen.findByTestId('price-description');

        expect(priceDescriptionSection).toHaveTextContent(`${priceDescription}`);
    });

    it("should see the currency used", async () => {
        const price = 250;
        const priceDescription = "1 night only";
        const currency = "USD";
        render(<PricingPanel price={price} priceDescription={priceDescription} currency={currency} currencySymbol="$" />);
        const priceDescriptionSection = await screen.findByTestId('price-description');

        expect(priceDescriptionSection).toHaveTextContent(/1 night only \(USD\)$/i);
    });
});
