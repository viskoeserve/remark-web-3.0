
export default defineEventHandler(async (event) => {

  var response = {
    status: false,
    message: "Invalid Request",
    data: null,
    user: {}
  };


  var body = await readBody(event);

  var formData = new FormData();

  formData.append("login_type", body.login_type);
  formData.append("mobile_number", body.mobile_number);
  

  response = await $fetch("https://testapi.remarkhr.com/auth/login", {
    method: 'POST',
    body: formData
  });

  

  return response;
})
