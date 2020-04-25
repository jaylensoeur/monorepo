import * as React from "react";
import useStyles from "./pricingPanelStyles";

type Props = {
    priceDescription?: string
    currency?: string
    currencySymbol: string
    price: number
    savingApproxPrice?: number
};

const PricingPanel = ({
      priceDescription,
      currency,
      price,
      currencySymbol,
      savingApproxPrice
}: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.pricePanel}>
            <sup data-testid="price-description">{priceDescription} {currency ? `(${currency})` : ''}</sup>
            <div data-testid="currency-price">
                <sup className={classes.currencySymbol}>{currencySymbol}</sup>
                <span data-testid="price" className={classes.price}>{price}</span>
            </div>
        <div data-testid="approx-savings">
            {savingApproxPrice ? (
                <span className={classes.savings}>
                    Save ${savingApproxPrice}
                    <sub className={classes.savingsApproxSymbol}>~</sub>
                </span>
            ) : ''}
        </div>
    </div>)
};

export default PricingPanel;
