import React from 'react';
import './TekstOmeni.css';

const Tekst = () => {
    return (
        <div className="tekst-container">
            <h2>Kratko o meni</h2>
            <h3>
                Ja sam Mirko, dobrodošao na moj sajt. Ovo je moj početak u svetu freelancer-a.
                Do sada sam se bavio grafickim  <a href="/work">dizajnom</a>, a sada zelim vise da se posvetim programiranju.
                Zavrsio sam Racunarsku gimaziju u Novom Sadu, tamo sam uradio dosta <a href="projects">projekata</a>, tako sam se i zainteresovao za programiranje.
            </h3>
        </div>
    );
};
export default Tekst;
