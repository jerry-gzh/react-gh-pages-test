import React from 'react';
import './Home.css';
import Timer from './timer';


const imageUrl = 'https://lh3.googleusercontent.com/pw/AIL4fc_2gTP25H1JnWICm9F5y5DYOgnUNrfohNaT2BIaXYr9ne0fx2isPibL-Kfeeg2lQO7Pru2NwjzZLNzabMAM6k4jQ8eAGMZb0nwfVtmo5PX83PO_PjKag7D9J3kYviZKWS79iM-ErDdyJi8E3u326vs0u8AaHLEF2Kch3pulZhs5IonZArlseP3kxOR1M5-X31-WOSOjOcacWi_XCY4eftHKhecCirGePj5I0HD4Jcip6SxxVHgDG6bm3fkv4NRigkRcNQ0NR0REO3M8HRssNAXAOLC1RLAEvQw7yHukvozvLdwVUyrtI43_QSPDp2E0LqW8BLLdACG2e7dhp0qu0uWAAw0ZrotMiiRaFh1Vwv_hDgy4cmI6Ii_0wwr4U2MW4X7loxJelaZYcndUEEmM5esoSKgce4dBt8IEWxdxbFIUcviogWFYS7OnLs1ps7iI3IYYHb1WNliTE2OnuDk0yo9aAXdJzGWqpy0Fv39CFEkb_diBDmV-DbeCISj2qiAf97SNJg6i_nv-LUjtfarrvxBUChdkgOxqE4cgqO--pVuoY677hI85lqLHKZ8VxXigZ7cUlwWFh7z5YTRR0bLBOqzZEnvsyqNCEFEe7BZGb7__9sIAC2cY28IDS8XPue_zEKvga-A5hR95OeLffV7V5viMSnrnFqHSGro7IbzhUQcPIeD8gIcnV2qONwOjYbQvD9dXEFgNjYKxo8EIh7qrA2NIbqR3gIDXT5YLCje9gn_bO6HNbBp683dw5n7zvsQLr6URf6RgLt0JnqO9DCE-RzFQGFFSf0l3eKZuNmN1_ftOpJTPCyJxp8Z_jucQcwdCjk-xOrIEBeY6P5T0Po8r-mpFOFj_YGlhypOC4HcAQvs3JIJtRZC8197nSfQYPqI0UhBiOq4lKZU9fXV9f-p4pcQ=w688-h892-s-no?authuser=0';

const Home = () => {
  return(
    <section>
      <div id='title'>
        <h1>Claus y Jerry</h1>
        <h2>Nuestra Boda</h2>
        <div id='timer'>
          <Timer id='timers'/>
        </div>
        <img src={imageUrl} alt="Imagen desde Google Photos" />
      </div>
    </section>
  )
}

export default Home 