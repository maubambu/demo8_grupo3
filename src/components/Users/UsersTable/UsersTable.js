import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';

class UsersTable extends Component{
    render() {
        // let users = this.props.users.map(user => {
        //     return (
        //         <tr>
        //             <td>{user.id}</td>
        //             <td>{user.first_name}</td>
        //             <td>{user.last_name}</td>
        //             <td><img src={user.avatar}></img></td>
        //         </tr>
        //     )
        // })
        return (
            <Table dark>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Foto</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.map(user => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td><img src={user.avatar}></img></td>
                            </tr>
                        )
                    })}
                    {/* {users} */}
                </tbody>
            </Table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(UsersTable);