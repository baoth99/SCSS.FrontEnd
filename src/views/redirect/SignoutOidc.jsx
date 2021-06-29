import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RedirectLoading from '../../components/Loadings/RedirectLoading';
import {SignoutRedirectCallback} from '../../services/AuthService';

const SignoutOidc = () => {
    const history = useHistory()

    useEffect(() => {
        async function signoutAsync() {
          await SignoutRedirectCallback()
          history.push('/')
        }
        signoutAsync()
      }, [history])
    return (
        <div>
            <RedirectLoading/>
        </div>
    );
}

export default SignoutOidc;
