import {GET_TRANSACTION_SERVICE,
        //
        GET_SELL_COLLECT_TRANS_FEE,
        GET_SELL_COLLECT_TRANS_FEE_SUCCESS,
        MODIFY_SELL_COLLECT_TRANS_FEE,
        //
        GET_COLLECT_DEAL_TRANS_FEE,
        GET_COLLECT_DEAL_TRANS_FEE_SUCCESS,
        MODIFY_COLLECT_DEAL_TRANS_FEE,
        //
        GET_SELLER_AWARD_POINT,
        GET_SELLER_AWARD_POINT_SUCCESS,
        MODIFY_SELLER_AWARD_POINT,
        //
        GET_COLLECTOR_AWARD_POINT,
        GET_COLLECTOR_AWARD_POINT_SUCCESS,
        MODIFY_COLLECTOR_AWARD_POINT} from '../../../Infrastucture/utils/constants/ActionConstants';
import {TransactionType} from '../../../Infrastucture/utils/constants/CommonConstants'

export const GetTransactionService = () => {
    return {
        type: GET_TRANSACTION_SERVICE
    }
}

export const GetSellCollectTransFee = () => {
    return {
        type: GET_SELL_COLLECT_TRANS_FEE
    }
}

export const GetSellColectTransFeeSuccess = (percent, histories) => {
    return {
        type: GET_SELL_COLLECT_TRANS_FEE_SUCCESS,
        payload: {
            percent: percent,
            histories: histories
        }
    }
}

export const ModifySellCollectTransFee = (percent) => {
    return {
        type: MODIFY_SELL_COLLECT_TRANS_FEE,
        payload: {
            percent : percent,
            transactionType: TransactionType.SELL_COLLECT
        }
    }
}

export const GetCollectDealTransFee = () => {
    return {
        type: GET_COLLECT_DEAL_TRANS_FEE
    }
}

export const GetCollectDealTransFeeSuccess = (percent, histories) => {
    return {
        type: GET_COLLECT_DEAL_TRANS_FEE_SUCCESS,
        payload: {
            percent: percent,
            histories: histories
        }
    }
}

export const ModifyCollectDealTransFee = (percent) => {
    return {
        type: MODIFY_COLLECT_DEAL_TRANS_FEE,
        payload: {
            percent: percent,
            transactionType: TransactionType.COLLECT_DEAL
        }
    }
}

export const GetSellerAwardPoint = () => {
    return {
        type: GET_SELLER_AWARD_POINT
    }
}

export const GetSellerAwardPointSuccess = (awardPointUsing, histories) => {
    return {
        type: GET_SELLER_AWARD_POINT_SUCCESS,
        payload: {
            awardPointUsing: awardPointUsing,
            histories: histories
        }
    }
}

export const ModifySellerAwardPoint = ({appliedAmount, amount}) => {
    return {
        type: MODIFY_SELLER_AWARD_POINT,
        payload: {
            appliedAmount: appliedAmount,
            amount: amount,
            transactionType: TransactionType.SELL_COLLECT
        }
    }
}

export const GetCollectorAwardPoint = () => {
    return {
        type: GET_COLLECTOR_AWARD_POINT
    }
}

export const GetCollectorAwardPointSuccess = (awardPointUsing, histories) => {
    return {
        type: GET_COLLECTOR_AWARD_POINT_SUCCESS,
        payload: {
            awardPointUsing: awardPointUsing,
            histories: histories
        }
    }
}

export const ModifyCollectorAwardPoint = ({appliedAmount, amount}) => {
    return {
        type: MODIFY_COLLECTOR_AWARD_POINT,
        payload : {
            appliedAmount: appliedAmount,
            amount: amount,
            transactionType: TransactionType.COLLECT_DEAL
        }
    }
}