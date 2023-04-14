import "./Status.css";

import success from "../Images/PaymentSuccess.webm";
import fail from "../Images/PaymentFail.webm";
import face from "../Images/Bitmap.webp";

const PaymentStatus = () => {
  const payment = false;
  return (
    <>
      {payment ? (
        <div className="PaymentStatus__success">
          <h2>Order Placed</h2>
          <video loop autoPlay={true} muted>
            <source src={success} type="video/webm" />
          </video>
        </div>
      ) : (
        <>
          <div className="PaymentStatus__fail">
            <img src={face} alt="opssmile" />
            <h2>Uhh ohh the payment was unsuccessful. Please try again.</h2>
            <video loop autoPlay={true} muted>
              <source src={fail} type="video/webm" />
            </video>
            <center>
              <button className="CheckoutCart__placeorder">Retry</button>
            </center>
          </div>
        </>
      )}
    </>
  );
};

export default PaymentStatus;
