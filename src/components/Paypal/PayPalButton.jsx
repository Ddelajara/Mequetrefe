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
                 localStorage.removeItem('carrito');

                // Guardando datos en localStorage
                localStorage.setItem('orderDetails', JSON.stringify({
                    orderID: order.id,
                    creationDate: order.create_time,
                    name: order.payer.name.given_name + ' ' + order.payer.name.surname,
                    email: order.payer.email_address,
                    currency_code: order.purchase_units[0].amount.currency_code,
                    value: order.purchase_units[0].amount.value,
                    producto: order.purchase_units[0].description
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
