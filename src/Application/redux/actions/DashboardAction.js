import {GET_STATISTIC_DASHBOARD, FEATCH_STATISTIC_DASHBOARD} from '../../../Infrastucture/utils/constants/ActionConstants';

export const FeatchStatisticDashboard = () => {
    return {
        type: FEATCH_STATISTIC_DASHBOARD
    }
}

export const GetStatisticDashboard = ({amountCompletedRequest, amountCancelRequestByUser, amountCancelRequestBySystem, amountCollectDealTransaction}) => {
    return {
        type: GET_STATISTIC_DASHBOARD,
        payload: {
            amountCollectDealTransaction: amountCollectDealTransaction,
            amountCompletedRequest: amountCompletedRequest,
            amountCancelRequestByUser: amountCancelRequestByUser,
            amountCancelRequestBySystem: amountCancelRequestBySystem
        }
    }
}