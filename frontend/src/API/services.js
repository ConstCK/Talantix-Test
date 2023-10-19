import axios from "axios";
import { baseUrl, establishmentUrl } from "@/constants/data.js";
axios.defaults.baseURL = "http://localhost:8000/api";

const sendData = async (data) => {
  const [city, department, employee, brigade] = data;

  return await axios({
    url: establishmentUrl,
    method: "post",
    data: {
      city: city,
      department: department,
      employee: employee,
      brigade: brigade,
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("Ощибка запроса:", error);
    });
};

export { sendData };
