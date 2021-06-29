import React, { useEffect } from 'react';
import RedirectLoading from '../../components/Loadings/RedirectLoading'
import { useHistory } from 'react-router-dom';
import {SigninRedirectCallback} from '../../services/AuthService';

const SigninOidc = () => {
    const history = useHistory();
    useEffect(() => {
        async function signinAsync() {
            await SigninRedirectCallback();
            history.push('/admin/dashboard')
          }
        signinAsync()
    }, [history]);

    return (
        <div>
            <RedirectLoading/>
        </div>
    );
}

export default SigninOidc;
