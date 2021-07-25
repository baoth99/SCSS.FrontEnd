import React from 'react';
import { Input, FormGroup } from "reactstrap";
import {CANCELBYSELLER_BOOKING, COMPLETED_BOOKING, APPROVED_BOOKING} from '../../../Infrastucture/utils/constants/CommonConstants'
const BookingStatusDetail = ({status, content}) => {

    switch (status) {
        case CANCELBYSELLER_BOOKING: {
            return (
                <FormGroup>
                    <label
                        className="form-control-label"
                        htmlFor="input-username"
                    >
                        Lí Do Hủy : 
                    </label>
                    <Input
                        className="form-control-alternative"
                        disabled={true}
                        style={{height: '100px'}}
                        value={content.message}
                        type="textarea"
                    />
                </FormGroup>
            );
        }
        case COMPLETED_BOOKING: {
            return (
                <FormGroup>
                    <label
                        className="form-control-label"
                        htmlFor="input-username"
                    >
                        Giao Dịch : 
                    </label>
                    <h4>{content.message}</h4>
                </FormGroup>
            );
        }
        case APPROVED_BOOKING: {
            return (
                <FormGroup>
                    <label
                        className="form-control-label"
                        htmlFor="input-username"
                    >
                        Thông tin : 
                    </label>
                    <h4>{content.message}</h4>
                </FormGroup>
            );
        }
        default:
           return null;
    }

    
}

export default BookingStatusDetail;
