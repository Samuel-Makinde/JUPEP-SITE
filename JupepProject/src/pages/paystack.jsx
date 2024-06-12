import PaystackPop from "@paystack/inline-js";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";

const Paystack = () => {
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [blurBackground, setBlurBackground] = useState(false);
  const paystackPayment = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("this was clicked");
      const paystack = new PaystackPop();
      console.log("this was clicked 2");
      paystack.newTransaction({
        key: "pk_test_57f928ef3b08dc974a816c89f7687c37e9afb03c",
        email: "samuelmakinde19@gmail.com",
        amount: 2000,
        userName: "samue makinde",
        onSuccess(transaction) {
          axios
            .post("https://api.liight.com.ng/v1/verifypaystack", {
              ref: transaction.reference,
              type: sessionStorage.getItem("type"),
              ver_id: sessionStorage.getItem("verId"),
            })
            .then((response) => {
              if (response.status === 201) {
                setLoading(false);

                const paymentId = response.data.data.payment_id;

                sessionStorage.setItem("paymentId", paymentId);

                const messageResponse = response.data.message;

                toast.success(response.data.message, {
                  position: toast.POSITION.TOP_RIGHT,
                });
                setOpenModal(true);
                setBlurBackground(true); // Apply blur effect when modal is open
              } else {
                setLoading(false);
                // Handle other response statuses if needed
              }
            })
            .catch((error) => {
              setLoading(false);
              // Handle any errors during verification
              toast.error(error, {
                position: toast.POSITION.TOP_RIGHT,
              });
            });
        },
        onCancel() {
          setLoading(false);
          toast.error("You have canceled the transaction", {
            position: toast.POSITION.TOP_RIGHT,
          });
        },
      });
      //   }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <button className="bg-blue-600 h-14" onClick={paystackPayment}>
        Payment
      </button>
    </div>
  );
};

export default Paystack;
