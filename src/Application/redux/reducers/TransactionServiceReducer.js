import {
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

import {TransFee, AwardPoint} from '../../../Infrastucture/utils/variables/InitialStateData';

export const SellCollectTransFeeReducer = (state = TransFee, action) => {
    switch(action.type) {
        case GET_SELL_COLLECT_TRANS_FEE: {
            return {
                ...state
            }
        }
        case GET_SELL_COLLECT_TRANS_FEE_SUCCESS: {
            return {
                ...state,
                percent: action.payload.percent,
                histories: action.payload.histories
            }
        }
        default:{
            return state;
        }
    }
}

export const CollectDealTransFeeReducer = (state = TransFee, action) => {
    switch(action.type) {
        case GET_COLLECT_DEAL_TRANS_FEE: {
            return {
                ...state
            }
        }
        case GET_COLLECT_DEAL_TRANS_FEE_SUCCESS: {
            return {
                ...state,
                percent: action.payload.percent,
                histories: action.payload.histories
            }
        }
        default:{
            return state;
        }
    }
}

export const SellerAwardPointReducer = (state = AwardPoint, action) => {
    switch (action.type) {
        case GET_SELLER_AWARD_POINT: {
            return {
                ...state
            }
        }
        case GET_SELLER_AWARD_POINT_SUCCESS: {
            return {
                ...state,
                awardPointUsing : action.payload.awardPointUsing,
                histories : action.payload.histories
            }
        }
        default:{
            return state;
        }
    }
}

export const CollectorAwardPointReducer = (state = AwardPoint, action) => {
    switch (action.type) {
        case GET_COLLECTOR_AWARD_POINT: {
            return {
                ...state
            }
        }
        case GET_COLLECTOR_AWARD_POINT_SUCCESS: {
            return {
                ...state,
                awardPointUsing : action.payload.awardPointUsing,
                histories : action.payload.histories
            }
        }
        default:{
            return state;
        }
    }
}