import React from "react";
import { Segment } from "semantic-ui-react";
import '../../App.css';

export default function Footer() {
  return (
    <div className="footer-container">
      <Segment className="footer">
        Copyright &copy; {new Date().getFullYear()} EventList
      </Segment>
    </div> 
  );
}