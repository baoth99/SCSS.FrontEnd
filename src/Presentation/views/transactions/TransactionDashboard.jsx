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
import {useDispatch} from 'react-redux'
import DCTransactionTab from './DCTransactionTab';
import CSTransactionTab from './CSTransactionTab';
import {SearchDCTransaction, SearchCSTransaction} from '../../../Application/redux/actions/TransactionAction';
import {initialDCTransactionSearchFormState,
        initialCSTransactionSearchFormState} from '../../../Infrastucture/utils/variables/InitialStateData';

const TransactionDashboard = () => {

    const dispatch = useDispatch();    
    const [activeTab, setActiveTab] = useState('1');
    useEffect(() => {
        dispatch(
            SearchDCTransaction({...initialDCTransactionSearchFormState}),
            SearchCSTransaction({...initialCSTransactionSearchFormState})
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
                                         Người Thu Mua - Chủ Vựa
                                         </h5>
                                    </NavLink>
                                </NavItem>
                                <NavItem style={{cursor: 'pointer'}}>
                                    <NavLink
                                        className={classnames({ active: activeTab === '2' })}
                                        onClick={() => { toggle('2'); }}
                                    >
                                       <h5 className="heading-small text-muted mb-3 mt-3">
                                            Người Thu Mua - Người Bán
                                       </h5>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                    <DCTransactionTab/>
                                </TabPane>
                                <TabPane tabId="2">
                                    <CSTransactionTab/>
                                </TabPane>
                            </TabContent>
                        </CardBody>
                    </Card>
                </div>
            </Row>
        </Container>
    );
}

export default TransactionDashboard;
