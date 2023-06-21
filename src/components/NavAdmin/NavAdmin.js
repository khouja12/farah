import * as React from "react";

import "./NavAdmin.css";
import { useState } from "react";
import { Avatar } from "@mui/material";

export default function NavAdmin() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className="sidenav">
        <a href="/admin/ResponsableAdmin">Responsables</a>
        <a href="/admin/TableauDeBord">Tableau de bord</a>
        <a href="/admin/AnalysePredictiveAdmin">Analyse Predictive</a>

        <Avatar className="log-btn" onClick={toggleMenu}>
          {" "}
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Logo_BNA_BANK_-_Banque_Nationale_Agricole.png " />{" "}
        </Avatar>
        {isExpanded && (
          <div className="menu">
            <ul>
              <a href="/" className="log-out-sidebar">
                Se déconnecter
              </a>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
