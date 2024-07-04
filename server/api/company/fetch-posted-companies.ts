export default defineEventHandler(async (event) => {

  var response = {
    status: false,
    message: "Invalid Request",
    companies: [],
  };


  var body = await readBody(event);

  
  // return response;
  

  response = await $fetch("https://testapi.remarkhr.com/employers/fetch-posted-companies", {
    method: 'get',
    headers: {
      'Authorization': body.token
    },
    query: {
      "slug": body.slug
    },
  });

  console.log(response);

  return response;
})
