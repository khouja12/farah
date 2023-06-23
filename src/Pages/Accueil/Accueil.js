import React, { useState } from "react";
import Navs from "../../components/NavBars/Navs";
import Footer from "../../components/Footer/Footer";
import BnaList from "../../components/BnaList/BnaList";
import { aProposdelaBNA } from "../../components/Data/BNAData";

const Accueil = ({ BNAList }) => {
  const [BNALists, setBNALists] = useState(aProposdelaBNA);

  return (
    <div>
      <Navs />
      <b> BNA Banque </b>
      <BnaList  BNALists={BNALists} />
      <Footer />
    </div>
  );
};

export default Accueil;
