// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="w-full text-center">
      <h1 className="font-bold text-2xl mb-8 text-white">Distribuidora Copa Éxito</h1>

      <div className="flex flex-col">
        <NavLink to="/viveres" className="text-lg font-semibold rounded-lg text-white w-40 bg-teal-700 h-16 mb-4 my-0 mx-auto p-2">Precio de Víveres</NavLink>
        <NavLink to="/panaderia" className="text-lg font-semibold rounded-lg text-white w-40 bg-teal-700 h-16 mb-4 my-0 mx-auto p-2">Precio de panadería</NavLink>
        <NavLink to="/mayor" className="text-lg font-semibold rounded-lg text-white w-40 bg-teal-700 h-16 mb-4 my-0 mx-auto p-2">Precios al mayor</NavLink>
      </div>
    </div>
  );
};
