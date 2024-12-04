import axios from "axios";

export const fetchData = async () => {
  const { data } = await axios("https://rasadent-webservice-userpanel.liara.run/api/categories");
  return data;
};
