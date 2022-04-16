import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllUsers } from '../../services/userService';
import './UserManage.scss'

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }

    async componentDidMount() {
        let response = await getAllUsers('ALL');
        if (response && response.errCode === 0) {
            this.setState({ users: response.users })
        }

    }


    render() {
        let users = this.state.users;

        return (

            <div className="users-container">
                <div className="title text-center">Manage users</div>
                <div className="users-table mt-5 mx-5">
                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        {users && users.map((item, index) => {
                            return (
                                <tr>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button className='btn-edit'><i className="fas fa-pencil-alt"></i></button>
                                        <button className='btn-trash'><i className="fas fa-trash"></i></button>
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
