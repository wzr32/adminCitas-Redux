import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { eliminarCitaActions } from '../actions/CitasActions';


const ListadoCitas = () => { 

    const citas = useSelector((state) => state.citas)

    const dispatch = useDispatch();

    const iterateCitas = () => (
        citas.citas.map(c => (
            <div className="media mt-3" key={c.id}>
                <div className="media-body">
                    <h3 className="mt-0">{c.mascota}</h3>
                    <p className="card-text"><span>Nombre Dueño: {c.dueno}</span></p>
                    <p className="card-text"><span>Fecha: {c.fecha}</span></p>
                    <p className="card-text"><span>Hora: {c.hora}</span>  </p>
                    <p className="card-text"><span>Sintomas: {c.sintomas}</span> <br /> </p>
                    <button 
                        className="btn btn-danger"
                        onClick={() =>  dispatch ((eliminarCitaActions(c.id)))}
                        >Borrar &times;
                        
                    </button>
                </div>
            </div>
        ))
    )

    return (
        <div className="card mt-5">
            <div className="card-body">
            {citas.citas.length === 0 
                ? 
                    <h2 className="card-title text-center">
                        No Hay citas
                    </h2>
                : 
                    <h2 className="card-title text-center">
                        Administra tus citas
                    </h2>
            }

                <div className="lista-citas">
                    {iterateCitas()}
                </div>
            </div>
        </div>
    );
};

export default ListadoCitas;