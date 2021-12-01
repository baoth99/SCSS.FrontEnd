import { Route  } from "react-router-dom";
import UserDetail from '../../Presentation/views/users/UserDetail';
import ScrapCategoryDetail from '../../Presentation/views/scrap-categorys/ScrapCategoryDetail'
import DCTransactionDetail from '../../Presentation/views/transactions/DCTransactionDetail';
import CSTransactionDetail from '../../Presentation/views/transactions/CSTransactionDetail';
import BookingDetail from '../../Presentation/views/booking/BookingDetail';
import CollectorRequestRegisterDetail from '../../Presentation/views/request-register/CollectorRequestRegisterDetail';
import DealerRequestRegisterDetail from '../../Presentation/views/request-register/DealerRequestRegisterDetail';
import DealerDetail from '../../Presentation/views/dealers/DealerDetail';

import CollectorComplaintTab from '../../Presentation/views/complaint/CollectorComplaintTab';
import SellerComplaintTab from '../../Presentation/views/complaint/SellerComplaintTab';
import DealerComplaintTab from '../../Presentation/views/complaint/DealerComplaintTab';

export const ComplaintRoute = [
    {
      path: "/admin/complaint/seller",
      component: SellerComplaintTab
    },
    {
      path: "/admin/complaint/collector",
      component: CollectorComplaintTab
    },
    {
      path: "/admin/complaint/dealer",
      component: DealerComplaintTab
    }
]


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


export const GetCollectorRequestRegisterRoutes = () => {
  let baseUrl = "/admin/request-register/collector/:id"
  return (
    <Route
      path={baseUrl}
      component={CollectorRequestRegisterDetail}
    />
  );
};

export const GetDealerRequestRegisterRoutes = () => {
  let baseUrl = "/admin/request-register/dealer/:id"
  return (
    <Route
      path={baseUrl}
      component={DealerRequestRegisterDetail}
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

export const GetDealerInfoRoutes = () => {
  let baseUrl = "/admin/dealers/:id"
  return (
      <Route
        path={baseUrl}
        component={DealerDetail}
        />
  );
};
