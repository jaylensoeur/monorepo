import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Provider } from 'react-redux';
import store from './store/store';
import './theme/style.scss';

import HotelListingPageContainer from './page/HotelListingPageContainer';

ReactDom.render(
    <Provider store={store}>
        <HotelListingPageContainer />
    </Provider>,
    document.getElementById('example'),
);
