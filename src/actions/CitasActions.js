export const agregarCitaActions = (cita) => {
    return {
        type: 'AGREGAR_CITA',
        payload: cita
    }
}

export const eliminarCitaActions = (id) => {
    return {
        type: 'ELIMINAR_CITA',
        payload: id
    }
}