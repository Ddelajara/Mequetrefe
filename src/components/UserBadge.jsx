
export const UserBadge = ({ firstName, lastName }) => {
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
            <p style={{ margin: 0 }}>dadelajara@udd.cl / Logout</p> 
        </div>
    </div>
    </>
)
}
