import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import '../../App.css';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.signedIn === true) {
    //         this.props.history.push('/login');
    //     }

    //     this.setState({
    //         errors: nextProps.errors
    //     })
    // }

    componentDidUpdate(prevProps) {
        if (prevProps.signedIn === true) {
            this.props.history.push("/login");
        }

        if (prevProps.errors !== this.props.errors) {
            this.setState({
                errors: this.props.errors
            });
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user, this.props.history.push("/login"));
    }

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
            <Form onSubmit={this.handleSubmit} className="form_signup">
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
                <Form.Field>
                    <label>Confirm Password</label>
                    <input 
                        type = "password"
                        value={this.state.password2}
                        onChange={this.update('password2')}
                        placeholder="Confirm Password"
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
//         signedIn: state.session.isSignedIn,
//         errors: state.errors.session
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         signup: user => dispatch(signup(user))
//     }
// }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));
export default withRouter(Signup);

