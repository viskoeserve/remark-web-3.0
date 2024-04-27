export default defineEventHandler(async (event) => {

  var response = {
    status: false,
    message: "Invalid Request",
    count: {
      searched_job: 0,
      all_jobs: 0,
      filtered_jobs: 0
    },
    filter: [],
    jobs: [],
    skills: [],
    job_schedule: [],
    locations: []
  };


  var body = await readBody(event);

  
  // return response;

  console.log(body);
  

  response = await $fetch("https://testapi.remarkhr.com/job/filter-jobs", {
    method: 'get',
    query: {
      title: body.title,
      offset: body.offset,
      filters: body.filter
    },
    headers: {
      Authorization: body.token
    }
  });

  return response;
})
