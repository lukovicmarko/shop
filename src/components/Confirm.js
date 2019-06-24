import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Confirm = (props) => {
    return (
        <Modal
            isOpen={props.modalIsOpen}
            contentLabel="Create Product"
            closeTimeoutMS={200}
            className="Modal"
        >
            <div className="text-center">
                <h3>{props.title}</h3>
                <p>{props.question}</p>
                <button
                    onClick={(e) => {
                        if (true) {
                            props.removeFromCart(props.product);
                            props.closeModal();
                        }
                    }}>Ok</button>
                <button onClick={props.closeModal}>Cancel</button>
            </div>
        </Modal>
    )
}

export default Confirm