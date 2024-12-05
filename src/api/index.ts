import axios from "axios";

export const getCategories = async () => {
  const { data } = await axios("https://rasadent-webservice-userpanel.liara.run/api/categories");
  console.log("fetched data");
  return data;
};
