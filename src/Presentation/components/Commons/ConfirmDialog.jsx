import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

import {useDispatch, useSelector} from 'react-redux';
import {HideConfirmDialog} from '../../../Application/redux/actions/ModalAction';

const ConfirmDialog = () => {
    const confirmDialogState = useSelector(state => state.ConfirmDialog);
    const dispatch = useDispatch();
    const {showModal, title, message, action} = confirmDialogState


    const Agree = () => {
        dispatch(action);
    }

    const Cancel = () => {
        dispatch(HideConfirmDialog());
    }

    return (
        <Modal isOpen={showModal} >
            <div className="modal-header">
                <h3 className="modal-title">{title}</h3>
                <button type="button" className="close" 
                        onClick={() => Cancel()}
                        data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <ModalBody>
                 {message}
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={() => Agree()}>Đồng Ý</Button>
                <Button color="secondary" onClick={() => Cancel()}>Hủy</Button>
            </ModalFooter>
        </Modal>
    );
}

export default ConfirmDialog;
