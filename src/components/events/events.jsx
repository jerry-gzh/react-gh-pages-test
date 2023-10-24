import React from "react";
import "./events.css";
import ceremony from "../../assets/ceremony.jpg";
import saloon from "../../assets/saloon.jpg";

const data = [
  {
    id: 0,
    name: "Ceremonia",
    place: "Más Vida Cumbres",
    address: "Donde: Libramiento Oriente 220, Lomas del Punhuato, 58256 Morelia, Mich.",
    schedule: "4:00 p.m.", 
    link: "https://maps.app.goo.gl/osdyWgPwLLTTL3Xn8",
    img: ceremony,
  },
  {
    id: 1,
    name: "Recepción",
    place: "Monte Alto terraza jardín",
    address: "Donde:Villa Dorada 359, 58350 Morelia, Mich.",
    schedule: "7:00 p.m.",
    link: "https://maps.app.goo.gl/rQF7syLjTfhDkEi4A",
    img: saloon,
  },
];

const Events = () => {
  const externalURL = "https://maps.app.goo.gl/osdyWgPwLLTTL3Xn8";

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section>
      {data.map(({ id, name, place, address, schedule, link, img }) => (
        <div className="cardEvent" key={id}>
          <h2>{name}</h2>
          <img className='event_img' src={img} alt={name} />
          <h3>{place}</h3>
          <h3>{schedule}</h3>
          <h3>{address}</h3>
          <button className='button' onClick={() => handleClick(link)}>Ver Mapa</button>
        </div>
      ))}
    </section>
  );
};

export default Events;
