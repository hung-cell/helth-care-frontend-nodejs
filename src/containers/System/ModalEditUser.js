import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';
import _ from 'lodash';
class ModelEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        }

    }


    componentDidMount() {
        let user = this.props.currentUser;
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: 'hascode',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
            })
        }
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
    handleEditUser = () => {
        let isValid = this.checkValidationInput();
        if (isValid) {
            this.props.editUser(this.state);

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
                    Edit User
                </ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label>Email</label>
                            <input type="text"
                                onChange={(event) => { this.handleOnchangeInput(event, 'email') }}
                                value={this.state.email}
                                disabled
                            />
                        </div>
                        <div className="input-container">
                            <label>Password</label>
                            <input type="password"
                                onChange={(event) => { this.handleOnchangeInput(event, 'password') }}
                                value={this.state.password}
                                disabled
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
                        onClick={() => this.handleEditUser()}>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModelEditUser);



