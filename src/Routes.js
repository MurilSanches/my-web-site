import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import { Home, About, MoreAbout, Contacts, WrongPage } from './pages/index'
import App from './App'

const RouteManager = () => {
    return(
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path="home" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="moreabout" element={<MoreAbout />} />
                        <Route path="contacts" element={<Contacts />} />
                        <Route path="*" element={<WrongPage />} />                 
                    </Route>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
      )
}

export default RouteManager