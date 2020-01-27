
import React, { Fragment } from 'react';

import Backdrop from '../backdrop/Backdrop';
import classes from './Modal.module.css';

type ModalProps = {
  show: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = props => (
  <Fragment>
    <Backdrop show={props.show} onClick={props.onClose}/>
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? 1 : 0
      }}
    >
      {props.children}
    </div>
  </Fragment>
);

export default Modal;
