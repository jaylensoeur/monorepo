import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        hotelTitlePanel: {
            lineHeight: "1.1"
        },
        hotelName: {
            whiteSpace: "nowrap",
            maxWidth: "35vw",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontSize: "1.5em",
            marginTop: "0.2em",
            display: "inline-block"
        },
        currencySymbol: {
            position: "relative",
            top: "-0.5em"
        },
        address: {
            color: "rgba(0,0,0,0.58)",
            margin: '0',
            fontSize: '0.9em'
        },
        offerName: {
            margin: '1em 0',
            [theme.breakpoints.up('md')]: {
                margin: '3em 0',
            },
        },
        cancellation: {
            color: 'green'
        },
        offerNameLink: {
            color: 'red'
        }
    }),
);

export default useStyles;
