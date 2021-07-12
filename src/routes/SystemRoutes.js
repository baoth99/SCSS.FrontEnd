import BaseUrl from "enviroment";
import { Route } from "react-router-dom";
import UserDetail from '../views/users/UserDetail';
import ScrapCategoryDetail from '../views/scrap-categorys/ScrapCategoryDetail'
import TransactionDetail from '../views/transactions/TransactionDetail';


export const GetUserRoutes = () => {
      let baseUrl = "/admin/users/:id"
      return (
        <Route
          path={baseUrl}
          component={UserDetail}
        />
      );
};

export const GetTransactionRoutes = () => {
      let baseUrl = "/admin/transaction/:id"
      return (
        <Route
          path={baseUrl}
          component={TransactionDetail}
        />
      );
};


export const GetSCRoutes = () => {
  let baseUrl = "/admin/scrap-category/:id"
  return (
      <Route
        path={baseUrl}
        component={ScrapCategoryDetail}
        />
  );
};
