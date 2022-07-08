import React, {Component} from "react";
import axios from "axios";
import '../App.css';

export class Creneaux extends Component {
    state = {
        creneaux: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:3000/creneau')
        .then(res => {
            const creneaux = res.data;
            this.setState({ creneaux });
        })
    }

    deleteRow(id,e){
        axios.delete(`http://127.0.0.1:3000/creneau/${id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);

            const creneaux = this.state.creneaux.filter(item => item.id !== id);
            this.setState({ creneaux});
        })
    }

    render() {
        return (
            <><div>
                <h1>Les créneaux:</h1>
                <ul>
                    {this.state.creneaux.map(creneau => <><li key={creneau.id}>
                        Jours d'ouvertures: {creneau.jours}<br></br>
                        Heure d'ouverture: {creneau.horaire_ouverture}<br></br>
                        Heure de fermeture :{creneau.horaire_fermeture}</li>
                        <br></br><button className="btn btn danger" onClick={(e) => this.deleteRow(creneau.id, e)}>Delete</button></>)}
                </ul>
            </div></>
            
        )
    }
}