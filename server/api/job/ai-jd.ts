export default defineEventHandler(async (event) => {

  var response = {
    status: false,
    message: "Invalid Request",
    description: ""
  };


  var body = await readBody(event);

  
  // return response;
  console.log(body);

  response = await $fetch("https://testApi.remarkhr.com/job/create-ai-jd", {
    method: 'get',
    query: {
      "job_title": body.job_title
    }
  });

  return response;
})
