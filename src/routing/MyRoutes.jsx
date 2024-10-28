/* eslint-disable no-unused-vars */
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Inicio } from '../layout/Inicio';
import { PrecioViveres } from '../layout/PrecioViveres';
import { PrecioPanaderia } from '../layout/PrecioPanaderia';
import { PreciosMayor } from '../layout/PreciosMayor';

export const MyRoutes = () => {
  return (
    <div className='w-full h-full mt-10 bg-slate-600 p-10'>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/inicio' element={<Inicio/>}/>
                <Route path='/viveres' element={<PrecioViveres/>}/>
                <Route path='/panaderia' element={<PrecioPanaderia/>}/>
                <Route path='/mayor' element={<PreciosMayor/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
