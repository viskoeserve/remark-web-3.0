
export default defineEventHandler(async (event) => {

  var response = {
    status: false,
    message: "Invalid Request",
    categories: [],
    top_companies: [],
    recent_jobs: []
  };


  var body = await readBody(event);

  
  // return response;
  

  response = await $fetch("https://testapi.remarkhr.com/website/home/main", {
    method: 'get',
    headers: {
      Authorization: body.token
    }
  });

  return response;
})
