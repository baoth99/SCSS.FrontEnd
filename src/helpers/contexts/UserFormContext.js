import {createContext} from 'react';

const UserContext = createContext();

export const UserProvider = UserContext.Provider;
export const UserCustomer = UserContext.Consumer;

export default UserContext;