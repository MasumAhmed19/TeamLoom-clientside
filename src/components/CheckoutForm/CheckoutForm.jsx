import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "../CheckoutForm/CheckoutForm.css";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const CheckoutForm = ({ currentData, refetch, setPaymentModal }) => {
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    getPaymentIntent();
  }, [currentData]);

  const getPaymentIntent = async () => {
    try {
      const { data } = await axiosSecure.post("/create-payment-intent", currentData);
      setClientSecret(data.clientSecret);
    } catch (err) {
      console.log(err);
    }
  };

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    setProcessing(true);
    event.preventDefault();

    if (!stripe || !elements) {
      setProcessing(false);
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      setProcessing(false);
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setProcessing(false);
      console.log("[error]", error);
      toast.error("Payment method creation failed.");
      return;
    }

    const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: currentData?.employee_name,
        },
      },
    });

    if (confirmError || paymentIntent.status !== 'succeeded') {
      setProcessing(false);
      console.log("[confirmError]", confirmError);
      toast.error("Payment failed. Please try again.");
      return;
    }

    try {
      await axiosSecure.patch('/payment-process', {
        ...currentData,
        transaction_id: paymentIntent.id,
      });

    //   console.log(result)
      toast.success('Payment Successful!');
      refetch();
    } catch (err) {
      console.log(err);
      toast.error("Failed to update payment status in database.");
    } finally {
      setProcessing(false);
      setPaymentModal(false)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn1 w-full rounded-md"
        type="submit"
        disabled={!stripe || !clientSecret || processing}
      >
        Pay {`${currentData?.payableSalary}`}
      </button>
    </form>
  );
};

export default CheckoutForm;






