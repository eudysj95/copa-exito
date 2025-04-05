import dataPanes from "../assets/dataPanes.json";
import dataViveres from "../assets/dataViveres.json";
import dataMayor from "../assets/dataMayor.json";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import back from "../assets/icons/circle-back.svg";

// eslint-disable-next-line react/prop-types
export function Marco({title, metodo}) {
    
  const [listado, setListado] = useState([]);
  const [busquedaState, setBusquedaState] = useState("");

  const tasa = 70;

  useEffect(() => {
    
    conseguirListado();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const conseguirListado = () => {
    let data;

    if(metodo === "viveres"){
        data = dataViveres;
    }else if(metodo === "panes"){
        data = dataPanes;
    }
    else if(metodo === "mayor"){
        data = dataMayor;
    }

    let objeto = data.map((dato) => {
      return {
        ...dato,
        id: data.indexOf(dato),
        precio: parseFloat(dato.precio),
      };
    });

    /* objeto.sort((a, b) => a.producto.localeCompare(b.producto));
    console.log(objeto) */

    setListado(objeto);
  };

  const buscar = (e) => {
    setBusquedaState(e.target.value);

    let nuevoListado = listado.filter((item) =>
      item.producto.toLowerCase().includes(busquedaState.toLowerCase())
    );

    if (busquedaState.length < 2) {
      conseguirListado();
    } else {
      setListado(nuevoListado);
    }
  };

    return(
  <div className="flex flex-col mt-4 items-center text-white">
    <div className="w-full flex h-16 mb-4">
      <Link to="/inicio">
        <img
          src={back}
          alt="back"
          className="w-8 bg-white rounded-[50%] mt-4 ml-2"
        />
      </Link>

      <h2 className="leading-[64px] ml-3 text-lg">Inicio</h2>

      <h2 className="leading-[64px] ml-3 text-lg">Tasa = {tasa}</h2>
      
    </div>

    <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>

        <input
          onChange={buscar}
          className="text-black ring-2 w-40 p-2 rounded-sm mb-4"
          type="text"
          name="busqueda"
          placeholder="Busca un producto"
        />
        {/* <input className="border-solid border-2 mb-4 p-2 w-28" type="submit" value="Buscar"/> */}
      </div>

    <div className="flex flex-wrap mt-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
      {listado.map((item) => {
        {if(metodo=="viveres"){
          let precio = item.precio; {/* (item.precio / item.unidades)*1.15 */};
          return (
            <article
              key={item.id}
              className="px-2 flex justify-between w-full h-16 text-veryDarkBlue mb-2 text-center border-2 shadow rounded-2xl">
              <h3 className="text-base font-medium leading-[64px] break-words max-w-2/3">{item.producto}</h3>
              <p className="leading-[64px]">
               {precio.toFixed(2)}$
              </p>
              <p className="leading-[64px]">
               {(precio * tasa).toFixed(2)}Bs
              </p>
            </article>
          );
        }else{
          return (
            <article
              key={item.id}
              className="px-2 flex justify-between w-full h-16 text-veryDarkBlue mb-2 text-center border-2 shadow rounded-2xl"
            >
              <h3 className="text-base font-medium leading-[64px] break-words max-w-2/3">{item.producto}</h3>
              <p className="leading-[64px]">
               {item.precio.toFixed(2)}$
              </p>
              <p className="leading-[64px]">
               {(item.precio * tasa).toFixed(2)}Bs
              </p>
            </article>
          );
        }}
        
      })}
    </div>
  </div>)
    
};
