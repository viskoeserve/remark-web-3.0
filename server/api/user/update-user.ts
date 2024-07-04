
export default defineEventHandler(async (event) => {

  var response = {
    status: false,
    message: "Invalid Request",
    data: null,
    user: {}
  };


  var body = await readBody(event);

  // var formData = new FormData();

  // formData.append("user_id", body.user_id);
  // formData.append("user_name", body.user_name);
  // formData.append("user_email", body.user_email);
  // formData.append('user_profile', body.user_profile);
  // formData.append("user_bio", body.user_bio);
  // formData.append("user_organization", body.user_organization);
  // formData.append('user_organization_type', body.user_organization_type);
  // formData.append('user_mobile', body.user_mobile);
  // formData.append('user_display_mobile_number', body.user_display_mobile_number);
  // formData.append('user_dob', body.user_dob);
  // formData.append('user_skills', body.user_skills);
  // formData.append('user_experience_ext', body.user_experience_ext);
  // formData.append('user_qualification_ext', body.user_qualification_ext);
  // formData.append('user_languages', body.user_languages);
  // formData.append('user_address', body.user_address);
  // formData.append('user_state', body.user_state);
  // formData.append('user_city', body.user_city);

  var userData = {
    "user_id" : body.user_id,
    "user_name": body.user_name,
    "user_email": body.user_email,
    "user_profile": body.user_profile,
    "user_bio": body.user_bio,
    "user_organization": body.user_organization,
    "user_organization_type": body.user_organization_type,
    "user_mobile": body.user_mobile,
    "user_display_mobile_number": body.user_display_mobile_number,
    "user_dob": "",
    "user_skills": body.user_skills,
    "user_experience_ext": body.experiences,
    "user_qualifications_ext": body.qualifications,
    "user_languages": body.user_languages,
    "user_address": body.user_address,
    "user_state": body.user_state,
    "user_city": body.user_city,
    "user_country": "India",
    "user_type": body.user_type,
    "user_job_location": body.user_job_location,
    "user_referral_code": ""
  }

  response = await $fetch("https://testapi.remarkhr.com/user/update-user", {
    method: 'POST',
    body: {user_data: JSON.stringify(userData)}
  });

  return response;
})
