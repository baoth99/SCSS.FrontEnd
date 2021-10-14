import React, {useEffect} from 'react';
import ScreenHeader from "../../components/Headers/ScreenHeader";
import ControlPanelFee from "../../components/TransactionService/ControlPanelFee";
import CPSellCollectAwardPoint from "../../components/TransactionService/CPSellCollectAwardPoint";
import CPCollectDealAwardPoint from "../../components/TransactionService/CPCollectDealAwardPoint";
import {GetTransactionService} from '../../../Application/redux/actions/TransactionServiceAction';
import {useDispatch} from 'react-redux';

const Transactionservice = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            GetTransactionService()
        )
    }, []);

    return (
        <>
            <ScreenHeader/>
            <ControlPanelFee/>
            <CPSellCollectAwardPoint/>
            <CPCollectDealAwardPoint/>
        </>
    );
}

export default Transactionservice;
