import {Route, Routes} from "react-router-dom"
import {ProductsPage} from "./pages/ProductsPage";
import {AboutPage} from "./pages/aboutPage";
import React from "react";
import {Navigation} from "./components/Navigation";
function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={ <ProductsPage />} />
                <Route path="/about" element={ <AboutPage />} />
            </Routes>
        </>
    )

}

export default App;
