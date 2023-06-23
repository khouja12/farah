import React from 'react'
import NavResponsable from '../../components/NavResponsable/NavResponsable'
import { Card } from 'react-bootstrap'
import resultat3 from "../AnalysePredictiveAdmin/resultat3.PNG";

const AnalysePredictiveResponsable = () => {
  return (
    <div>
    <NavResponsable/>
    <div className="img-stat">
    <img src={resultat3} />
  </div>
  <div>
    <Card className="cardd" style={{ width: "50rem" }}>
      <Card.Body>
        <Card.Title style={{ color: "white" }}>
          {" "}
          le coefficient de détermination (R²)
        </Card.Title>
        <Card.Text style={{ color: "white" }}>
          {" "}
          le coefficient de détermination (R²):Le coefficient de
          détermination, également connu sous le nom de R² (prononcé "R
          carré"), est une mesure de la performance d'un modèle de
          régression. Il indique la proportion de la variance de la variable
          cible qui peut être expliquée par les variables indépendantes du
          modèle.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
    </div>
  )
}

export default AnalysePredictiveResponsable