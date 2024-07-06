export default defineEventHandler(async (event) => {

  var response = {
    status: false,
    message: "Invalid Request",
    industries: [],
  };


  var body = await readBody(event);


  // return response;
  

  response = await $fetch("https://testapi.remarkhr.com/website/industry/all-industries", {
    method: 'get',
  });


  return response;
})
