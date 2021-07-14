
//window.location.origin


var Origin = window.location.origin;
var url = "http://localhost:4200/";

export const AUTHORITY = "https://ec2-13-251-179-160.ap-southeast-1.compute.amazonaws.com/";
//export const AUTHORITY = "https://localhost:44344/";
export const CLIENT_ID = "SCSS-WebAdmin-FrontEnd";
export const REDIRECT_URI =  Origin + "/signin-oidc";
export const RESPONSE_TYPE = "id_token token";
export const SCOPE = "SCSS.WebAdmin.Scope profile openid offline_access role phone id_card email";
export const POST_LOGOUT_REDIRECT_URI = Origin + "/signout-oidc"


export const SCSS_STORAGE = "oidc.user:" + AUTHORITY + ":SCSS-WebAdmin-FrontEnd";

// export const AUTHORITY = "link";
// export const CLIENT_ID = "SCSS-WebAdmin-FrontEnd";
// export const REDIRECT_URI = "link";
// export const RESPONSE_TYPE = "id_token token";
// export const SCOPE = "SCSS.WebAdmin.Scope profile openid offline_access role phone id_card";
// export const POST_LOGOUT_REDIRECT_URI = "link"