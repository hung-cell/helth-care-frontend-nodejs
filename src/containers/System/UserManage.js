import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getAllUsers, createNewUser, deleteUser, editUser } from '../../services/userService';
import './UserManage.scss'
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser'
import { emitter } from '../../utils/emitter';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isOpenModel: false,
            isOpenModalEditUser: false,
            userEdit: {}
        }
    }

    async componentDidMount() {
        await this.getAllUserFromServer();

    }

    getAllUserFromServer = async () => {

        let response = await getAllUsers('ALL');
        console.log(response.users);
        if (response && response.errCode === 0) {
            this.setState({ users: response.users })
        }
    }

    handleOnclickBtnAdd = () => {
        this.setState({ isOpenModel: true });
    }
    toggleUserModal = () => {
        this.setState({ isOpenModel: !this.state.isOpenModel });
    }
    toggleUserEditModal = () => {
        this.setState({ isOpenModalEditUser: !this.state.isOpenModalEditUser });
    }

    createNewUser = async (data) => {
        try {

            let response = await createNewUser(data);

            if (response && response.message.errCode !== 0) {
                alert(response.message.message)
            } else {
                await this.getAllUserFromServer();
                this.setState({ isOpenModel: false })
                emitter.emit('EVENT_CLEAR_MODAL_DATA')
            }
        } catch (err) {
            console.error(err);
        }
    }
    editUser = async (data) => {

        try {
            let response = await editUser(data);

            if (response && response.message.errCode !== 0) {

                alert(response.message.message)
            }
            else {

                await this.getAllUserFromServer();
                this.setState({ isOpenModalEditUser: false })

            }
        } catch (err) {
            console.error(err);
        }

    }
    handleOnclickBtnDelete = async (id) => {
        try {
            let response = await deleteUser(id);
            if (response && response.message.errCode !== 0) {
                alert(response.message.message)
            } else {
                await this.getAllUserFromServer();
            }
            console.log(response)
        } catch (err) {
            console.error(err);
        }


    }

    handleOnclickBtnEdit = async (user) => {

        this.setState({ isOpenModalEditUser: true });
        this.state.userEdit = user;
    }

    render() {
        let users = this.state.users;

        return (

            <div className="users-container">
                {this.state.isOpenModel &&
                    <ModalUser
                        isOpen={this.state.isOpenModel}
                        toggle={this.toggleUserModal}
                        className={'user-manager-modal'}
                        createNewUser={this.createNewUser}
                    />}
                {this.state.isOpenModalEditUser &&
                    <ModalEditUser
                        isOpen={this.state.isOpenModalEditUser}
                        toggle={this.toggleUserEditModal}
                        className={'user-manager-modal'}
                        currentUser={this.state.userEdit}
                        editUser={this.editUser}
                    />}
                <div className="title text-center">Manage users</div>

                <div className="mx-5">
                    <button onClick={() => this.handleOnclickBtnAdd()} className="btn btn-primary px-3 btn-add"><i className="fas fa-plus"></i>Add new user</button>
                </div>

                <div className="users-table mt-5 mx-5">
                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        {users && users.map((item) => {
                            return (
                                <tr>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button className='btn-edit' onClick={() => this.handleOnclickBtnEdit(item)}><i className="fas fa-pencil-alt"></i></button>
                                        <button className='btn-trash' onClick={() => this.handleOnclickBtnDelete(item.id)}><i className="fas fa-trash"></i></button>
                                    </td>
                                </tr>)

                        })}
                    </table>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
