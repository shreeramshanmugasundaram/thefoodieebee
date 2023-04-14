import { useState } from "react";

import { createKitchenUser } from "../../../action/createKitchenUser";
const SettingUser = () => {
  const [kformdata, setKformdata] = useState({
    kitchenusername: "",
    kitchenuserpassword: "",
  });
  const [sformdata, setSformdata] = useState({});
  const handlekchange = (e) => {
    setKformdata({ ...kformdata, [e.target.name]: e.target.value });
  };
  const handleschange = (e) => {
    setSformdata({ ...sformdata, [e.target.name]: e.target.value });
  };
  const createKUser = () => {
    console.log("kitchenUser");
    createKitchenUser(kformdata);
    setKformdata({ kitchenusername: "", kitchenuserpassword: "" });
  };
  const createSUser = () => {
    console.log("staff user");
  };
  return (
    <>
      <h1>Setting</h1>
      <h3>Create new Account</h3>
      <div className="AdminNewAccount">
        <div style={{ marginBottom: "32px" }}>
          <h5>Kitchen Portal</h5>
          <input
            type="text"
            name="kitchenusername"
            placeholder="Username"
            onChange={handlekchange}
            value={kformdata.kitchenusername}
          />
          <input
            type="password"
            name="kitchenuserpassword"
            placeholder="Password"
            onChange={handlekchange}
            value={kformdata.kitchenuserpassword}
          />
          <button onClick={createKUser}>Create</button>
        </div>

        <div>
          <h5>Staff Portal</h5>
          <input
            type="text"
            name="staffusername"
            placeholder="Username"
            onChange={handleschange}
          />
          <input
            type="password"
            name="staffpassword"
            placeholder="Password"
            onChange={handleschange}
          />
          <button onClick={createSUser}>Create</button>
        </div>
      </div>
    </>
  );
};

export default SettingUser;
