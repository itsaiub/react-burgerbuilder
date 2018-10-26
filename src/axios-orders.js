import Axios from "axios";

const instance = Axios.create({
  baseURL: `https://react-burgerbuilders.firebaseio.com/`
});

export default instance;
