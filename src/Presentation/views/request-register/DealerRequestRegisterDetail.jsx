import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import DealerAccountRequestRegisterInfo from '../../components/Request-Register/Dealers/DealerAccountRequestRegisterInfo';
import DealerRequestRegisterInfo from '../../components/Request-Register/Dealers/DealerRequestRegisterInfo';
import {useDispatch, useSelector} from 'react-redux';
import {GetDealerRequestRegister} from '../../../Application/redux/actions/RequestRegisterAction';

const DealerRequestRegisterDetail = () => {
    let { id } = useParams();
    const dispatch = useDispatch();

    let dataDealer = useSelector(state => state.DataDealerRegisterRequest);


    useEffect(() => {
        dispatch(GetDealerRequestRegister(id));
    }, []);


    return (
        <>
            <DealerAccountRequestRegisterInfo accountPhone={dataDealer.accountPhone} accountName={dataDealer.accountName} 
                                              accountAddress={dataDealer.accountAddress} accountStatus={dataDealer.accountStatus}
                                              birthDate={dataDealer.birthDate} idCard={dataDealer.idCard} gender={dataDealer.gender}/>
            <DealerRequestRegisterInfo id={dataDealer.id} accountName={dataDealer.accountName} accountPhone={dataDealer.accountPhone} dealerName={dataDealer.dealerName} dealerPhone={dataDealer.dealerPhone} dealerAddress={dataDealer.dealerAddress}
                                        dealerImageUrl={dataDealer.dealerImageUrl} dealerLatitude={dataDealer.dealerLatitude} dealerLongitude={dataDealer.dealerLongitude}
                                        dealerType={dataDealer.dealerType} dealerLeaderName={dataDealer.dealerLeaderName} 
                                        dealerLeaderId={dataDealer.dealerLeaderId} managerLeaderId={dataDealer.managerLeaderId} managerName={dataDealer.managerName} managerPhone={dataDealer.managerPhone}/>
        </>
    );
}

export default DealerRequestRegisterDetail;
