export default defineEventHandler(async (event) => {

  var response = {
    status: false,
    message: "Invalid Request",
    jobs: []
  };


  var body = await readBody(event);

  
  // return response;
  console.log(body);

  response = await $fetch("https://apimanager.remarkhr.com/savejobslist", {
    method: 'get',
    query: {
      "user_id": body.user_id
    }
  });

  return response;
})
