
export default defineEventHandler(async (event) => {

  var response = {
    status: false,
    message: "Invalid Request",
    data: null,
    user: null
  };


  var body = await readBody(event);
  

  var formData = new FormData();

  formData.append("otp", body.otp);
  formData.append("firebase_token", body.firebase_token);
  

  response = await $fetch("https://testapi.remarkhr.com/auth/verify-otp", {
    method: 'POST',
    body: formData,
    headers: {
      Authorization: body.token
    }
  });

  return response;
})
