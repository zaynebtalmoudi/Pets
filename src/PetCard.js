import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PetCard({ photo, name, race, type, location }) {

    const [adopted, setAdopted] = React.useState(false)

    const flip = () => {
        setAdopted(!adopted)
    }

    return (
        <div>
            <Card style={{ width: '18rem', margin: '1rem' }}>
                <Card.Img variant="top" src={require(`./images/${photo}`)} style={{ width: '18rem', height: '20rem' }} />
                <Card.Body>
                    <Card.Title className="fs-1"> {name} </Card.Title>
                    <Card.Text><b>Type:</b> {type} </Card.Text>
                    <Card.Text><b>Race:</b> {race} </Card.Text>
                    <Card.Text><b>Loaction:</b> {location} </Card.Text>
                    {adopted ? <div style={{ color: 'green' }}>Adopted</div> : <div style={{ color: 'red' }}> Not Adopted</div>}
                    <Card.Text></Card.Text>
                    <Button onClick={flip} variant="primary">Adopt Me  ^_^ </Button>
                </Card.Body>
            </Card>
        </div >
    )
}

