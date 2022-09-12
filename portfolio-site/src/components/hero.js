import React from "react";
import Navbar from "./navbar";

class Hero extends React.Component {
    render() {
    return (
        <section id="Hero">
        <Navbar />
        <h1>Hello</h1>
        <h2>My name is</h2>
        <h2 className="name">Arthur Godinez</h2>
        <h3 className="title">Full-stack</h3>
        <h3>web developer</h3>

        </section>
        );
    }
}

export default function Hero;