export default defineEventHandler(async (event) => {

  var response = {
    status: false,
    message: "Invalid Request",
    data: null
  };


  var body = await readBody(event);

  var formData = new FormData();

  formData.append('job_id', body.job_id);
  formData.append('user_id', body.user_id);
  formData.append('employer_id', body.employer_id);


  response = await $fetch("https://apimanager.remarkhr.com/userapply", {
    method: 'post',
    body: formData,
  });

  return response;
})
