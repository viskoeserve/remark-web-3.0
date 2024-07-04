
export default defineEventHandler(async (event) => {

  var response = {
    status: false,
    message: "Invalid Request",
    data: null,
    user: {}
  };


  var body = await readBody(event);

  var formData = new FormData();

  formData.append("role", body.role);
  formData.append("user_name", body.user_name);
  formData.append("user_profile", body.user_profile);
  formData.append("user_email", body.user_email);
  formData.append("user_mobile_number", body.user_mobile_number);
  formData.append("user_organization", body.user_organization);
  formData.append("user_organization_type", body.user_organization_type);
  formData.append("user_display_mobile_number", body.user_display_mobile_number);
  

  response = await $fetch("https://testapi.remarkhr.com/auth/web-register", {
    method: 'POST',
    body: formData
  });

  

  return response;
})
