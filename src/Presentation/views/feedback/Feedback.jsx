import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {SearchDCFeedback,SearchCSFeedback} from '../../../Application/redux/actions/FeedbackAction';
import {initialDCFeedbackSearchFormState, initialCSFeedbackSearchFormState} from '../../../Infrastucture/utils/variables/InitialStateData';
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
import DCFeedbackTab from './DCFeedbackTab';
import CSFeedbackTab from './CSFeedbackTab';

const Feedback = () => {
    const dispatch = useDispatch();    
    const [activeTab, setActiveTab] = useState('1');
    
    useEffect(() => {
        dispatch(
            SearchDCFeedback({...initialDCFeedbackSearchFormState}),
            SearchCSFeedback({...initialCSFeedbackSearchFormState})
        )
    }, []);

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }


    return (
        <>
            <ScreenHeader/>
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
                                                Giao Dịch Giữa Người Thu Mua - Chủ Vựa
                                            </h5>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem style={{cursor: 'pointer'}}>
                                        <NavLink
                                            className={classnames({ active: activeTab === '2' })}
                                            onClick={() => { toggle('2'); }}
                                        >
                                        <h5 className="heading-small text-muted mb-3 mt-3">
                                            Giao Dịch Giữa Người Thu Mua - Người Bán
                                        </h5>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1">
                                        <DCFeedbackTab/>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <CSFeedbackTab/>
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

export default Feedback;
