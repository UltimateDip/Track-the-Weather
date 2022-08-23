import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function weatherCard(props) {
    const { name, temp, description,icon, windSpeed } = props.place;
    return (
        <Card className='weatherCard'>
            {/* <Card.Img variant="top" src="http://openweathermap.org/img/wn/10d@2x.png?text=Image cap" /> */}
            {/* <Card.ImgOverlay></Card.ImgOverlay> */}
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <img src={"http://openweathermap.org/img/wn/"+icon+"@2x.png"} alt="img" />
                <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
                <Card.Text>
                    Temprature : {temp} °C <br />
                    Wind Speed : {windSpeed}
                </Card.Text>
                <Button
                onClick={()=>{
                    props.deletePlace(props.id);
                }}
                variant="dark">Delete</Button>
            </Card.Body>
        </Card>
    )
}
