"use client";
import { useState,useEffect } from "react";
import { Route } from "react-router-dom";
import RegistrarUsuario from "./RegistrarUsuario";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./Firebase";
const InicioSesion=()=>{
    const [correo,setcorreo]=useState('');
    const [contraseña,setcontraseña]=useState('');
    const [datos,setdatos]=useState(null);
    const Iniciar = async (e) => {
        e.preventDefault();
        try {
          await signInWithEmailAndPassword(auth, correo, contraseña);
          // Autenticación exitosa, redirigir al usuario a la página principal
          onAuthStateChanged(auth, (user) => {
            if (user) {
                setdatos(user);
            }else{
                setdatos(null);
            }
          })
        } catch (error) {
          alert( error);
        }
      };
      
return(
    <>
    <form action="" on onSubmit={Iniciar}>
    <div>
        <label htmlFor="inicio">CORREO</label>
        <input type="email" id="correo" name="correo" value={correo} onChange={(e)=>setcorreo(e.target.value)}/>
    </div>
    <div>
        <label htmlFor="inicio">CONTRASEÑA</label>
        <input type="password" id="contraseña" name="contraseña" value={contraseña} onChange={(e)=>setcontraseña(e.target.value)}/>
    </div>
    <div>
        <button type="submit">INICIAR SESION</button>
    </div>
    </form>
    <div>
        <RegistrarUsuario/>
    </div>
    </>
)
}
export default InicioSesion;