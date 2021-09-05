import React, { useState, useEffect } from 'react';
import {
    Card,
    CardBody,
    Row,
    Nav, NavItem, NavLink,
    TabContent, TabPane,
    Container
  } from "reactstrap";
import classnames from 'classnames';
import CollectorRequestRegisterTab from './CollectorRequestRegisterTab';
import DealerRequestRegisterTab from './DealerRequestRegisterTab';
import {FetchAllRequestRegister} from '../../../Application/redux/actions/RequestRegisterAction';

import {useDispatch} from 'react-redux';

const RequestRegisterDashboard = () => {
    const [activeTab, setActiveTab] = useState('1');
    const dispatch = useDispatch();    


    useEffect(() => {
        dispatch(
            FetchAllRequestRegister()
        )    
    }, []);


    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }
    return (
        <Container className="mt--7" fluid>
             <Row className="mt-5">
                <div className="col">
                    <Card className="shadow">
                        <CardBody>
                            <Nav tabs>
                                <NavItem style={{cursor: 'pointer'}}>
                                    <NavLink
                                        className={classnames({ active: activeTab === '1' })}
                                        onClick={() => { toggle('1'); }}
                                    >
                                         <h5 className="heading-small text-muted mb-3 mt-3">
                                            Người Thu Mua
                                         </h5>
                                    </NavLink>
                                </NavItem>
                                <NavItem style={{cursor: 'pointer'}}>
                                    <NavLink
                                        className={classnames({ active: activeTab === '2' })}
                                        onClick={() => { toggle('2'); }}
                                    >
                                       <h5 className="heading-small text-muted mb-3 mt-3">
                                            Chủ Vựa
                                       </h5>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                    <CollectorRequestRegisterTab/>
                                </TabPane>
                                <TabPane tabId="2">
                                    <DealerRequestRegisterTab/>
                                </TabPane>
                            </TabContent>
                        </CardBody>
                    </Card>
                </div>
             </Row>
        </Container>
    );
}

export default RequestRegisterDashboard;
