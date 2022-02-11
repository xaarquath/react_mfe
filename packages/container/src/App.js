import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';

export default () => {
    return (
        <BrowserRouter>
            <div>
                <h1>Hi there!!!!!</h1>
                <hr />
                <MarketingApp />
            </div>
        </BrowserRouter>
    );
};