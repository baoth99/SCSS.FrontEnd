import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

import CompletedRequest from './Cards/CompletedRequest';
import CancelRequestByUser from './Cards/CancelRequestByUser';
import CancelRequestBySystem from './Cards/CancelRequestBySystem';
import CollectDealTransaction from './Cards/CollectDealTransaction';


import { useSelector } from 'react-redux';

const Header = () => {

  const data = useSelector(state => state.StatisticDasboard);

  return (
    <>
      <div className="header bg-gradient-success pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>           
              <CompletedRequest amount={data.amountCompletedRequest}/>
              <CancelRequestByUser amount={data.amountCancelRequestByUser}/>
              <CancelRequestBySystem amount={data.amountCancelRequestBySystem}/>
              <CollectDealTransaction amount={data.amountCollectDealTransaction}/>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
