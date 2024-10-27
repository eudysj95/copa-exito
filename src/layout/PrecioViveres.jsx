// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import data from "../assets/dataViveres.json";

export const PrecioViveres = () => {
  const [listado, setListado] = useState([]);
  const [busquedaState, setBusquedaState] = useState("");

  useEffect(() => {
    conseguirLista();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let tasa = 42;
  let porcentaje = 1.2;

  const conseguirLista = () => {
    let objeto = data.map((dato) => {
      return {
        ...dato,
        id: data.indexOf(dato),
        precioDolar: (parseFloat(dato.precio) / dato.unidades) * porcentaje,
      };
    });

    setListado(objeto);
  };

  const buscar = (e) => {
    setBusquedaState(e.target.value);

    let nuevoListado = listado.filter((item) =>
      item.producto.toLowerCase().includes(busquedaState.toLowerCase())
    );

    if (busquedaState.length < 2) {
      conseguirLista();
    } else {
      setListado(nuevoListado);
    }
  };

  return (
    <div className="w-full h-full p-6 text-white">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">
          Listado de precios
        </h1>

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
          return (
            <article
              key={item.id}
              className="w-64 h-40 text-veryDarkBlue mb-4  border-2 shadow pt-1"
            >
              <h3 className="ml-8 mt-6 text-xl font-bold">{item.producto}</h3>
              <p className="ml-8 mt-2">
                Precio Dolares: {item.precioDolar.toFixed(3)} $
              </p>
              <p className="ml-8 mt-2">
                Precio Bolivares: {(item.precioDolar * tasa).toFixed(3)} Bs
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
};
