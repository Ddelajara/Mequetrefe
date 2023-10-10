import { PayPalButtons } from "@paypal/react-paypal-js"
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const PayPalButton = ({invoice, totalValue}) => {

    const navigate = useNavigate();

  return (
    <PayPalButtons 
        createOrder = {(data, actions) =>{
            return actions.order.create({
                purchase_units: [
                    {
                        description: invoice,
                        amount: {
                            value: totalValue
                        }

                    }
                ]
            })
        }}

        onApprove={async (data, actions) => {
            const order = await actions.order?.capture();
            console.log(order); // Aquí puedes ver los detalles del pedido aprobado

                localStorage.removeItem('carrito');

                // Guardando datos en localStorage
                localStorage.setItem('orderDetails', JSON.stringify({
                    orderID: order.id,
                    creationDate: order.create_time,
                    name: order.payer.name.given_name + ' ' + order.payer.name.surname,
                    email: order.payer.email_address
                }));

                navigate('/PagoOk')

        }}
    
        onError={(err) => {
            console.error(err);
            Swal.fire({
                icon: 'error',
                title: 'Fallo en la transacción',
                text: 'Reintentar pago',
                timer: 2700
            })
        }}
    
        onCancel={(data) => {
            Swal.fire({
                icon: 'error',
                title: 'Fallo en la transacción',
                text: 'Usuario canceló el pago',
                timer: 2700
            })
        }}
    />
  )
}
