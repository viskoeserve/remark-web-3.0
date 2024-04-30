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
      "l_source": "website",
      "l_assigned_by": "sapna_maru",
      "l_category": "newuser"
    }
  });

  return response;
})
