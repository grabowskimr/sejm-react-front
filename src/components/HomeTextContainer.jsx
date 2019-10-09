import React from 'react';
import { Link } from 'react-router-dom';

class HomeTextContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-text-container">
                <p>Aby określić jak bardzo Kandydatki i Kandydaci są przyjaźni zwierzętom postanowiliśmy prześledzić historyczne głosowania w których brali udział posłowie ostatnich dwóch kadencji Sejmu oraz wysłać do wszystkich kandydatów ankietę w której pytaliśmy o ich poparcie bądź brak poparcia dla konkretnych zmian w prawie, które są korzystne dla zwierząt - zarówno tych towarzyszących, hodowlanych, jak i dzikich.</p>
                <p>Dodaliśmy również dodatkowe kryterium - jeśli polityk podejmował inne aktywne działania w interesie zwierząt (lub przeciwko zwierzętom - np. wspierając hodowców zwierząt futerkowych, czy też głosując przeciwko podwyższeniu kar za znęcanie się nad zwierzętami).</p>
                <p>Mamy głęboką nadzieję, że przygotowywany przez nas portal będzie użyteczny dla osób, którym leży na sercu dobro zwierząt i chcą wspierać polityków przyjaznych zwierzętom.</p>
                <p>Jeśli ktoś zwyczajnie nie lubi zwierząt, albo cieszy się, gdy zwierzęta cierpią również znajdzie w naszym projekcie coś dla siebie - może sortować kandydatów według osób, które uzyskały najniższą ilość punktów i głosować właśnie na nie ;)</p>
                <p>Wierzymy, że cierpienie zwierząt nie ma barw politycznych i jest tematem nad którym powinniśmy się pochylić jako cywilizowani ludzie, żyjący w Europie na początku XXI wieku i wierzymy, że w nadchodzącej kadencji Sejmu politycy pochylą się nad ważnym tematem, jakim jest nowelizacja ustawy o ochronie zwierząt i zmiana przepisów łowieckich.</p>
                <p className="criteria-link-container">
                    <Link to="/criterions">Nasze kryteria <img src="/images/arror-right-green.png" /></Link>
                </p>
            </div>
        )
    }
}

export default HomeTextContainer;