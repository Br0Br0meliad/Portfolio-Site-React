import React from "react";

class Navbar extends React.Component {
    render() {
    return (
      
        <div class="sidebar">
          <button> <a class="active" href="#Intro">Intro</a> </button>

          <button> <a href="#About-me">About Me</a> </button>

          <button><a href="#Projects">Projects</a></button>

          <button><a href="#Contacts-Resume">Reach Out</a></button>

          <button><a href="#Fun-facts">Fun Facts</a></button>
        </div>
         
            
      );
  }
}


export default function Navbar;