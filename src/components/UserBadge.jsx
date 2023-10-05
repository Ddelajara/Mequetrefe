
export const UserBadge = ({ firstName, lastName, correo }) => {

    function onLogout() {
        alert('Sali de la sesión');
        localStorage.removeItem('token')
        // Aquí puedes agregar más lógica si es necesario, por ejemplo, borrar tokens, redirigir al usuario, etc.
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
