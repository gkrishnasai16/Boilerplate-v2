import React from 'react';
import {startGoogleLogin,startYahooLogin} from '../actions/auth';


export default (props) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className=".box-layout__title">Boilerplate v2</h1>
            <p>Tag line</p>
                <div className="buttons">
                        <button 
                        className ="button button-gmailButton"
                        //onClick = {() => props.dispatch(startGoogleLogin())}
                        onClick = {startGoogleLogin()}
                    >Login with Gmail</button>
                    <button 
                        className ="button"
                        //onClick = {() => props.dispatch(startYahooLogin())}
                        onClick = {startYahooLogin()}
                    >Login with Yahoo</button>
                </div>
        </div>
    </div>
);

//export default connect()(LoginPage);