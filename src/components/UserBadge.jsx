import { useNavigate } from 'react-router-dom';
//import { useState } from 'react'
import { useContext } from 'react';
import { UserContext } from '../context/user/userContext';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const UserBadge = ({ firstName, lastName, correo }) => {

    const navigate = useNavigate();
    const [state, dispatch] = useContext(UserContext)
    
    function onLogout() {

        // Aquí borrar tokens, redirigir al usuario
        //alert('Sali de la sesión');
    
        MySwal.fire({
            title: 'Logout?',
            text: "Estas seguro de cerrar tu sesión!",
            icon: 'advertencia',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, cerrar!'
          }).then((result) => {
            if (result.isConfirmed) {
                    localStorage.removeItem('token')
                    dispatch({
                        type:'LOGOUT'
                    })
                    navigate('/')
                Swal.fire(
                'Logout exitoso!',
                'Se ha cerrado la sesión',
                'success'
              )
            }
          })
    
        
    }

    return (
    <>
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{
            background: 'black',
            color: 'white',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '10px' // espacio entre el círculo y el correo
        }}>
            {firstName[0]}{lastName[0]}
        </div>
        <div>
            {/* <p style={{ margin: 0 }}>{correo} / Logout</p>  */}
            <p style={{ margin: 0 }}>{correo} / 
                <a href="#" onClick={(e) => { 
                    e.preventDefault(); 
                    onLogout(); 
                }}>
                    Logout
                </a>
            </p>

        </div>
    </div>
    </>
)
}
