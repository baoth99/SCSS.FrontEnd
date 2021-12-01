import React, {useState} from 'react';
import ScreenHeader from "../../components/Headers/ScreenHeader";
import {
    Card,
    CardBody,
    Row,
    Nav, NavItem, NavLink,
    TabContent, TabPane,
    Container
  } from "reactstrap";
import classnames from 'classnames';
import CollectorRegisterForm from '../../components/Register/CollectorRegisterForm';
import CollectorRegisterDashboard from '../../components/Register/CollectorRegisterDashboard';
import DealerRegisterForm from '../../components/Register/DealerRegisterForm';

const Register = () => {
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }
    return (
        <>
            <ScreenHeader />
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
                                                Đăng Ký Người Thu Mua
                                            </h5>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem style={{cursor: 'pointer'}}>
                                        <NavLink
                                            className={classnames({ active: activeTab === '2' })}
                                            onClick={() => { toggle('2'); }}
                                        >
                                        <h5 className="heading-small text-muted mb-3 mt-3">
                                                Đăng Ký Vựa
                                        </h5>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1">
                                        <CollectorRegisterDashboard/>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <DealerRegisterForm/>
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default Register;
