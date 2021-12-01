import Index from "../../Presentation/views/Index";
import Maps from "../../Presentation/views/examples/Maps.js";
import Tables from "../../Presentation/views/examples/Tables";
import Icons from "../../Presentation/views/examples/Icons";
import ScrapCategory from '../../Presentation/views/scrap-categorys/ScrapCategory';
import User from '../../Presentation/views/users/User';
import Transaction from '../../Presentation/views/transactions/Transaction';
import Booking from '../../Presentation/views/booking/Booking';
import ImageSlider from '../../Presentation/views/imageSlider/ImageSlider';
import Dealer from '../../Presentation/views/dealers/Dealer';
import SystemConfig from '../../Presentation/views/system-config/SystemConfig';
import TransactionService from '../../Presentation/views/transaction-service/TransactionService';
import CollectorCancelReason from '../../Presentation/views/collector-cancel-reason/CollectorCancelReason';
import Complaint from '../../Presentation/views/complaint/Complaint';
import Register from '../../Presentation/views/register/Register';


var AdminRoutes = [
    {
      path: "/dashboard",
      name: "Màn Hình Chính",
      icon: "ni ni-tv-2 text-primary",
      component: Index,
      layout: "/admin",
    },
    {
      path: "/register-user",
      name: "Đăng kí người dùng",
      icon: "ni ni-single-copy-04 text-purple",
      component: Register,
      layout: "/admin",
    },
    {
      path: "/users",
      name: "Quản lí người dùng",
      icon: "ni ni-badge text-orange",
      component: User,
      layout: "/admin",
    },
    {
      path: "/dealers",
      name: "Quản lí Vựa Ve Chai",
      icon: "ni ni-basket text-gray",
      component: Dealer,
      layout: "/admin",
    },
    {
      path: "/scrap-category",
      name: "Quản lí loại phế liệu",
      icon: "ni ni-collection text-green",
      component: ScrapCategory,
      layout: "/admin",
    },
    {
      path: "/booking",
      name: "Quản lí đặt lịch",
      icon: "ni ni-bullet-list-67 text-blue",
      component: Booking,
      layout: "/admin",
    },
    {
      path: "/transaction",
      name: "Quản lí giao dịch",
      icon: "ni ni-archive-2 text-orange",
      component: Transaction,
      layout: "/admin",
    },
    {
      path: "/complaint/seller",
      name: "Ý kiến phản hồi",
      icon: "ni ni-chat-round text-yellow",
      component: Complaint,
      layout: "/admin",
    },
    {
      path: "/image-slider",
      name: "Thiết Lập Ảnh Quảng Cáo",
      icon: "ni ni-album-2 text-green",
      component: ImageSlider,
      layout: "/admin",
    },
    {
      path: "/transaction-service",
      name: "Quản Lí Phí Dịch Vụ",
      icon: "ni ni-credit-card text-grey",
      component: TransactionService,
      layout: "/admin",
    },
    {
      path: "/system-config",
      name: "Cài Đặt Hệ Thống",
      icon: "ni ni-ui-04 text-black",
      component: SystemConfig,
      layout: "/admin",
    },
    {
      path: "/cancel-reason",
      name: "Lí Do Hủy",
      icon: "ni ni-books text-red",
      component: CollectorCancelReason,
      layout: "/admin",
    },
    {
      path: "/icons",
      name: "Icons",
      icon: "ni ni-planet text-blue",
      component: Icons,
      layout: "/admin",
    },
    {
      path: "/maps",
      name: "Maps",
      icon: "ni ni-pin-3 text-orange",
      component: Maps,
      layout: "/admin",
    },
    {
      path: "/tables",
      name: "Tables",
      icon: "ni ni-bullet-list-67 text-red",
      component: Tables,
      layout: "/admin",
    }
  ];

export default AdminRoutes;
