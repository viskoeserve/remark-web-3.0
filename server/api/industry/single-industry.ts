export default defineEventHandler(async (event) => {

  var response = {
    status: false,
    message: "Invalid Request",
    industry: {},
    jobs: []
  };


  var body = await readBody(event);


  // return response;
  

  response = await $fetch("https://testapi.remarkhr.com/website/industry/single-industry", {
    method: 'get',
    query: {
      "industry_slug": body.slug
    },
    headers: {
      "Authorization": body.token
    }
  });


  return response;
})
