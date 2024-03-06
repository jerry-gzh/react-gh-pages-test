import React from "react";
import "./events.css";
import a from "../../assets/a.png";
import b from "../../assets/b.png";
import c from "../../assets/c.png";
import d from "../../assets/d.png";
import e from "../../assets/e.png";
import f from "../../assets/f.png";
import g from "../../assets/g.png";

const eventData = [
  {
    id: 0,
    name: "Ceremonia",
    link: "https://maps.app.goo.gl/osdyWgPwLLTTL3Xn8",
    img: a,
  },
  {
    id: 1,
    img: b,
  },
  {
    id: 2,
    name: "Recepción",
    link: "https://maps.app.goo.gl/rQF7syLjTfhDkEi4A",
    img: c,
  },
  {
    id: 3,
    img: d,
  },
  {
    id: 4,
    img: e,
  },
  {
    id: 5,
    img: f,
  },
  {
    id: 6,
    img: g,
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
