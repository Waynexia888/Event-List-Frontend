import React from "react";
import { Button, Table, Input } from 'semantic-ui-react';
import '../../App.css';

class Event extends React.Component {

  render() {
    return(
      <div className = "table-container">
        <Table fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='5'>
                <Button primary>Add Event</Button>
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>From</Table.HeaderCell>
              <Table.HeaderCell>To</Table.HeaderCell>
              <Table.HeaderCell>Content</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>
                <Input type = "datetime-local" />
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Input type = "datetime-local" />
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Input type = "text" />
              </Table.HeaderCell>
              <Table.HeaderCell>
                < Input type = "checkbox" />
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Button primary>Save</Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
    </Table>
    </div>
    )
  }
}

export default Event;