// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import data from "../assets/dataPanes.json";



export const PrecioPanaderia = () => {

  const [listado, setListado] = useState([]);

const tasa = 42;

useEffect(() => {
  conseguirListado();
}, []);

const conseguirListado = () => {
  let objeto = data.map((dato) => {
    return {
      ...dato,
      id: data.indexOf(dato),
      precio: parseFloat(dato.precio),
    };
  });

  setListado(objeto);
};

  return (
    <div className="flex flex-col items-center text-white">
      <h1 className="text-2xl font-bold mb-4">Listado de precios</h1>

      <div className="flex flex-wrap mt-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
        {listado.map((item) => {
          return (
            <article
              key={item.id}
              className="w-64 h-40 text-veryDarkBlue mb-4  border-2 shadow pt-1"
            >
              <h3 className="ml-8 mt-6 text-xl font-bold">{item.producto}</h3>
              <p className="ml-8 mt-2">
                Precio Dolares: {item.precio.toFixed(3)} $
              </p>
              <p className="ml-8 mt-2">
                Precio Bolivares: {item.precio.toFixed(3) * tasa} Bs
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
};
