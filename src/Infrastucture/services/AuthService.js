import { UserManager } from 'oidc-client';
import * as Auth from '../utils/constants/AuthConstants'

const config = {
    authority: Auth.AUTHORITY,
    client_id: Auth.CLIENT_ID,
    redirect_uri: Auth.REDIRECT_URI,
    response_type: Auth.RESPONSE_TYPE,
    scope: Auth.SCOPE,
    post_logout_redirect_uri: Auth.POST_LOGOUT_REDIRECT_URI,
};

const userManager = new UserManager(config)


export const SigninRedirect = async () => {
    return await userManager.signinRedirect().then(x => {
        console.log(x)
    }).catch(err => {
        console.log(err);
    })
}

export const SigninRedirectCallback = async () => {
    return await userManager.signinRedirectCallback();
}

export const SignoutRedirect =  () => {
    userManager.clearStaleState()
    userManager.removeUser()
    return userManager.signoutRedirect()
}

export const SignoutRedirectCallback = () => {
    userManager.clearStaleState()
    userManager.removeUser()
    return userManager.signoutRedirectCallback()
}

export default userManager;