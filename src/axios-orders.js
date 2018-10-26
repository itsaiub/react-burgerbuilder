import Axios from "axios";

const instance = Axios.create({
  baseURL: `https://react-burgerbuilders.firebaseio.com`
});

export default instance;
//https://react-burgerbuilders.firebaseio.com/ingredients