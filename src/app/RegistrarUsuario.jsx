"use client"
import { useState } from "react";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth, db } from "./Firebase";
import { collection, addDoc } from "firebase/firestore";
const RegistrarUsuario=()=>{
    const [correo,setcorreo]=useState('');
    const [contraseña,setcontraseña]=useState('');
    const [nombre,setnombre]=useState('');
    const [cargo,setcargo]=useState('');

    const Registrar = async (e) => {
        e.preventDefault();
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            correo,
            contraseña
        );
        const user = userCredential.user;

        // Save nombre and cargo to the database
        
        const usersCollection = collection(db, 'users');
        const userData = {
            nombre: nombre,
            cargo: cargo,
            id: user.uid
        };
       await addDoc(usersCollection, userData);

        // Actualizar el ID del usuario en la colección 'users'
       
        // Handle successful registration
        console.log("User data saved successfully");
    } catch (error) {
        // Handle error
        console.error("Error saving user data:", error); // Imprimir el error en la consola
    }
};
    
    return(
        <>
        <h1>REGISTRATE</h1>
        <form action="" onSubmit={Registrar}>
        <div>
            <label htmlFor="registro">CORREO</label>
            <input type="email" id="correo" name="correo" value={correo} onChange={(e)=>setcorreo(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="registro">CONTRASEÑA</label>
            <input type="password" id="contraseña" name="contraseña" value={contraseña} onChange={(e)=>setcontraseña(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="registro">NOMBRE</label>
            <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e)=>setnombre(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="registro">CARGO</label>
            <input type="text" id="cargo" name="cargo" value={cargo} onChange={(e)=>setcargo(e.target.value)}/>
        </div>
        <div>
            <button type="submit" >REGISTRARSE</button>
        </div>
        </form>
        </>
    )
}
export default RegistrarUsuario;