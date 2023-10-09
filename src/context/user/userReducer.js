export const userReducer = (state, action) => {

    switch(action.type){
        case 'LOGIN':
            return{
                ...state,
                token: action.payload
            }
        case 'LOGOUT':
            localStorage.removeItem('carrito');  // Elimina el carrito del localStorage
            return{
                ...state,
                token: null
            }
        default:
            return state;
    }
}

