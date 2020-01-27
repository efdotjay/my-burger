
import React, { Fragment } from 'react';

import Backdrop from '../backdrop/Backdrop';
import classes from './Modal.module.css';

type ModalProps = {
  show: boolean;
  onClose: () => void;
};

class Modal extends React.Component<ModalProps> {
  shouldComponentUpdate(nextProps: ModalProps) {
    return nextProps.show != this.props.show;
  }

  render() {
    return (
      <Fragment>
        <Backdrop show={this.props.show} onClick={this.props.onClose}/>
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? 1 : 0
          }}
        >
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

export default Modal;
