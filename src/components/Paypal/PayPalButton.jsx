import { PayPalButtons } from "@paypal/react-paypal-js"

export const PayPalButton = ({invoice, totalValue}) => {
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
            alert('Pago realizado con éxito!');
        }}
    
        onError={(err) => {
            console.error(err);
            alert('Ocurrió un error al procesar el pago.');
        }}
    
        onCancel={(data) => {
            alert('Pago cancelado por el usuario.');
        }}
    />
  )
}
