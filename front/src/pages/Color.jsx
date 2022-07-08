import React, {Component} from "react";
import axios from "axios";

export class Color extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jours: '',
            horaire_ouverture: '',
            horaire_fermeture: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
 
        const creneau = {
            jours: this.state.jours,
            horaire_ouverture: this.state.horaire_ouverture,
            horaire_fermeture: this.state.horaire_fermeture
        };

        axios.post('http://127.0.0.1:3000/creneau', creneau )
        .then(res => {
            console.log(res);
            console.log(res.data)
        })
    }

    render() {
        return (
            
            <>
            <h1>Veuillez entrer votre créneau:</h1>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Jours :
                    <input name="jours" type="text" value={this.state.jours} onChange={this.handleChange} required/>
                </label>
                <br></br>
                <label>
                    Horaire d'ouverture :
                    <input name="horaire_ouverture" type="time" value={this.state.horaire_ouverture} onChange={this.handleChange} required/>
                </label>
                <br></br>
                <label>
                    Horaire de fermeture :
                    <input name="horaire_fermeture" type="time" value={this.state.horaire_fermeture} onChange={this.handleChange} required/>
                </label>
                <br></br>
                <input type="submit" value="Ajouter" onClick="window.location.reload()" />
            </form>
            </>
        )
    }
}