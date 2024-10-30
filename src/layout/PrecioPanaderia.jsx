// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import data from "../assets/dataPanes.json";
import { Link } from "react-router-dom";
import back from "../assets/icons/circle-back.svg";

export const PrecioPanaderia = () => {
  const [listado, setListado] = useState([]);
  const [busquedaState, setBusquedaState] = useState("");

  const tasa = 43;

  useEffect(() => {
    conseguirListado();
  }, []);

  const conseguirListado = async () => {
    let objeto = await data.map((dato) => {
      return {
        ...dato,
        id: data.indexOf(dato),
        precio: parseFloat(dato.precio),
      };
    });
    console.log(objeto);

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

  return (
    <div className="flex flex-col items-center text-white">
      <div className="w-full flex justify-around">
        
        <Link to="/inicio"><img src={back} alt="back" className="w-12 bg-white rounded-[50%] mt-4"/></Link>
        
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4">Listado de precios</h1>

          <input
            onChange={buscar}
            className="text-black ring-2 w-40 p-2 rounded-sm mb-4"
            type="text"
            name="busqueda"
            placeholder="Busca un producto"
          />
          {/* <input className="border-solid border-2 mb-4 p-2 w-28" type="submit" value="Buscar"/> */}
        </div>
        <div></div>
      </div>

      <div className="flex flex-wrap mt-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
        {listado.map((item) => {
          return (
            <article
              key={item.id}
              className="w-56 h-40 text-veryDarkBlue mb-4 mr-4  border-2 shadow pt-1"
            >
              <h3 className="ml-3 mt-2 text-xl font-bold">{item.producto}</h3>
              <p className="ml-3 mt-2">
                Precio Dolares: {item.precio.toFixed(3)} $
              </p>
              <p className="ml-3 mt-2">
                Precio Bolivares: {(item.precio * tasa).toFixed(2)} Bs
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
};
