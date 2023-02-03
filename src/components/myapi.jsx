import { useState } from "react";
import { useEffect } from "react";
import React from "react";

const MyApi = (props) => {
   
    const {subtitulo} = props;
    const [apiRest, setapiRest] = useState([]);
    const [buscar, setBuscar] = useState('')
  
    const [sortUp, setsortUp] = useState(true);
    const [sortDown, setsortDown] = useState(false);

    const url = 'https://api.victorsanmartin.com/earthquakes/recent.json';
    
   useEffect(() => {
       getApiDisplay();
    }, []);


    const getApiDisplay = async () => {
        try {
            const responseApiRest = await fetch(url);
            const apiRestRest = await responseApiRest.json();
            setapiRest(apiRestRest.data);
        } catch (error) {
            console.log("Problemas Rutina Consumir Api " + error);
        }
    };

    const Ordenar = () => {
        try {
        const column = 'hour';
        const tipoOrdenacion = [...apiRest].sort((a,b) => {
                    if(sortUp === true) {
                       setsortUp(false);
                       setsortDown(true);
                       if (a[column] < b[column]) return -1;
                       if (a[column] > b[column]) return 1;
                       return 0;
                    }

                    if(sortUp === false){
                        setsortUp(true);
                        setsortDown(false);
                        if (a[column] > b[column]) return -1;
                        if (a[column] < b[column]) return 1;
                        return 0;
                    }
                });
                setapiRest(tipoOrdenacion);
            } catch (error) {
                console.log("Problemas Rutina Ordenar," + error);
            }
          };
       
    

    return(
        <div> 
          <div className="header">
            <h6>{subtitulo}</h6>
            <input className='form-control' value={buscar} onChange={ (event) => setBuscar(event.target.value)}/>
         </div>
         <br></br>
            
        <table className='table table-bordered' class="table table-striped ">
            <thead>
              <tr>
                <th>Fecha</th>
                <th onClick={() => Ordenar()}>Hora</th> 
                 <th>Lugar</th>
                 <th>Magnitud</th>
                 <th>Profundidad</th>
                 <th>info</th>
              </tr>
            </thead>
            <tbody>
                {
                 apiRest.map((item,index) => {
                   let nombre = item.magnitude.toLowerCase()
                   if(buscar === '' || nombre.includes(buscar.toLowerCase()))  {   
                    return ( 
                            <tr key={index}>
                              <td>{item.date}</td>
                              <td>{item.hour}</td>
                              <td>{item.place}</td>
                              <td>{item.magnitude}</td>
                              <td>{item.depth}</td>
                              <td><a href = {item.info} target="_blank">{item.info}</a></td>
                            </tr>
                    )
                    }
                })
                }
            </tbody>
        </table>   
        </div>
    )
};

export default MyApi

