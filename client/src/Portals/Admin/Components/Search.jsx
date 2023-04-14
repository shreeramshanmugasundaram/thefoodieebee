import searchimg from "../Images/search.svg";

import "./Search.css";

const AdminSearch = () => {
  return (
    <div className="AdminSearch">
      <img src={searchimg} alt="adminsearch" />
      <input type="text" name="" id="" placeholder="Search anything... " />
    </div>
  );
};

export default AdminSearch;
