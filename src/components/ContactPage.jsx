import React from 'react';

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <h3 className="subpage-title">Kontakt</h3>
                <div className="contact-container">
                    <p>Dołożyliśmy wszelkich starań, aby dane umieszczone na naszej stronie były zgodne z rzeczywistością i rzetelne. Jeśli zauważyli Państwo jakiś błąd, lub reprezentujecie Kandydatkę/Kandydata i chcielibyście dodać jego zdjęcie do naszej bazy, bardzo prosimy o kontakt: politycy@viva.org.pl</p>
                </div>
            </React.Fragment>
        )
    }
}

export default ContactPage;