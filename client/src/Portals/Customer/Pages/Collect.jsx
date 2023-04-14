import "./Collect.css";

const collectinput = [
  {
    lable: "Name *",
    placeholder: "Enter your name",
    required: true,
    type: "text",
    pattern: "",
    name: "name",
  },
  {
    lable: "Phone Number *",
    placeholder: "Enter your phone number",
    required: true,
    type: "Number",
    pattern: "",
    name: "phone",
  },
  {
    lable: "Date of Birth *",
    placeholder: "Enter your date of birth",
    required: true,
    type: "date",
    pattern: "",
    name: "dob",
  },

  {
    lable: "Email Id",
    placeholder: "Enter your email id",
    required: true,
    type: "email",
    pattern: "",
    name: "email",
  },
];
const Collectinfo = () => {
  return (
    <div className="Collectinfo">
      <h3>Before completing the payment please fill in details</h3>
      <h5>fields marked with * are compulsory</h5>
      <form>
        {collectinput.map((item) => {
          return (
            <div className="Collect__input">
              <label htmlFor={item.name}>{item.lable}</label>
              <input
                type={item.type}
                name={item.name}
                id={item.name}
                placeholder={item.placeholder}
              />
            </div>
          );
        })}
        <div className="Collect__payment">
          <h2>Choose Payment method</h2>
          <label className="container">
            Online Payment
            <input type="radio" name="radio" />
            <span className="checkmark veg_radio"></span>
          </label>

          <label className="container">
            Cash Payment
            <input type="radio" name="radio" />
            <span className="checkmark veg_radio"></span>
          </label>
        </div>

        <center>
          <button
            className="CheckoutCart__placeorder"
            style={{ marginTop: "24px" }}
          >
            Pay
          </button>
        </center>
      </form>
    </div>
  );
};

export default Collectinfo;
