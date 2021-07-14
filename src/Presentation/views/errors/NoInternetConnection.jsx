import React from 'react';
import'../../../assets/css/scss-error-no-internet.css';

const NoInternetConnection = () => {
    return (
        <>
            <div className="header bg-gradient-success pb-4 pt-5 pt-0">

            </div>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>:(</h1>
                    </div>
                    <h2>Network Error</h2>
                    <p>Please check internet connection.
                        <br/>
                        Can't connect to server. Please try again !
                    </p>
                    <a href="#">home page</a>
                </div>
            </div>
        </>
    );
}

export default NoInternetConnection;
