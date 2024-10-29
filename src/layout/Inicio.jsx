// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";
import shopping from "../assets/icons/shopping-solid.svg";
import truck from "../assets/icons/truck-solid.svg";
import store from "../assets/icons/store-solid.svg";

export const Inicio = () => {
  return (
    <div className="w-full text-center p-2">
      <h1 className="font-bold text-2xl mb-8 text-white">Distribuidora Copa Éxito</h1>

      <div className="w-full my-0 mx-auto grid grid-cols-2 gap-1 justify-items-center">
        <NavLink to="/viveres" className="text-lg font-semibold rounded-2xl text-white w-32 bg-teal-700 h-36 mb-4 my-0 mx-auto p-2 flex flex-col justify-center items-center hover:bg-[#5accc2]"><img className="mb-2 w-10" src={shopping} alt="logo" />Precio de Víveres</NavLink>
        <NavLink to="/panaderia" className="text-lg font-semibold rounded-2xl text-white w-32 bg-teal-700 h-36 mb-4 my-0 mx-auto p-2 flex flex-col justify-center items-center hover:bg-[#5accc2]"><img className="mb-2 w-10" src={store} alt="logo" />Precio de panadería</NavLink>
        <NavLink to="/mayor" className="text-lg font-semibold rounded-2xl text-white w-32 bg-teal-700 h-36 mb-4 my-0 mx-auto p-2 flex flex-col justify-center items-center hover:bg-[#5accc2]"><img className="mb-2 w-10" src={truck} alt="logo" />Precios al mayor</NavLink>
        <NavLink to="/mayor" className="text-lg font-semibold rounded-2xl text-white w-32 bg-teal-700 h-36 mb-4 my-0 mx-auto p-2 flex flex-col justify-center items-center hover:bg-[#5accc2]"><img className="mb-2 w-10" src={truck} alt="logo" />Precios al mayor</NavLink>
      </div>
    </div>
  );
};
