export const obtenerStateStorage = () => {
    const citasStorage = localStorage.getItem('citas')
    if ( citasStorage === null){
        return undefined;
    }
    return JSON.parse(citasStorage)
}

export const guardarStateStorage = state => {
    const guardarCita = JSON.stringify(state)
    localStorage.setItem('citas', guardarCita)
}