// New Empyloee
const newEmpyloee = { name: "", password: "", empid: "" };

// edit menu (admin)
// new addons(post)
const newAddons = { addonid: "", name: "", addons: "" };

// new dish (post) [images]
const newDish = {
  dishid: "",
  name: "",
  img: "https://thefoodie.com/images/d0012.webp",
  des: "",
  addons: ["addonid(A002)", "addonid(A004)"],
  price: "",
  category: "",
  type: "Veg",
  rating: "",
};
// newDish => img:"buffer" => file(convert-webp,png) => folder (save[name]:"dishid(D0012).webp")=> Img url = > database(other things)

// edit dish (put)
// previous dish data have to taken
const renewDish = {
  dishid: "",
  name: "",
  img: "https://thefoodie.com/images/d0012.webp",
  des: "",
  addons: ["addonid(A002)", "addonid(A004)"],
  price: "",
  category: "",
  type: "Veg",
  rating: "",
};
// after change

// delete dish
const deldish = { dishid: "D002" };
// delete images too

// - ---------------------------------------------------------------------------------------------
// customer Page input (get)
// search, filter, category

// customer Page output
const last = {
  personalinfo: { name: "", email: "", phone: "", dob: "", ptype: "" },
  orders: [
    { id: "D01", addons: ["A01"], qty: "" },
    { id: "D01", addons: ["A01"], qty: "" },
  ],
  table: "5",
  total: "290",
  user: "cusotmer",
};
// last => Payment(calucations)  => logs(both)=> database(order, status : incomplete)

// - ---------------------------------------------------------------------------------------------

// file managment

// first phase = /scustomer
// second phase = /searchquery
// third phase = folder(controllers-> file)

// thefoodbie.com/scustomer/searchquery = > fuction(serach query)

// - - ---------------------------------------------------------------------------------------------------

// ####### kitchen Page ###### :

// emplyoee data (get)
// live dishes (get)

const livelist = [
  {
    orderid: "101",
    table: "5",
    dishes: [
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
      { name: "Panner Tikka", qty: "4", addon: ["chesse", "corn"] },
    ],
    status: "incomplete",
  },
];
// live dishes status : complete(oncomplete) (changes in the database) send orderid
// live table status:
const tablelist = [
  { tableno: "1", status: "complete" },
  { tableno: "2", status: "incomplete" },
  { tableno: "3", status: "incomplete" },
  { tableno: "4", status: "incomplete" },
  { tableno: "5", status: "complete" },
  { tableno: "6", status: "incomplete" },
  { tableno: "7", status: "incomplete" },
  { tableno: "8", status: "incomplete" },
];
// Kitchen History
// 1. get request based on dates and search query

// ####### staff portal ####
// login
const stafflast = {
  personalinfo: { name: "", email: "", phone: "", dob: "", ptype: "" },
  orders: [
    { id: "D01", addons: ["A01"], qty: "" },
    { id: "D01", addons: ["A01"], qty: "" },
  ],
  table: "5",
  total: "290",
  user: "staff",
};
