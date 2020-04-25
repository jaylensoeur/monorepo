import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles({
        sortFilterPanel: {
            display: "flex",
            justifyContent: 'space-between',
            paddingBottom: "1em"
        },
        hotelListingSpinner: {
        },
        gridContainer: {
            paddingBottom: "1em"
        },
        logo: {
            width: "200px"
        },
        logoPanel: {
            padding: "4em 0 1em 0"
        }
    })
);

export default useStyles;
