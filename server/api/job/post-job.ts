
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

  
  var jobData = {
    company_status: body.company_status,
    company_id: body.company_id,
    job_details: {
      job_title: body.job_title,
      job_description: body.job_description,
      job_qualification: body.job_qualification,
      job_education: body.job_education,
      job_industry: body.job_industry,
      job_hiring_count: body.job_hiring_count,
      job_minimum_salary: body.job_minimum_salary,
      job_maximum_salary: body.job_maximum_salary,
      job_salary_type: body.job_salary_type,
      job_schedule: body.job_schedule,
      job_ext_experience: body.job_ext_experience,
      job_key_skills: body.job_key_skills
    }
  }


  response = await $fetch("https://testapi.remarkhr.com/job/post-job", {
    method: 'POST',
    body: {job_data: JSON.stringify(jobData)},
    headers: {
      Authorization: body.token
    }
  });

  

  return response;
})
