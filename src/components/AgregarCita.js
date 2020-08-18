import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarCitaActions } from '../actions/CitasActions'
import { ValidacionAction } from '../actions/ValidacionAction';

const AgregarCita = () => {

    const [cita, setCita] = useState({
        mascota: '',
        dueno: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const { mascota, dueno, fecha, hora, sintomas} = cita;


    // agregando el dispatch para las acciones
    const dispatch = useDispatch();

    //creando un arrow function con dispatch para que ejecute el action 
    const agregarNuevaCita = cita => dispatch ( agregarCitaActions(cita) );

    const validarFormulario = estado => dispatch ( ValidacionAction (estado) );


    //useSelector para mostrar el state
    const error = useSelector( (state) => state.error )

    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const randomId = (Math.floor(Math.random() *  10000 * 90000))

    const handleSubmit = e => {
        e.preventDefault()

        //validar formulario con redux
        if (mascota.trim() === '' || dueno.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            validarFormulario(true)
            return;
        }

        validarFormulario(false);
        //agregando id y mandando la accion 
        cita.id = randomId;


        // se manda la accion
        agregarNuevaCita(cita)


        //seteando en blanco el formulario 
        setCita({
            mascota: '',
            dueno: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    return (
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center mb-5">Agrega las citas aqui</h2>
                <form 
                    onSubmit={handleSubmit}
                >
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text"
                                name="mascota" 
                                className="form-control" 
                                placeholder="Nombre Mascota" 
                                onChange={handleChange}
                                value={mascota}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text"
                                name="dueno" 
                                className="form-control"  
                                placeholder="Nombre Dueño de la Mascota"
                                onChange={handleChange}
                                value={dueno}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                            <input 
                                type="date"
                                name="fecha" 
                                className="form-control"
                                onChange={handleChange}
                                value={fecha}
                            />
                        </div>                            

                        <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                        <div className="col-sm-8 col-lg-4">
                            <input 
                                type="time" 
                                name="hora"
                                className="form-control"
                                onChange={handleChange}
                                value={hora}
                            />
                        </div>
                    </div>
                    
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                        <div className="col-sm-8 col-lg-10">
                            <textarea 
                                name="sintomas" 
                                className="form-control"
                                onChange={handleChange}
                                value={sintomas}
                            ></textarea>
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success w-100">Agregar</button>
                        </div>
                    </div>
                </form>
            {error.error 
                ? <div className=" alert alert-danger text-center p-2">Todos los camos son obligatorios</div> 
                : null
            }
            </div>
        </div>
    );
};

export default AgregarCita;