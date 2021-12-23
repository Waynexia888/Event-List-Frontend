import React from 'react';
import EventForm from './EventForm';
import { connect } from 'react-redux';
import { Button, Table, Input } from 'semantic-ui-react';

import { receiveEvents, receiveEvent } from '../../actions/event_actions'
import { allEvents } from '../../reducers/selectors';

class EventList extends React.Component {
    render() {
        const { events, receiveEvent } = this.props;
        const eventItems = events.map((event) => (
            <div>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>John</Table.Cell>
                        <Table.Cell>Approved</Table.Cell>
                        <Table.Cell>None</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </div>
        ))
        return(
            <div>
                <EventForm receiveEvent={receiveEvent} />
                <ul>{eventItems}</ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    events: allEvents(state),
    state
});

const mapDispatchToProps = (dispatch) => ({
    receiveEvent: (event) => dispatch(receiveEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
