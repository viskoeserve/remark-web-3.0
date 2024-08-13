export default defineEventHandler(async (event) => {

  var response = {
    status: "failure",
    message: "Invalid Request"
  };


  var body = await readBody(event);

  
  // return response;
  

  response = await $fetch("https://visko.group/api/crm/leads/create-lead", {
    method: 'post',
    body: {
      "key" : "Remark",
      "l_name" : body.name,
      "l_contact" : body.number,
      "l_description": body.description,
      "l_source": body.source,
      "l_assigned_by": "kratika_yadav",
      "l_category": "newuser"
    }
  });

  return response;
})
