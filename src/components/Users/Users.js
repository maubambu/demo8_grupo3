import React, { Component } from 'react';
import UsersTable from './UsersTable/UsersTable';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchUsers } from './../../state/actions/UsersActions';

class Users extends Component{
    handleClickGetUsers = () => {
        this.props.fetchUsers();
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleClickGetUsers}>Cargar usuarios</Button>
                <UsersTable></UsersTable>
                {this.props.loading ? <h1>Cargando...</h1> : null}
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchUsers,
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);