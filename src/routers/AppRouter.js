import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';

export const AppRouter = () => {
    // const {state} = useContext(MyContext);
    // const isLogged = true;

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};
