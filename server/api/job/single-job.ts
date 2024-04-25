export default defineEventHandler(async (event) => {

  var response = {
    status: false,
    message: "Invalid Request",
    job: {}
  };


  var body = await readBody(event);

  
  // return response;
  

  response = await $fetch("https://testapi.remarkhr.com/website/job/single-job", {
    method: 'get',
    query: {
      "slug": body.slug
    },
    headers: {
      Authorization: body.token
    },
  });

  return response;
})
