import axios from 'axios';


export const getTeachers = async () => {
  let url = "http://localhost:3000/api/teachers";
  try {
    const response = await axios.get(url);
    console.log(response);
    console.log("si funciono")
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error('Error fetching teachers', error);
    return [];
  }
};
