import "./Setting.css";

// importing

import SettingUser from "../Components/SettingUsers";
import SettingCoupon from "../Components/SettingCoupon";

const Setting = () => {
  return (
    <div className="AdminSetting">
      <SettingUser />
      <SettingCoupon />
    </div>
  );
};
export default Setting;
