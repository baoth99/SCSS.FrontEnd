import React, {useState} from 'react';
import ScreenHeader from "../../components/Headers/ScreenHeader";
import {
    Card,
    CardBody,
    Nav, NavItem,
    Row,
    Container
  } from "reactstrap";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
  } from "react-router-dom";
import {ComplaintRoute} from '../../../Infrastucture/routes/SystemRoutes';

const NavItemStyle = { 
    cursor: 'pointer',
}
const NavItemActiveStyle = { 
    //backgroundColor: '#F1EEEB'
    borderTopStyle: 'solid',
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    borderColor: '#CCCAC8',
    borderWidth: '1px'
}

const Complaint = () => {
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        console.log(tab);
        if(activeTab !== tab) setActiveTab(tab);
    }
   

    return (
        <>
            <ScreenHeader/>
            <Container className="mt--7" fluid>
                <Row className="mt-5">
                    <div className="col">
                    <Router>
                        <Card className="shadow">
                            <CardBody>
                                <Nav>
                                    <NavItem style={NavItemStyle, activeTab === '1' ? NavItemActiveStyle : null} 
                                            className="rounded-top"
                                            >
                                        <NavLink 
                                            to="/admin/complaint/seller"
                                            onClick={() => { toggle('1'); }}
                                        >
                                            <h5 className="heading-small text-muted mb-2 mt-2 pl-3 pr-3">
                                                Phản Hồi Người Bán 
                                            </h5>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem style={NavItemStyle, activeTab === '2' ? NavItemActiveStyle : null}
                                            className="rounded-top"
                                            >
                                        <NavLink
                                            to="/admin/complaint/collector"
                                            onClick={() => { toggle('2'); }}
                                        >
                                            <h5 className="heading-small text-muted mb-2 mt-2  pl-3 pr-3">
                                                Phản Hồi Người Thu Gom 
                                            </h5>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem style={NavItemStyle, activeTab === '3' ? NavItemActiveStyle : null}
                                            className="rounded-top" >
                                        <NavLink
                                            to="/admin/complaint/dealer"
                                            onClick={() => { toggle('3'); }}
                                        >
                                            <h5 className="heading-small text-muted mb-2 mt-2  pl-3 pr-3">
                                                Phản Hồi Chủ Vựa
                                            </h5>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <Switch>
                                    {
                                        ComplaintRoute.map((route, i) => {
                                            return (
                                                <Route key={i} path={route.path} 
                                                    render={props => (
                                                    // pass the sub-routes down to keep nesting
                                                        <route.component {...props} routes={route.routes} />
                                                    )} />
                                            )
                                        })
                                    }
                                </Switch>
                            </CardBody>
                        </Card>
                    </Router>
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default Complaint;
