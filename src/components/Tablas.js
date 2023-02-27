import React from 'react'
import DataTable from 'react-data-table-component';
import {useState, useEffect} from 'react';
import Checkbox from "@mui/material/Checkbox";
import axios from 'axios'



const Tablas = () => {
 
    const[data,setData]=useState([]);
   

    
    const columns = [
        {

        name:'Codigo usuario',
        selector:(row) => row.id_usuario

        },
        {
            
        name:'Usuario',
        selector:(row) => row.nombre_usuario    
        },
        {
            
        name:'Contraseña',
        selector:(row) => row.contraseña    
        },
        {
            
        name:'Nombre',
        selector:(row) => row.nombre_persona    
        },
        {
            
        name:'Apellido',
        selector:(row) => row.apellido    
        },
        {
            
        name:'DNI',
        selector:(row) => row.dni    
        },
        {
            
        name:'Genero',
        selector:(row) => row.id_genero    
        },
        {
            
        name:'Telefono',
        selector:(row) => row.telefono    
        },
        {
            
        name:'Jerarquia',
        selector:(row) => row.id_jerarquia
        },
        {
            
        name:'Estado',
        selector:(row) => row.id_estado ? "Activo": "Inactivo"   
        }
    ];

   

    useEffect(()=>{
      axiosTabla(); 
      
  
    }, []);

    async function axiosTabla() {
      const response= await axios.get('http://localhost:3001/reportes/usuarios')
      const usuarios = await response.data.user;
      setData(usuarios);
    }
    

  
  return (
    
      <DataTable
      title='Usuarios'
      columns={columns}
      data={data}
     
      pagination
      selectableRows
      selectableRowsComponent={Checkbox}
    
      />
   
  )
}

export default Tablas
