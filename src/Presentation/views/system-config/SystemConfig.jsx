import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {GetSysConfigInfo} from '../../../Application/redux/actions/SysConfigAction';
//core components
import ScreenHeader from "../../components/Headers/ScreenHeader";
import ControlPanel from '../../components/SystemConfigs/ControlPanel';
import ConfigHistory from '../../components/SystemConfigs/ConfigHistory';


const Systemconfig = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            GetSysConfigInfo()
        )
    }, []);
    
    return (
        <>
            <ScreenHeader/>
            <ControlPanel/>
            <ConfigHistory/>
        </>
    );
}

export default Systemconfig;
