export default defineEventHandler(async (event) => {

  var response = {
    status: false,
    message: "Invalid Request",
    company: {},
    jobs: []
  };


  var body = await readBody(event);

  
  // return response;
  

  response = await $fetch("https://testapi.remarkhr.com/website/company/single-company", {
    method: 'get',
    query: {
      "slug": body.slug
    },
  });

  console.log(response);

  return response;
})
