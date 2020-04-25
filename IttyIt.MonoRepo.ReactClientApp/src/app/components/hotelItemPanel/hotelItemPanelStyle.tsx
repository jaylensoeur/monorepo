import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        hotelItemPanel: {
            paddingLeft: '1em',
            [theme.breakpoints.up('md')]: {
                paddingLeft: '0',
            },
        },
        spinner: {
            margin: '2em',
        }
    }),
);

export default useStyles;

