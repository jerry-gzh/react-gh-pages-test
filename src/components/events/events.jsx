import React from "react";
import "./events.css";
import ceremonyImg from "../../assets/ceremony.png";
import saloonImg from "../../assets/saloon.png";
import a from "../../assets/a.png";
import b from "../../assets/b.png";
import c from "../../assets/c.png";

const eventData = [
  {
    id: 0,
    name: "Ceremonia",
    link: "https://maps.app.goo.gl/osdyWgPwLLTTL3Xn8",
    img: ceremonyImg,
  },
  {
    id: 1,
    img: a,
  },
  {
    id: 2,
    name: "Recepción",
    link: "https://maps.app.goo.gl/rQF7syLjTfhDkEi4A",
    img: saloonImg,
  },
  {
    id: 3,
    img: b,
  },
  {
    id: 4,
    img: c,
  },

];

const Events = () => {
  const openExternalMap = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section>
      {eventData.map(({ id, name, link, img }) => (
        <div className="cardEvent" key={id}>
          {img && <img className="event_img" src={img} alt={name} />}
          {link && (
            <button className="button" onClick={() => openExternalMap(link)}>
              Ver Mapa
            </button>
          )}
        </div>
      ))}
    </section>
  );
};

export default Events;
