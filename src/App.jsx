import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Cuerpo } from "./components/Cuerpo"
import { Programa } from "./Routes/Programa"
import { Unidad1 } from "./Routes/Unidad1"
import { Unidad2 } from "./Routes/Unidad2"
import { Unidad3 } from "./Routes/Unidad3"
import { Unidad4 } from "./Routes/Unidad4"
import { Unidad5 } from "./Routes/Unidad5"
import { Unidad6 } from "./Routes/unidad6"
import { Equivalencia } from "./Routes/Equivalencia"
import { Route, Routes, Navigate } from 'react-router-dom';
import "./Styles/App.css"


export const App = () => {

  return (
    <>
      <div className="header">
        <Header></Header>
      </div>
      <div>
        <Cuerpo></Cuerpo>
      </div>
      <div className="cuerpo">
        <Routes>
          <Route path="/" element={<Programa />} >Inicio</Route>
          <Route path="/Unidad1" element={<Unidad1 />}>Unidad 1</Route>
          <Route path="/Unidad2" element={<Unidad2 />}>Unidad 2</Route>
          <Route path="/Unidad3" element={<Unidad3 />}>Unidad 3</Route>
          <Route path="/Unidad4" element={<Unidad4 />}>Unidad 4</Route>
          <Route path="/Unidad5" element={<Unidad5 />}>Unidad 5</Route>
          <Route path="/Unidad6" element={<Unidad6 />}>Unidad 6</Route>
          <Route path="/Equivalencia" element={<Equivalencia />}>Equivalencias 6</Route>
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </>
  )
}


