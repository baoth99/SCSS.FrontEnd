export const PAGING = 7;


export const NOT_APPROVE_NUM = 1;
export const ACTIVE_NUM = 2;
export const BANNING_NUM = 3;

export const SELLER_NUM = 2;
export const DEALER_NUM = 3;
export const COLLECTOR_NUM = 4;

export const NOT_APPROVE_STYLE = "bg-info";
export const ACTIVE_STYLE = "bg-success";
export const BANNING_STYLE = "bg-danger";

export const BLOCK_ACCOUNT_STYLE = "btn btn-danger";
export const UNBLOCK_ACCOUNT_STYLE = "btn btn-success";
export const APPROVE_ACCOUNT_STYLE = "btn btn-info";

export const MALE = "Nam";
export const FEMALE = "Nữ";

export const MALE_NUM = 1;
export const FEMALE_NUM = 2;

export const DC_TRANSACTION_COLUMN = [
    'Số Thứ Tự',
    'Mã Giao Dịch',
    'Tên Chủ Vựa',
    'Số ĐT Chủ Vựa',
    'Tên Người Thu Gom',
    'Số ĐT Người Thu Gom',
    'Thời Điểm Giao Dịch',
    'Tổng Số Lượng',
    'Tổng Giá'
]

export const CS_TRANSACTION_COLUMN = [
    'Số Thứ Tự',
    'Mã Giao Dịch',
    'Tên Người Bán',
    'Số ĐT Người Bán',
    'Tên Người Thu Gom',
    'Số ĐT Người Thu Gom',
    'Thời Điểm Giao Dịch',
    'Tổng Đơn Giá',
]

export const GENDER = [
    {
        key: MALE_NUM,
        val: MALE
    },
    {
        key: FEMALE_NUM,
        val :FEMALE
    }
]

export const STATUS = [
    {
        key: NOT_APPROVE_NUM,
        val: "Đợi Chấp Thuận"
    },
    {
        key: ACTIVE_NUM,
        val :"Đang Hoạt Động"
    },
    {
        key: BANNING_NUM,
        val :"Đang Bị Khóa"
    }
]

export const ROLE = [
    {
        key: SELLER_NUM,
        val: "Người Bán"
    },
    {
        key: DEALER_NUM,
        val :"Chủ Vựa"
    },
    {
        key: COLLECTOR_NUM,
        val :"Người Thu Gom"
    }
]

