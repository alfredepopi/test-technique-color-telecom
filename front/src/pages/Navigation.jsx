import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navigation extends Component {
    render() {
    return (
        <div>
            <Link to="/">Ajouter un créneau</Link>
            <Link to="/créneaux">Voir les créneaux</Link>
        </div>
    )
}
}

