
export default defineEventHandler(async (event) => {

  var response = {
    status: false,
    message: "Invalid Request",
    data: null,
  };


  var body = await readBody(event);

  // var formData = new FormData();

  // formData.append('company_status', body.company_status);
  // formData.append('company_id', body.company_id);
  // formData.append('job_details', {
  //   job_title: body.job_title,
  //   job_description: body.job_description,
  //   job_qualification: body.job_qualification,
  //   job_education: body.job_education,
  //   job_industry: body.job_industry,
  //   job_hiring_count: body.job_hiring_count,
  //   job_minimum_salary: body.job_minimum_salary,
  //   job_maximum_salary: body.job_maximum_salary,
  //   job_salary_type: body.job_salary_type,
  //   job_schedule: body.job_schedule,
  //   job_ext_experience: body.job_ext_experience,
  //   job_key_skills: body.job_key_skills
  // });
  
  var formData = new FormData();

  formData.append('company_logo', body.formData.company_logo);
  formData.append('company_name', body.formData.company_name);
  formData.append('company_website', body.formData.company_website);
  formData.append('company_email', body.formData.company_email);
  formData.append('company_phone', body.formData.company_phone);
  formData.append('company_des', body.formData.company_des);
  formData.append('company_location', body.formData.company_location);
  formData.append('company_city', body.formData.company_city);
  formData.append('company_state', body.formData.company_state);


  response = await $fetch("https://testapi.remarkhr.com/employers/create-company", {
    method: 'POST',
    body: formData,
    headers: {
      Authorization: body.token
    }
  });

  

  return response;
})
