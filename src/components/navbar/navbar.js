import React from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <Menu.Item  as={NavLink} to="/event">
                        Event
                    </Menu.Item>
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div>
                    < Menu pointing secondary>
                        <Menu.Item  as={NavLink} to="/signup">
                            Signup
                        </Menu.Item>
                        <Menu.Item  as={NavLink} to="/login">
                            Login
                        </Menu.Item>
                    </Menu>
                </div>
            );
        }
    }

    render() {
        return (
            < Menu pointing secondary>
                <Menu.Item header link>
                    EventList
                </Menu.Item>
                <Menu.Menu position = 'right'>
                    {this.getLinks()}
                </Menu.Menu>
            </Menu>
        );
    }
}

export default NavBar;