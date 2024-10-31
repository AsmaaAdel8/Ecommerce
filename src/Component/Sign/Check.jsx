import axios from "axios";

export const GetUserData = () => {
  var GetData = new XMLHttpRequest();
  GetData.open("GET", "http://localhost:1337/api/user-infos", true);
  GetData.send();
  if (GetData.readyState === 4 && GetData.status === 200) {
    console.log(GetData.response);
  }
};
export const SendUserData = (UserData) => {
  var SendData = new XMLHttpRequest();
  SendData.open("POST", "http://localhost:1337/api/user-infos", true);
  SendData.setRequestHeader("userInfo", UserData);
  //   SendData.send();
  if (SendData.readyState === 4 && SendData.status === 200) {
    console.log(SendData.response);
  }
};
export const DeleteUserData = () => {
  var DeleteData = new XMLHttpRequest();
  DeleteData.open("DELETE", "http://localhost:1337/api/user-infos", true);
  DeleteData.send();
  if (DeleteData.readyState === 4 && DeleteData.status === 200) {
    console.log(DeleteData.response);
  }
};
export const SetNewProduct = async(NewProduct) => {  
  try {
  await axios
    .post("http://localhost:1337/api/product", NewProduct)
    .then((res) => {
      console.log(res.data);
    });
  } catch (error) {
    console.log(error);
  }
};
export const DeleteProduct = () => {
  var DeleteProduct = new XMLHttpRequest();
  DeleteProduct.open("DELETE", "http://localhost:1337/api/product", true);
  DeleteProduct.send();
  if (DeleteProduct.readyState === 4 && DeleteProduct.status === 200) {
    console.log(DeleteProduct.response);
  }
};
export const GetProductData = async () => {
  const res = await axios
    .get("http://localhost:1337/api/product?populate=*");
    return (res.data.data);
}
