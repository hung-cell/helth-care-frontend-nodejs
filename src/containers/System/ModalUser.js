import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';

class ModelUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        }
        this.listenToEmitter();
    }

    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
            })
        })
    }
    componentDidMount() {
    }

    toggle = () => {
        this.props.toggle();

    }
    handleOnchangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        });

    }
    checkValidationInput = () => {
        let isValid = true;
        let inputs = ['email', 'password', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < inputs.length; i++) {
            if (!this.state[inputs[i]]) {
                isValid = false;
                alert('Missing parameter: ' + inputs[i]);
                break;
            }
        }
        return isValid;
    }
    handleAddNewUser = () => {
        let isValid = this.checkValidationInput();
        if (isValid) {
            this.props.createNewUser(this.state);

        }
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => this.toggle()}
                className={this.props.className}
                size='lg'
                centered
            >
                <ModalHeader toggle={() => this.toggle()}>
                    Create New User
                </ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label>Email</label>
                            <input type="text"
                                onChange={(event) => { this.handleOnchangeInput(event, 'email') }}
                                value={this.state.email}
                            />
                        </div>
                        <div className="input-container">
                            <label>Password</label>
                            <input type="password"
                                onChange={(event) => { this.handleOnchangeInput(event, 'password') }}
                                value={this.state.password}
                            />
                        </div>
                        <div className="input-container">
                            <label>First Name</label>
                            <input type="text"
                                onChange={(event) => { this.handleOnchangeInput(event, 'firstName') }}
                                value={this.state.firstName}
                            />
                        </div>
                        <div className="input-container">
                            <label>Last Name</label>
                            <input type="text"
                                onChange={(event) => { this.handleOnchangeInput(event, 'lastName') }}
                                value={this.state.lastName}
                            />
                        </div>
                        <div className="input-container max-width-input">
                            <label>Address</label>
                            <input type="text"
                                value={this.state.address}
                                onChange={(event) => { this.handleOnchangeInput(event, 'address') }}
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        className="px-3"
                        color="primary"
                        onClick={() => this.handleAddNewUser()}>
                        Save
                    </Button>
                    <Button
                        className="px-3"
                        color="secondary"
                        onClick={() => this.toggle()}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModelUser);


