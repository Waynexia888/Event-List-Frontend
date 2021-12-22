import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import '../../App.css';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    // Once the user has been authenticated, redirect to the event page
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/event');
        }

        // Set or clear errors
        this.setState({
            errors: nextProps.errors
        })
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        let user = {
            username: this.state.username,
            password: this.state.password
        };

        this.props.history.push('/event')
    }

    // Render the session errors if there are any
    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit} className="form_login">
                <Form.Field>
                    <label>Username</label>
                    <input 
                        type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                        placeholder="Username"
                    />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input 
                        type = "password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        placeholder="Password"
                    />
                </Form.Field>
                <Button type='submit'>Submit</Button>
                 {this.renderErrors()}
            </Form>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         errors: state.errors.session
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         login: user => dispatch(login(user))
//     }
// }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

export default withRouter(Login);