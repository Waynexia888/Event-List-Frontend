import React from "react";
import { Button, Table, Input } from 'semantic-ui-react';
import '../../App.css';
import { uniqueId } from "../../util/id_generator";

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "",
      to: "",
      content: "",
      isCompleted: false
    }
  }

  update(property) {
    return (e) => this.setState({
      [property]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const event = Object.assign({}, this.state, { id: uniqueId() });
    this.props.receiveEvent(event);
    this.setState({
      from: "",
      to: "",
      content: ""
    })
  }

  render() {
    return(
      <div className="table-container">
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
                <Input type = "datetime-local" 
                      value={this.state.from}
                      onChange={this.update("from")}
                      required
                />
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Input type = "datetime-local"
                      value={this.state.to}
                      onChange={this.update("to")} 
                      required
                />
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Input type = "text" 
                      value={this.state.contnet}
                      onChange={this.update("content")}
                      required
                />
              </Table.HeaderCell>
              <Table.HeaderCell>
                < Input type = "checkbox" />
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Button primary 
                  onSubmit={this.handleSubmit}>
                  Save
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
      </Table>
    </div>
    )
  }
}

export default EventForm;