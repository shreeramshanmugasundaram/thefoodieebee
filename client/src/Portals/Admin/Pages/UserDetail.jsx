import "./UserDetail.css";
const data = [
  {
    name: "shreeram Shanmugasundaram",
    mob: "9970116791",
    dob: "14/04/2003",
    email: "shreeram.shanmugasundaram_entc21@gmail.com",
  },
  {
    name: "shreeram Shanmugasundaram",
    mob: "9970116793",
    dob: "14/04/2003",
    email: "shreeram.shanmugasundaram_entc21@gmail.com",
  },
  {
    name: "shreeram Shanmugasundaram",
    mob: "9970116794",
    dob: "14/04/2003",
    email: "shreeram.shanmugasundaram_entc21@gmail.com",
  },
  {
    name: "shreeram Shanmugasundaram",
    mob: "9970116791",
    dob: "14/04/2003",
    email: "shreeram.shanmugasundaram_entc21@gmail.com",
  },
  {
    name: "shreeram Shanmugasundaram",
    mob: "9970116793",
    dob: "14/04/2003",
    email: "shreeram.shanmugasundaram_entc21@gmail.com",
  },
  {
    name: "shreeram Shanmugasundaram",
    mob: "9970116794",
    dob: "14/04/2003",
    email: "shreeram.shanmugasundaram_entc21@gmail.com",
  },
  {
    name: "shreeram Shanmugasundaram",
    mob: "9970116791",
    dob: "14/04/2003",
    email: "shreeram.shanmugasundaram_entc21@gmail.com",
  },
  {
    name: "shreeram Shanmugasundaram",
    mob: "9970116793",
    dob: "14/04/2003",
    email: "shreeram.shanmugasundaram_entc21@gmail.com",
  },
  {
    name: "shreeram Shanmugasundaram",
    mob: "9970116794",
    dob: "14/04/2003",
    email: "shreeram.shanmugasundaram_entc21@gmail.com",
  },
  {
    name: "shreeram Shanmugasundaram",
    mob: "9970116791",
    dob: "14/04/2003",
    email: "shreeram.shanmugasundaram_entc21@gmail.com",
  },
  {
    name: "shreeram Shanmugasundaram",
    mob: "9970116793",
    dob: "14/04/2003",
    email: "shreeram.shanmugasundaram_entc21@gmail.com",
  },
  {
    name: "shreeram Shanmugasundaram",
    mob: "9970116794",
    dob: "14/04/2003",
    email: "shreeram.shanmugasundaram_entc21@gmail.com",
  },
];

const UserDetail = () => {
  return (
    <div className="AdminTable">
      <h3>User Detail</h3>
      <div>
        <div className="AdminTable__userdetail__header">
          <div>Name</div>
          <div>Mobile number</div>
          <div>Date of Birth</div>
          <div>Email Id</div>
        </div>
        <div className="AdminTable__content">
          {data.map((item) => {
            return (
              <div className="AdminTable__userdetail__row" key={item?.mob}>
                <div>{item?.name}</div>
                <div>{item?.mob}</div>
                <div>{item?.dob}</div>
                <div className="AdminTable__emailid">{item?.email}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
