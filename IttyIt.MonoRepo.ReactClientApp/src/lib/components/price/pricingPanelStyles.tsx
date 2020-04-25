import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        pricePanel: {
            marginTop: '1em',
            [theme.breakpoints.up('md')]: {
                textAlign: 'right',
                marginTop: '4em',
            },
        },
        hotelTitlePanel: {
            lineHeight: "1.1"
        },
        currencySymbol: {
            position: "relative",
            top: "-0.5em"
        },
        savingsApproxSymbol: {
            position: "relative",
            top: "-0.6em"
        },
        savings: {
            color: "#bb3c50"
        },
        address: {
            color: "rgba(0,0,0,0.58)",
            margin: '0',
            fontSize: '0.9em'
        },
        price: {
            fontSize: '2em'
        },
        offerName: {
            margin: '3em 0'
        }
    }),
);

export default useStyles;
