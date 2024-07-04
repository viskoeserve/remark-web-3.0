
export default defineEventHandler(async (event) => {

  var response = {
    status: false,
    message: "Invalid Request",
    data: null,
    user: {}
  };


  var body = await readBody(event);

  var formData = new FormData();

  formData.append("otp", body.otp);
  

  response = await $fetch("https://testapi.remarkhr.com/auth/new-web-validate-otp", {
    method: 'POST',
    headers: {
      Authorization: body.token
    },
    body: formData
  });

  

  return response;
})
