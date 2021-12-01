import {StatisticDashboardState} from '../../../Infrastucture/utils/variables/InitialStateData'
import {GET_STATISTIC_DASHBOARD} from '../../../Infrastucture/utils/constants/ActionConstants';

export const StatisticDasboardReducer = (state = StatisticDashboardState, action) => {
    switch (action.type) {
        case GET_STATISTIC_DASHBOARD: {
            return {
                ...action.payload
            }
        }
        default: {
            return state;
        }
    }
}