export default defineEventHandler(async (event) => {

  var response = {
    status: false,
    message: "Invalid Request",
    countJobs: 0,
    showRegister: false,
    jobs: []
  };


  var body = await readBody(event);

  
  // return response;
  

  response = await $fetch("https://testapi.remarkhr.com/job/fetch-posted-jobs", {
    method: 'get',
    headers: {
      Authorization: body.token
    }
  });

  return response;
})
