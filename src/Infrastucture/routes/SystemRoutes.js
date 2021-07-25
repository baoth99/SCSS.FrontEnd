import { Route } from "react-router-dom";
import UserDetail from '../../Presentation/views/users/UserDetail';
import ScrapCategoryDetail from '../../Presentation/views/scrap-categorys/ScrapCategoryDetail'
import DCTransactionDetail from '../../Presentation/views/transactions/DCTransactionDetail';
import CSTransactionDetail from '../../Presentation/views/transactions/CSTransactionDetail';
import BookingDetail from '../../Presentation/views/booking/BookingDetail';



export const GetBookingRoutes = () => {
  let baseUrl = "/admin/booking/:id"
  return (
    <Route
      path={baseUrl}
      component={BookingDetail}
    />
  );
};

export const GetUserRoutes = () => {
      let baseUrl = "/admin/users/:id"
      return (
        <Route
          path={baseUrl}
          component={UserDetail}
        />
      );
};

export const GetDCTransactionRoutes = () => {
      let baseUrl = "/admin/transaction/DC/:id"
      return (
        <Route
          path={baseUrl}
          component={DCTransactionDetail}
        />
      );
};

export const GetCSTransactionRoutes = () => {
  let baseUrl = "/admin/transaction/CS/:id"
  return (
    <Route
      path={baseUrl}
      component={CSTransactionDetail}
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
