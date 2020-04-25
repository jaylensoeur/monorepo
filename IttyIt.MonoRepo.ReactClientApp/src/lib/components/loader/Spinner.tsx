import CircularProgress from "@material-ui/core/CircularProgress";
import * as React from "react";

type Props = {
    isLoading: boolean
    className?: string
}

const Spinner = ({isLoading, className}: Props): JSX.Element => {

    if (isLoading) {
        return (
            <div data-testid="spinner" className={className}>
                <CircularProgress color='secondary'/>
            </div>
        )
    }

    return null;
};

export default Spinner;
