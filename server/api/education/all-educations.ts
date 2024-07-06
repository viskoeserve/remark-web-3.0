export default defineEventHandler(async (event) => {

  var response = {
    status: false,
    message: "Invalid Request",
    educations: [],
  };


  var body = await readBody(event);


  // return response;
  

  response = await $fetch("https://testapi.remarkhr.com/website/education/all-educations", {
    method: 'get',
  });


  return response;
})
