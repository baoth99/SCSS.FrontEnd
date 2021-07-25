export const Notification = (message, status) => {
    return {
        message: message,
        options: {
            variant: status,
        }
    }
}

export const PENDING_BOOKING_MESSAGE = "Đang Chờ";
export const CANCELBYSELLER_BOOKING_MESSAGE = "Người Bán Hủy";
export const NOBODY_APPROVE_BOOKING_MESSAGE = "Không Ai Chấp Nhận";
export const APPROVED_BOOKING_MESSAGE = "Đã Được Nhận";
export const COMPLETED_BOOKING_MESSAGE = "Đã Hoàn Thành";



export const NOT_APPROVE = "Đợi Chấp Thuận";
export const ACTIVE = "Đang Hoạt Động";
export const BANNING = "Đang Bị Khóa";

export const SELLER = "Người Bán";
export const DEALER = "Chủ Vựa";
export const COLLECTOR = "Người Thu Gom";

export const BLOCK_BUTTON = "Khóa Tài Khoản";
export const APPROVE_BUTTON = "Chấp Thuận";
export const UNBLOCK_BUTTON = "Mở Khóa";

export const CREATE_SC_SUCCESS_MESSAGE = (name) => `Tạo mới loại phế liệu ${name} thành công`;

export const SYSTEM_EXCEPTION = "Lỗi Hệ Thống";