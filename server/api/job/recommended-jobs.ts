export default defineEventHandler(async (event) => {

  var response = {
    status: false,
    message: "Invalid Request",
    jobs: []
  };


  var body = await readBody(event);

  
  // return response;
  console.log(body);

  response = await $fetch("https://testapi.remarkhr.com/job/recommended-jobs", {
    method: 'get',
    headers: {
      Authorization: body.token
    }
  });

  return response;
})
