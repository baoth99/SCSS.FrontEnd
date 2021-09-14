import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import DealerAccountInformation from '../../components/Dealers/DealerAccountInformation';
import DealerInformationDetail from '../../components/Dealers/DealerInformationDetail';
import {useSelector, useDispatch} from 'react-redux';
import {GetDealerDetail} from '../../../Application/redux/actions/DealerAction';

const DealerDetail = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    let dataDealer = useSelector(state => state.DataDealer);
    useEffect(() => {
        dispatch(GetDealerDetail(id));
    }, [])

    return (
        <>
            <DealerAccountInformation accountId={dataDealer.accountId} accountName={dataDealer.accountName} 
                                        accountPhone={dataDealer.accountPhone} accountRole={dataDealer.accountRole}/>
            <DealerInformationDetail dealerId={dataDealer.dealerId} dealerName={dataDealer.dealerName} dealerPhone={dataDealer.dealerPhone}
                                    dealerAddress={dataDealer.dealerAddress} dealerLatitude={dataDealer.dealerLatitude} dealerLongtitude={dataDealer.dealerLongtitude}
                                    dealerOpenTime={dataDealer.dealerOpenTime} dealerCloseTime={dataDealer.dealerCloseTime} dealerCreatedTime={dataDealer.dealerCreatedTime}
                                    dealerImageUrl={dataDealer.dealerImageUrl} dealerIsActive={dataDealer.dealerIsActive} dealerIsSubcribed={dataDealer.dealerIsSubcribed}
                                    dealerType={dataDealer.dealerType} accountLeaderId={dataDealer.accountLeaderId} dealerLeaderId={dataDealer.dealerLeaderId}/>
        </>
    );
}

export default DealerDetail;
