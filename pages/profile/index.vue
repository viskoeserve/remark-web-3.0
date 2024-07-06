<template>
  <div v-if="userStore.user.isLogged" class="w-full flex px-5 gap-x-5 mt-5">
    <div class="w-2/12 bg-white relative rounded-lg">
      <div
        class="flex items-center justify-center pt-4 absolute top-0 h-52 w-full bg-teal-800"
      >
        <div class="flex justify-center w-full">
          <div class="text-center">
            <div class="flex justify-center">
              <div
                class="w-20 h-20 rounded-full"
                :style="`background-image: url(${userStore.user.user_photo}); background-size:cover; background-position:center; background-repeat:no-repeat`"
              >
                <!-- <img  :src="userStore.user.user_photo" /> -->
              </div>
            </div>
            <div class="h-1"></div>
            <p class="text-md text-white font-semibold">
              {{ userStore.user.user_name }}
            </p>
            <p class="text-slate-200">{{ userStore.user.user_profile }}</p>
          </div>
        </div>
      </div>
      <div class="h-2"></div>
      <div class="w-full absolute top-5">
        <div class="h-44"></div>
        <div class="py-3 bg-remark-light h-full shadow-lg rounded-t-2xl">
          <div v-for="(menu, index) in menus" :key="index">
            <div class="pl-10 py-3 mb-2" v-if="menu.show">
              <a
                @click="fetchData(menu.slug)"
                href="javascript:void(0)"
                class="text-teal-800 font-semibold"
              >
                <VIconText :icon="menu.icon" :text="menu.title" gap="5" />
              </a>
            </div>
          </div>
          <div class="pl-10 py-3 mb-2">
            <a
              @click="doLogout"
              href="javascript:void(0)"
              class="text-red-600 py-2"
              ><VIconText icon="ic:baseline-logout" text="Logout" gap="5"
            /></a>
          </div>
        </div>
      </div>
    </div>
    <div class="w-10/12 p-3">
      <div v-if="activeMenu == 'profile'" class="profile">
        <div v-if="!profile.updateProfile.isEditStarted">
          <div
            class="w-full bg-remark-light p-5 rounded-lg shadow-xl shadow-slate-100 border border-teal-100"
          >
            <div class="flex gap-x-5 items-center">
              <div
                class="w-20 h-20 rounded-full"
                :style="`background-image: url(${userStore.user.user_photo}); background-size:cover; background-position:center; background-repeat:no-repeat`"
              >
                <!-- <img  :src="userStore.user.user_photo" /> -->
              </div>

              <div>
                <p class="text-2xl font-semibold">
                  {{ userStore.user.user_name }}
                </p>
                <p class="text-slate-500">{{ userStore.user.user_profile }}</p>
                <!--  -->
                <a href="javascript:void(0)" class="text-red-500 underline text-xs" @click="startEditProfile" > Edit Profile </a>
              </div>
              <div v-if="userStore.user.user_type == '0'">
                <p class="text-3xl font-semibold text-slate-800">
                  Complete Profile
                </p>
                <p class="text-slate-400">
                  Please Complete your profile to get the best opportunities
                  available in Remark
                </p>
                <!-- <button class="px-5 py-2 bg-teal-800 text-white my-1">Edit Profile</button> -->
              </div>
            </div>
          </div>
          <div class="h-10"></div>
          <div
            class="w-full bg-remark-light p-5 rounded-lg shadow-xl shadow-slate-100 border border-teal-100"
          >
            <div v-if="userStore.user.user_type == '1'">
              <p class="text-lg font-bold">Bio</p>
              <div class="h-1"></div>
              <p class="text-slate-500">
                {{
                  userStore.user.user_bio != "" ? userStore.user.user_bio : "NA"
                }}
              </p>
            </div>
            <div class="h-8"></div>
            <div class="flex justify-between">
              <div class="w-6/12">
                <div>
                  <p class="text-lg font-bold">Email</p>
                  <div class="h-1"></div>
                  <p class="text-slate-500">
                    {{
                      userStore.user.user_email != ""
                        ? userStore.user.user_email
                        : "NA"
                    }}
                  </p>
                </div>
                <div class="h-8"></div>
                
              </div>
              <div class="w-6/12">
                <p class="text-lg font-bold">Mobile Number</p>
                <div class="h-1"></div>
                <p class="text-slate-500">
                  {{ userStore.user.user_mobile ?? "NA" }}
                </p>
              </div>
              
            </div>
            <div class="flex justify-between gap-x-2">
              <div v-if="userStore.user.user_type == '1'" class="w-6/12">
                <div>
                  <div>
                    <p class="text-lg font-bold">Work Experience</p>
                    <div class="h-1"></div>
                    <div v-if="userStore.getWorkExperience.length > 0">
                      <div class="mb-2 border px-2 rounded-lg" v-for="(experience, ind) in userStore.getWorkExperience" :key="ind">
                        <h5 class="text-lg"> {{ experience.title }} </h5>
                        <p class="text-sm text-slate-600"> {{ experience.company }} </p>
                        <small class="text-slate-400"> {{ experience.from }} - {{ experience.to }} </small>
                      </div>
                    </div>                  
                  </div>
                  <div class="h-8"></div>
                  
                </div>
              </div>
              <div v-if="userStore.user.user_type == '1'" class="w-6/12">
                <div>
                  <div>
                    <p class="text-lg font-bold">Qualification</p>
                    <div class="h-1"></div>
                    <div v-if="userStore.getQualification.length > 0">
                      <div class="mb-2 border px-2 rounded-lg" v-for="(qualification, ind) in userStore.getQualification" :key="ind">
                        <h5 class="text-lg"> {{ qualification.QualificationTitle }} </h5>
                        <p class="text-sm text-slate-600"> {{ qualification.QualificationUniv }} </p>
                        <small class="text-slate-400"> {{ qualification.QualificationYear }} - {{ qualification.QualificationStatus }} </small>
                      </div>
                    </div>                  
                  </div>
                  <div class="h-8"></div>
                  
                </div>
              </div>
            </div>
            <div v-if="userStore.user.user_type == '1'">
              <p class="text-lg font-bold">Skills</p>
              <div class="h-1"></div>

              <p class="text-slate-500">
                {{
                  userStore.user.user_skills
                    ? userStore.user.user_skills
                    : "NA"
                }}
              </p>
            </div>
            <div class="h-8"></div>
            <div v-if="userStore.user.user_type == '1'" class="flex justify-between">
              <div class="w-6/12">
                <div>
                  <p class="text-lg font-bold">Current Location</p>
                  <div class="h-1"></div>

                  <p class="text-slate-500">
                    {{
                      userStore.user.user_address
                        ? userStore.user.user_address
                        : "NA"
                    }}
                  </p>
                </div>
              </div>
              <div class="w-6/12">
                <div>
                  <p class="text-lg font-bold">Preferred Job Location</p>
                  <div class="h-1"></div>

                  <p class="text-slate-500">
                    {{
                      userStore.user.user_job_location
                        ? userStore.user.user_job_location
                        : "NA"
                    }}
                  </p>
                </div>
              </div>
            </div>

            <div v-if="userStore.user.user_type == '2'" class="flex justify-between">
              <div class="w-6/12">
                <div>
                  <p class="text-lg font-bold">Organization</p>
                  <div class="h-1"></div>

                  <p class="text-slate-500">
                    {{
                      userStore.user.user_organization
                        ? userStore.user.user_organization
                        : "NA"
                    }}
                  </p>
                </div>
              </div>
              <div class="w-6/12">
                <div>
                  <p class="text-lg font-bold">Organization Type</p>
                  <div class="h-1"></div>

                  <p class="text-slate-500">
                    {{
                      userStore.user.user_organization_type == '0'
                        ? "Company"
                        : "Consultancy"
                    }}
                  </p>
                </div>
              </div>
            </div>

            <div class="h-8"></div>
          </div>
          <div class="h-10"></div>
        </div>

        <div v-if="profile.updateProfile.isEditStarted">
          <div
            class="p-5 border border-teal-200 rounded shadow-lg bg-remark-light"
          >
            <p class="font-bold text-xl">Update Profile</p>
            <div class="h-5"></div>
            <div class="my-3">
              <div class="flex flex-wrap">
                <div class="my-input px-2 w-6/12 mb-8">
                  <div>
                    <p class="text-md font-bold">First Name</p>
                    <small class="text-slate-400"
                      >Enter your first name</small
                    >
                  </div>
                  <div class="bg-slate-100 p-2 px-3 rounded-lg">
                    <input
                      v-model="profile.updateProfile.inputs.userFirstName.value"
                      placeholder="Full Name"
                      class="bg-transparent outline-none border-none w-full"
                      
                    />
                    <!-- <textarea class="bg-transparent w-full outline-none border-none" placeholder="Enter your bio"></textarea> -->
                  </div>
                </div>
                <div class="my-input px-2 w-6/12 mb-8">
                  
                </div>
                <div v-if="userStore.user.user_type == '1'" class="my-input px-2 w-6/12 mb-8">
                  
                  <div>
                    <p class="text-md font-bold">Profile</p>
                    <small class="text-slate-400"
                      >Please mention your work profile on which designation you want to work</small
                    >
                  </div>
                  <div class="bg-slate-100 p-2 px-3 rounded-lg">
                    <input
                      v-model="profile.updateProfile.inputs.userProfile.value"
                      placeholder="Developer"
                      class="bg-transparent outline-none border-none w-full"
                      
                    />
                    <!-- <textarea class="bg-transparent w-full outline-none border-none" placeholder="Enter your bio"></textarea> -->
                  </div>
                </div>
                <div class="my-input px-2 w-6/12 mb-8">
                  <div>
                    <p class="text-md font-bold">Email Address</p>
                    <small v-if="userStore.user.user_type == '1'" class="text-slate-400"
                      >It is good to provide the email address, so that
                      companies can connect you through the same</small
                    >
                    <small v-if="userStore.user.user_type == '2'" class="text-slate-400"
                      >It is good to provide the email address, so that
                      candidates can connect you through the same</small
                    >
                  </div>
                  <div class="bg-slate-100 p-2 px-3 rounded-lg">
                    <input
                      placeholder="example@domain.com"
                      v-model="profile.updateProfile.inputs.userEmail.value"
                      class="bg-transparent outline-none border-none w-full"
                    />
                    <!-- <textarea class="bg-transparent w-full outline-none border-none" placeholder="Enter your bio"></textarea> -->
                  </div>
                </div>
                <div v-if="userStore.user.user_type == '1'" class="my-input px-2 w-6/12 mb-8">
                  <div>
                    <p class="text-md font-bold">Bio (Profile Summary)</p>
                    <small class="text-slate-400"
                      >Bio should be clean & understandable for the
                      companies</small
                    >
                  </div>
                  <div class="bg-slate-100 p-2 px-3 rounded-lg">
                    <!-- <input placeholder="Bio" class="bg-transparent outline-none border-none" /> -->
                    <textarea
                      v-model="profile.updateProfile.inputs.userBio.value"
                      class="bg-transparent w-full outline-none border-none"
                      placeholder="Enter your bio"
                    ></textarea>
                  </div>
                </div>
                <div v-if="userStore.user.user_type == '1'" class="my-input px-2 w-6/12 mb-8">
                  <div>
                    <p class="text-md font-bold">Address</p>
                    <small class="text-slate-400"
                      >Mention your full residential address so that company can identify the locality</small
                    >
                  </div>
                  <div class="bg-slate-100 p-2 px-3 rounded-lg">
                    <!-- <input placeholder="Bio" class="bg-transparent outline-none border-none" /> -->
                    <textarea
                      class="bg-transparent w-full outline-none border-none"
                      v-model="profile.updateProfile.inputs.userAddress.value"
                      placeholder="Full Address"
                    ></textarea>
                  </div>
                </div>
                <div v-if="userStore.user.user_type == '1'" class="my-input px-2 w-6/12 mb-8">
                  <div>
                    <p class="text-md font-bold">Skills</p>
                    <small class="text-slate-400"
                      >Add your skills</small
                    >
                  </div>
                  <div class="bg-slate-100 p-2 flex px-3 rounded-lg">
                    <input
                      placeholder="html,css"
                      v-model="profile.updateProfile.inputs.userSkills.value"
                      class="bg-transparent outline-none border-none w-full"
                    />
                    <div>
                      <button class="bg-teal-800 px-5 py-1 text-white rounded-full" @click="addUserSkill">Add</button>
                    </div>
                    <!-- <textarea class="bg-transparent w-full outline-none border-none" placeholder="Enter your bio"></textarea> -->
                  </div>
                  <div class="flex flex-wrap gap-x-2 mt-2">
                    <VChip class="mb-2"   v-for="(skill, ind) in profile.updateProfile.inputs.skills" :key="ind"  :isDismissible="true" @click="removeUserSkill(ind)" >
                      <small>{{ skill }}</small>
                    </VChip>
                  </div>
                </div>
                <div v-if="userStore.user.user_type == '1'" class="my-input px-2 w-6/12 mb-8">
                  <div>
                    <p class="text-md font-bold">Languages</p>
                    <small class="text-slate-400"
                      >Add your languages</small
                    >
                  </div>
                  <div class="bg-slate-100 p-2 flex px-3 rounded-lg">
                    <input
                      placeholder="English"
                      v-model="profile.updateProfile.inputs.userLanguage.value"
                      class="bg-transparent outline-none border-none w-full"
                    />
                    <div>
                      <button class="bg-teal-800 px-5 py-1 text-white rounded-full" @click="addUserLanguage" >Add</button>
                    </div>
                    <!-- <textarea class="bg-transparent w-full outline-none border-none" placeholder="Enter your bio"></textarea> -->
                  </div>
                  <div class="flex flex-wrap gap-x-2 mt-2">
                    <VChip v-for="(language, ind) in profile.updateProfile.inputs.languages" :key="ind" :isDismissible="true" @click="removeUserLanguage(ind)" >
                      <small>{{ language }}</small>
                    </VChip>
                  </div>
                </div>
                <div v-if="userStore.user.user_type == '1'" class="my-input px-2 w-6/12 mb-8">
                  <div>
                    <p class="text-md font-bold">Qualification</p>
                    <small class="text-slate-400"
                      >Add your qualification</small
                    >
                  </div>
                  <div v-if="profile.updateProfile.inputs.qualifications.length > 0" class="p-2 px-3 rounded-lg">
                    <div class="flex flex-wrap gap-x-3 p-2">
                      <div v-for="(qualification, ind) in profile.updateProfile.inputs.qualifications" :key="ind" class="p-2 bg-teal-100 mb-3">
                        <div class="flex gap-x-3 justify-between">
                          <h5 class="text-sm font-bold">{{ qualification.QualificationTitle }}</h5>
                          <Icon class="text-teal-800" @click="removeUserQualification(ind)" name="material-symbols-light:cancel" />
                        </div>
                        <h6 class="text-xs font-bold">{{ qualification.QualificationUniv }}</h6>
                        <small> {{ qualification.QualificationStatus }} - {{ qualification.QualificationYear }}</small>
                      </div>
                    </div>
                    
                  </div>
                  <div class="p-2 px-3 rounded-lg">
                    <a href="javascript:void(0)" class="text-underline text-teal-800"> + Add qualification</a>
                    <div class="mt-2">
                      <div class="flex gap-x-2">
                        <div>
                          <div class="bg-slate-100 px-3 py-2">
                            <input type="text" v-model="profile.updateProfile.inputs.userQualification.class" class="w-full bg-transparent outline-none" placeholder="Qualification">
                          </div>
                          <small>Eg: 10th, Bsc</small>
                        </div>
                        <div>
                          <div class="bg-slate-100 px-3 py-2">
                            <input type="text" v-model="profile.updateProfile.inputs.userQualification.university" class="w-full bg-transparent outline-none" placeholder="School/University">
                          </div>
                          <small>School/University Name</small>
                        </div>
                        <div>
                          <div class="bg-slate-100 px-3 py-2">
                            <input type="text" v-model="profile.updateProfile.inputs.userQualification.year" class="w-full bg-transparent outline-none" placeholder="Year">
                          </div>
                          <small>Eg: 2018</small>
                        </div>
                        <div>
                          <div class="bg-slate-100 px-3 py-2">
                            <select name="" v-model="profile.updateProfile.inputs.userQualification.status" class="bg-transparent outline-none" id="">
                              <option value="Passed">Passed</option>
                              <option value="Passed">Persuing</option>
                            </select>
                          </div>
                          <small>Passed/Persuing</small>
                        </div>
                        <div class="py-0">
                          <button class="bg-teal-800 text-white px-5 py-2" @click="addUserQualification()" >Add</button>
                        </div>
                      </div>
                    </div>
                    <!-- <textarea class="bg-transparent w-full outline-none border-none" placeholder="Enter your bio"></textarea> -->
                  </div>
                </div>
                <div v-if="userStore.user.user_type == '1'" class="my-input px-2 w-6/12 mb-8">
                  <div>
                    <p class="text-md font-bold">Experiences</p>
                    <small class="text-slate-400"
                      >If there is no experience in list then it will show fresher to companies</small
                    >
                  </div>
                  <div v-if="profile.updateProfile.inputs.experiences.length > 0" class="p-2 px-3 rounded-lg">
                    <div class="flex flex-wrap gap-x-3 p-2">
                      <div v-for="(experience, ind) in profile.updateProfile.inputs.experiences" :key="ind" class="p-2 bg-teal-100 mb-3">
                        <div class="flex gap-x-3 justify-between">
                          <h5 class="text-sm font-bold"> {{ experience.title }} </h5>
                          <Icon class="text-teal-800" @click="removeUserExperience(ind)" name="material-symbols-light:cancel" />
                        </div>
                        <h6 class="text-xs font-bold"> {{ experience.company }} </h6>
                        <small> {{ experience.from }}  -  {{ experience.to }} </small>
                      </div>
                    </div>
                  </div>
                  <div class="p-2 px-3 rounded-lg">
                    <a href="javascript:void(0)" class="text-underline text-teal-800"> + Add experience</a>
                    <div class="mt-2">
                      <div class="flex gap-x-2">
                        <div>
                          <div class="bg-slate-100 px-3 py-2">
                            <input type="text" v-model="profile.updateProfile.inputs.userExperience.position" class="w-full bg-transparent outline-none" placeholder="Position">
                          </div>
                          <small>Eg: Frontend developer</small>
                        </div>
                        <div>
                          <div class="bg-slate-100 px-3 py-2">
                            <input type="text" v-model="profile.updateProfile.inputs.userExperience.company" class="w-full bg-transparent outline-none" placeholder="Company Name">
                          </div>
                          <small>Company Name</small>
                        </div>
                        <div>
                          <div class="bg-slate-100 px-3 py-2">
                            <input type="date" v-model="profile.updateProfile.inputs.userExperience.workFrom" class="w-full bg-transparent outline-none" placeholder="dd-mm-yyyy">
                          </div>
                          <small>Work Start From</small>
                        </div>
                        <div>
                          <div class="bg-slate-100 px-3 py-2">
                            <input type="date" v-model="profile.updateProfile.inputs.userExperience.workUpto" pattern="dd/mm/yyyy"  class="w-full bg-transparent outline-none" placeholder="dd-mm-yyyy">
                          </div>
                          <small>Work Upto</small>
                        </div>
                        <div class="py-0">
                          <button class="bg-teal-800 text-white px-5 py-2" @click="addUserExperience" >Add</button>
                        </div>
                      </div>
                    </div>
                    <!-- <textarea class="bg-transparent w-full outline-none border-none" placeholder="Enter your bio"></textarea> -->
                  </div>
                </div>
                <div v-if="userStore.user.user_type == '1'" class="my-input px-2 w-1/3 mb-8">
                  <div>
                    <p class="text-md font-bold">State</p>
                    <small class="text-slate-400"
                      >Select your state</small
                    >
                  </div>
                  <div class="bg-slate-100 p-2 px-3 rounded-lg">
                    <select v-model="profile.updateProfile.inputs.userState.value" name="" class="bg-transparent outline-none border-none w-full" @change="getCities">
                      <option v-for="(state,ind) in states" :key="ind" :value="state.name"  > {{ state.name }} </option>
                    </select>
                    <!-- <textarea class="bg-transparent w-full outline-none border-none" placeholder="Enter your bio"></textarea> -->
                  </div>
                </div>
                <div v-if="userStore.user.user_type == '1'" class="my-input px-2 w-1/3 mb-8">
                  <div>
                    <p class="text-md font-bold">City</p>
                    <small class="text-slate-400"
                      >Select your city</small
                    >
                  </div>
                  <div class="bg-slate-100 p-2 px-3 rounded-lg">
                    <select name="" class="bg-transparent outline-none border-none w-full" v-model="profile.updateProfile.inputs.userCity.value" id="">
                      <option v-if="profile.updateProfile.inputs.userCity.value != ''" :value="profile.updateProfile.inputs.userCity.value"> {{ profile.updateProfile.inputs.userCity.value }} </option>
                      <option v-for="(city,ind) in cities" :key="ind" :value="city.name">{{ city.name }}</option>
                    </select>
                    <!-- <textarea class="bg-transparent w-full outline-none border-none" placeholder="Enter your bio"></textarea> -->
                  </div>
                </div>
                <div v-if="userStore.user.user_type == '1'" class="my-input px-2 w-1/3 mb-8">
                  <div>
                    <p class="text-md font-bold">Preferred Job Location</p>
                    <small class="text-slate-400"
                      >Enter your preferred job location where you want the job</small
                    >
                  </div>
                  <div class="bg-slate-100 p-2 px-3 rounded-lg">
                    <input
                      v-model="profile.updateProfile.inputs.userJobLocation.value"
                      placeholder="Mumbai,Delhi"
                      class="bg-transparent outline-none border-none w-full"
                    />
                    <!-- <textarea class="bg-transparent w-full outline-none border-none" placeholder="Enter your bio"></textarea> -->
                  </div>
                </div>
                <div v-if="userStore.user.user_type == '2'" class="my-input px-2 w-6/12 mb-8">
                  <div>
                    <p class="text-md font-bold">Organization Type</p>
                    <small class="text-slate-400"
                      >Please select the type of organization</small
                    >
                  </div>
                  <div class="bg-slate-100 p-2 px-3 rounded-lg">
                    <select
                      v-model="profile.updateProfile.inputs.userOrganizationType.value"
                      class="bg-transparent outline-none border-none w-full"
                    >
                    <option value="0">Company</option>
                    <option value="1">Consultancy</option>
                  </select>
                    <!-- <textarea class="bg-transparent w-full outline-none border-none" placeholder="Enter your bio"></textarea> -->
                  </div>
                </div>
                <div v-if="userStore.user.user_type == '2'" class="my-input px-2 w-6/12 mb-8">
                  <div>
                    <p class="text-md font-bold">Organization Name</p>
                    <small class="text-slate-400"
                      >Enter your company name, background verification will be process by Remark Team</small
                    >
                  </div>
                  <div class="bg-slate-100 p-2 px-3 rounded-lg">
                    <input
                      v-model="profile.updateProfile.inputs.userOrganization.value"
                      placeholder="Enter your company name"
                      class="bg-transparent outline-none border-none w-full"
                    />
                    <!-- <textarea class="bg-transparent w-full outline-none border-none" placeholder="Enter your bio"></textarea> -->
                  </div>
                </div>
                <div class="my-input px-2 w-full mb-8 text-center">
                  <div class="flex gap-x-3 justify-center" v-if="!profile.updateProfile.isUpdating">
                    <button class="bg-teal-800 px-3 py-2 text-white" @click="updateUser" >Update Profile</button>
                    <button class="bg-red-500 px-3 py-2 text-white" @click="stopEditProfile" >Cancel</button>
                  </div>
                  <div v-if="profile.updateProfile.isUpdating">
                    <VLoading />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="activeMenu == 'saved-jobs'"
        class="saved-jobs"
        style="height: 35rem; overflow-y: scroll"
      >
        <div class="w-full rounded-lg">
          <div class="px-3 py-3">
            <p class="text-2xl text-teal-800 font-bold">Saved Jobs</p>
            <div class="h-5"></div>
            <div
              v-if="!savedJobs.isFetching"
              class="flex justify-start flex-wrap"
            >
              <div
                v-for="(job, index) in savedJobs.jobs"
                :key="index"
                class="w-4/12 px-2"
              >
                <RJobCard
                  :title="job.job_title"
                  :slug="job.job_slug"
                  :skills="JSON.parse(job.job_key_skills).join(' | ')"
                  :timeAgo="job.job_timeago"
                  :companyLogo="job.company.company_logo"
                  :companyName="job.company.company_name"
                  :companyLocation="job.company.company_address"
                  :salary="
                    'Rs. ' +
                    job.job_minimum_salary +
                    ' to Rs. ' +
                    job.job_maximum_salary
                  "
                  :experience="job.is_experienced ? 'Experienced' : 'Fresher'"
                  :schedule="job.job_schedule"
                  :description="job.job_description"
                  :job="job"
                  isSaved="1"
                />
              </div>
            </div>
            <div class="w-full text-center" v-else>
              <icon name="svg-spinners:ring-resize" />
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="activeMenu == 'applied-jobs' && u.user_type == '1'"
        class="applied-jobs"
        style="height: 35rem; overflow-y: scroll"
      >
        <div class="w-full rounded-lg">
          <div class="px-3 py-3">
            <p class="text-2xl text-teal-800 font-bold">Applied Jobs</p>
            <div class="h-5"></div>
            <div
              v-if="!appliedJobs.isFetching"
              class="flex justify-start flex-wrap"
            >
              <div
                v-for="(job, index) in appliedJobs.jobs"
                :key="index"
                class="w-4/12 px-2"
              >
                <RJobCard
                  :title="job.job_title"
                  :slug="job.job_slug"
                  :skills="JSON.parse(job.job_key_skills).join(' | ')"
                  :timeAgo="job.job_timeago"
                  :companyLogo="job.company.company_logo"
                  :companyName="job.company.company_name"
                  :companyLocation="job.company.company_address"
                  :salary="
                    'Rs. ' +
                    job.job_minimum_salary +
                    ' to Rs. ' +
                    job.job_maximum_salary
                  "
                  :experience="job.is_experienced ? 'Experienced' : 'Fresher'"
                  :schedule="job.job_schedule"
                  :description="job.job_description"
                  :job="job"
                  isSaved="1"
                />
              </div>
            </div>
            <div class="w-full text-center" v-else>
              <icon name="svg-spinners:ring-resize" />
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="activeMenu == 'ai-recommended-jobs'"
        class="ai-recommended-jobs"
        style="height: 38rem; overflow-y: scroll"
      >
        <div class="w-full rounded-lg">
          <div class="px-3 py-3">
            <p class="text-2xl text-teal-800 font-bold">Recommended Jobs</p>
            <div class="h-5"></div>
            <div
              v-if="!recommendedJobs.isFetching"
              class="flex justify-start flex-wrap"
            >
              <div
                v-for="(job, index) in recommendedJobs.jobs"
                :key="index"
                class="w-4/12 px-2"
              >
                <RJobCard
                  :title="job.job_title"
                  :slug="job.job_slug"
                  :skills="JSON.parse(job.job_key_skills).join(' | ')"
                  :timeAgo="job.job_timeago"
                  :companyLogo="job.company.company_logo"
                  :companyName="job.company.company_name"
                  :companyLocation="job.company.company_address"
                  :salary="
                    'Rs. ' +
                    job.job_minimum_salary +
                    ' to Rs. ' +
                    job.job_maximum_salary
                  "
                  :experience="job.is_experienced ? 'Experienced' : 'Fresher'"
                  :schedule="job.job_schedule"
                  :description="job.job_description"
                  :job="job"
                  isSaved="1"
                />
              </div>
            </div>
            <div class="w-full text-center" v-else>
              <icon name="svg-spinners:ring-resize" />
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="activeMenu == 'companies'"
        class="companies"
        style="height: 38rem; overflow-y: scroll"
      >
        <div class="w-full rounded-lg">
          <div class="px-3 py-3">
            <p class="text-2xl text-teal-800 font-bold">Companies</p>
            <div class="h-5"></div>
            <div
              v-if="!allCompanies.isFetching"
              class="flex justify-start flex-wrap"
            >
              <div
                v-for="(company, index) in allCompanies.companies"
                :key="index"
                class="w-4/12 px-2"
              >
                <div class="px-2 py-2 border rounded-xl mb-3">
                  <div class="flex items-center gap-x-3">
                    <!-- Logo -->
                    <div>
                      <VImage :link="company.company_logo" />
                    </div>
                    <!-- Name -->
                    <div class="w-full">
                      <div class="w-full flex justify-between">
                        <div>
                          <p class="font-semibold">
                            {{ company.company_name }}
                            <span v-if="company.verified_company == '1'"
                              ><Icon
                                class="text-teal-800"
                                name="material-symbols:verified"
                            /></span>
                          </p>
                          <small>{{ company.company_address }}</small>
                        </div>
                        <div>
                          <a
                            :href="
                              'https://remarkhr.com/companies/company-' +
                              company.company_slug
                            "
                            target="_blank"
                          >
                            <Icon
                              name="material-symbols:open-in-new"
                              class="text-teal-600"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-4/12 px-2">
                <div
                  class="px-4 py-5 border-dashed border-2 rounded-xl mb-3 cursor-pointer"
                  @click="activeMenu = 'add-new-company'"
                >
                  <div class="flex items-center text-slate-500">
                    <Icon name="material-symbols:add" class="text-xl" />
                    <p>Add New Company</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full text-center" v-else>
              <icon name="svg-spinners:ring-resize" />
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="activeMenu == 'add-new-company'"
        class="add-new-company"
        style="height: 38rem; overflow-y: scroll"
      >
        <div class="w-full rounded-lg">
          <div class="px-3 py-3">
            <p class="text-2xl text-teal-800 font-bold">Add Company</p>
            <div class="h-5"></div>
            <div>
              <div class="w-full">
                <div class="mb-5 relative">
                  <div class=" ">
                    <input type="file" class="absolute opacity-0" accept="image/*" name="" id="">
                    Upload Logo
                  </div>
                  <small>Logo</small>
                </div>
                <form
                  id="company_form"
                  class="grid grid-cols-2 gap-x-4"
                  action="javascript:void(0)"
                >
                  <div class="mb-5">
                    <label class="block mb-1" for="company_name"
                      >Company name <span class="text-red-500">*</span></label
                    >
                    <input
                      type="text"
                      v-model="
                        allCompanies.addCompany.inputs.company_name.value
                      "
                      name="company_name"
                      id="company_name"
                      required
                      class="bg-remark-light px-4 py-3 w-full focus:outline-none border border-teal-200 rounded-lg"
                      placeholder="Apple Inc"
                    />
                    <small
                      :class="
                        !allCompanies.addCompany.inputs.company_name.hasError
                          ? 'text-slate-500'
                          : 'text-red-500'
                      "
                    >
                      {{
                        allCompanies.addCompany.inputs.company_name.hasError
                          ? allCompanies.addCompany.inputs.company_name
                              .errorMessage
                          : "Company name is required"
                      }}</small
                    >
                  </div>
                  <div class="mb-5">
                    <label class="block mb-1" for="website"
                      >Website
                      <span class="text-slate-400">(Optional)</span></label
                    >
                    <input
                      type="text"
                      v-model="allCompanies.addCompany.inputs.website.value"
                      name="website"
                      id="website"
                      class="bg-remark-light px-4 py-3 w-full focus:outline-none border border-teal-200 rounded-lg"
                      placeholder="apple.com"
                    />
                    <small class="text-slate-500"
                      >Don't insert https:// or www</small
                    >
                  </div>
                  <div class="mb-5">
                    <label class="block mb-1" for="company_email"
                      >Business Email Address
                      <span class="text-red-500">*</span></label
                    >
                    <input
                      type="email"
                      v-model="
                        allCompanies.addCompany.inputs.business_email.value
                      "
                      name="company_email"
                      id="company_email"
                      class="bg-remark-light px-4 py-3 w-full focus:outline-none border border-teal-200 rounded-lg"
                      placeholder="info@apple.com"
                    />
                    <small
                      :class="
                        !allCompanies.addCompany.inputs.business_email.hasError
                          ? 'text-slate-500'
                          : 'text-red-500'
                      "
                    >
                      {{
                        allCompanies.addCompany.inputs.business_email.hasError
                          ? allCompanies.addCompany.inputs.business_email
                              .errorMessage
                          : "Business Email is required"
                      }}</small
                    >
                  </div>
                  <div class="mb-5">
                    <label class="block mb-1" for="business_phone_number"
                      >Business Phone Number
                      <span class="text-red-500">*</span></label
                    >
                    <input
                      type="tel"
                      v-model="
                        allCompanies.addCompany.inputs.business_phone.value
                      "
                      name="business_phone_number"
                      id="business_phone_number"
                      class="bg-remark-light px-4 py-3 w-full focus:outline-none border border-teal-200 rounded-lg"
                      placeholder="+91"
                    />
                    <small
                      :class="
                        !allCompanies.addCompany.inputs.business_phone.hasError
                          ? 'text-slate-500'
                          : 'text-red-500'
                      "
                    >
                      {{
                        allCompanies.addCompany.inputs.business_phone.hasError
                          ? allCompanies.addCompany.inputs.business_phone
                              .errorMessage
                          : "Business Phone Number is required"
                      }}</small
                    >
                  </div>
                  <div class="mb-5">
                    <label class="block mb-1" for="description"
                      >Description <span class="text-red-500">*</span></label
                    >
                    <textarea
                      type="text"
                      v-model="allCompanies.addCompany.inputs.description.value"
                      name="description"
                      id="description"
                      class="bg-remark-light px-4 py-3 w-full focus:outline-none border border-teal-200 rounded-lg"
                      placeholder="Enter the description"
                    ></textarea>
                    <small
                      :class="
                        !allCompanies.addCompany.inputs.description.hasError
                          ? 'text-slate-500'
                          : 'text-red-500'
                      "
                    >
                      {{
                        allCompanies.addCompany.inputs.description.hasError
                          ? allCompanies.addCompany.inputs.description
                              .errorMessage
                          : "Description is required"
                      }}</small
                    >
                  </div>
                  <div class="mb-5">
                    <label class="block mb-1" for="address"
                      >Address <span class="text-red-500">*</span></label
                    >
                    <textarea
                      type="text"
                      v-model="allCompanies.addCompany.inputs.address.value"
                      name="address"
                      id="address"
                      class="bg-remark-light px-4 py-3 w-full focus:outline-none border border-teal-200 rounded-lg"
                      placeholder="Enter the address"
                    ></textarea>
                    <small
                      :class="
                        !allCompanies.addCompany.inputs.address.hasError
                          ? 'text-slate-500'
                          : 'text-red-500'
                      "
                    >
                      {{
                        allCompanies.addCompany.inputs.address.hasError
                          ? allCompanies.addCompany.inputs.address.errorMessage
                          : "Address is required"
                      }}</small
                    >
                  </div>
                  <div class="mb-5">
                    <label class="block mb-1" for="city"
                      >City <span class="text-red-500">*</span></label
                    >
                    <input
                      type="text"
                      v-model="allCompanies.addCompany.inputs.city.value"
                      name="city"
                      id="city"
                      class="bg-remark-light px-4 py-3 w-full focus:outline-none border border-teal-200 rounded-lg"
                      placeholder="Mumbai"
                    />
                    <small
                      :class="
                        !allCompanies.addCompany.inputs.city.hasError
                          ? 'text-slate-500'
                          : 'text-red-500'
                      "
                    >
                      {{
                        allCompanies.addCompany.inputs.city.hasError
                          ? allCompanies.addCompany.inputs.city.errorMessage
                          : "City is required"
                      }}</small
                    >
                  </div>
                  <div class="mb-5">
                    <label class="block mb-1" for="state"
                      >State <span class="text-red-500">*</span></label
                    >
                    <input
                      type="text"
                      v-model="allCompanies.addCompany.inputs.state.value"
                      name="state"
                      id="state"
                      class="bg-remark-light px-4 py-3 w-full focus:outline-none border border-teal-200 rounded-lg"
                      placeholder="Maharastra"
                    />
                    <small
                      :class="
                        !allCompanies.addCompany.inputs.state.hasError
                          ? 'text-slate-500'
                          : 'text-red-500'
                      "
                    >
                      {{
                        allCompanies.addCompany.inputs.state.hasError
                          ? allCompanies.addCompany.inputs.state.errorMessage
                          : "State is required"
                      }}</small
                    >
                  </div>
                </form>
                <div class="w-full text-center">
                  <button
                    type="submit"
                    class="px-5 py-2 bg-teal-800 rounded"
                    @click="addCompany"
                  >
                    <span class="text-white">Add Company</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="activeMenu == 'jobs'"
        class="jobs"
        style="height: 38rem; overflow-y: scroll"
      >
        <div class="w-full rounded-lg">
          <div class="px-3 py-3">
            <p class="text-2xl text-teal-800 font-bold">Jobs</p>
            <div class="h-5"></div>
            <div
              v-if="!allJobs.isFetching"
              class="flex justify-start flex-wrap"
            >
              <div
                v-for="(job, index) in allJobs.jobs"
                :key="index"
                class="w-4/12 px-2"
              >
                <div class="px-2 py-2 border rounded-xl mb-3">
                  <div class="flex items-center gap-x-3">
                    <!-- Logo -->
                    <div>
                      <VImage :link="job.company.company_logo[0] == '/' ? 'https://apimanager.remarkhr.com' + job.company.company_logo : job.company.company_logo" />
                    </div>
                    <!-- Name -->
                    <div class="w-full">
                      <div class="w-full flex justify-between">
                        <div>
                          <p class="font-semibold">
                            {{ job.job_title }}
                          </p>
                          <p class="text-sm">
                            {{ job.company.company_name }}
                            <span v-if="job.company.verified_company == '1'"
                              ><Icon
                                class="text-teal-800"
                                name="material-symbols:verified"
                            /></span>
                          </p>
                          <small>{{ job.company.company_address }}</small>
                        </div>
                        <div>
                          <!-- <div class="flex justify-end">
                            <a
                            href="javascript:void(0)"
                          >
                            <small class="text-teal-800 mr-1">Edit</small>
                            <Icon
                              name="icon-park-outline:pencil"
                              class="text-teal-800 text-sm"
                            />
                          </a>
                          </div> -->
                          <div class="flex justify-end">
                            <a
                            :href="
                              'https://remarkhr.com/jobs/job-' +
                              job.job_slug
                            "
                            target="_blank"
                          >
                            <small class="text-teal-800 mr-1">View</small>
                            <Icon
                              name="material-symbols:open-in-new"
                              class="text-teal-600 text-sm"
                            />
                          </a>
                          </div>
                          <div class="flex justify-end">
                            <a
                            href="javascript:void(0)"
                          >
                            <span class="bg-teal-800 px-1 py-1/2 text-xs text-white rounded-full mr-1">{{job.interactions.applied_interaction}}</span>
                            <small class="text-teal-800 mr-1">Applied Candidates</small>
                            <Icon
                              name="clarity:users-solid"
                              class="text-teal-600 text-sm"
                            />
                          </a>
                          </div>
                          
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-4/12 px-2">
                <div
                  class="px-4 py-8 border-dashed border-2 rounded-xl mb-3 cursor-pointer"
                  @click="startJobPosting"
                >
                  <div class="flex justify-center items-center text-slate-500">
                    <Icon name="material-symbols:add" class="text-md mr-1" />
                    <p>Post New Job</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full text-center" v-else>
              <icon name="svg-spinners:ring-resize" />
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="activeMenu == 'add-new-job'"
        class="add-new-job"
        style="height: 38rem; overflow-y: scroll"
      >
        <div class="w-full rounded-lg">
          <div class="px-3 py-3">
            <div class="flex items-center">
              <button @click="activeMenu = 'jobs'" class="p-3">
                <Icon  name="material-symbols:arrow-back-ios-rounded" class="text-teal-800" />
              </button>
              <p class="text-2xl text-teal-800 font-bold">Add Job</p>
            </div>
            <div class="h-5"></div>
            <div>
              <div class="w-full">
                <form
                  id="company_form"
                  
                  action="javascript:void(0)"
                >
                  <div class="company-job-section">
                    <div class="mb-2">
                      <p class="font-bold text-xl text-slate-500">Company & Industry</p>
                    </div>
                    <div class="flex gap-x-5">
                      <div class="bg-grey-100 border border-teal-100 p-3 rounded-xl w-1/3">
                        <div class="mb-0">
                          <label class="block mb-1" for="company_name"
                            >Select Company <span class="text-red-500">*</span></label
                          >
                          <select v-model="allJobs.postJob.company_id.value" class="bg-remark-light px-4 py-3 w-full focus:outline-none border border-teal-200 rounded-lg"  >
                            <option v-if="allJobs.postJob.company_id.value == '0'" value="0">--Select Company--</option>
                            <option v-for="(company, ind) in allCompanies.companies" :key="ind" :value="company.company_id"> {{ company.company_name }} </option>
                          </select>
                          <small
                            :class="
                              !allJobs.postJob.company_id.hasError
                                ? 'text-slate-500'
                                : 'text-red-500'
                            "
                          >
                            {{
                              allJobs.postJob.company_id.hasError
                                ? allJobs.postJob.company_id
                                    .errorMessage
                                : "Company is required"
                            }}</small
                          >
                        </div>
                        
                      </div>
                      <div class="bg-grey-100 border border-teal-100 p-3 rounded w-1/3">
                        <div class="mb-0">
                          <label class="block mb-1" for="website"
                            >Job Industry</label
                          >
                          <!-- <input
                            type="text"
                            v-model="allCompanies.addCompany.inputs.website.value"
                            name="website"
                            id="website"
                            class="bg-remark-light px-4 py-3 w-full focus:outline-none border border-teal-200 rounded-lg"
                            placeholder="apple.com"
                          /> -->
                          <select v-model="allJobs.postJob.jobIndustry.value" class="bg-remark-light px-4 py-3 w-full focus:outline-none border border-teal-200 rounded-lg" name="" id="">
                            <option v-if="allJobs.postJob.jobIndustry.value" value="0">-- Select Industry --</option>
                            <option v-for="(industry, ind) in allIndustry" :key="ind" :value="industry.industry_id"> {{ industry.industry_title }} </option>
                          </select>
                          <small class="text-slate-500"
                            >Please select the job industry</small
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="my-10"></div>

                  <div class="basic-job-section">
                    <div class="mb-2">
                      <p class="font-bold text-xl text-slate-500">Basic Details</p>
                    </div>
                    <div class="border border-teal-100 p-3 rounded-xl">
                      <div class="w-1/2 mb-10">
                        <label class="block mb-1" for="job_title"
                          >Job Title
                          <span class="text-red-500">*</span></label
                        >
                        <input
                          type="text"
                          v-model="
                            allJobs.postJob.jobTitle.value
                          "
                          name="job_title"
                          id="job_title"
                          class="bg-remark-light px-4 py-3 w-full focus:outline-none border border-teal-200 rounded-lg"
                          placeholder="Web Developer"
                        />
                        <small
                          :class="
                            !allJobs.postJob.jobTitle.hasError
                              ? 'text-slate-500'
                              : 'text-red-500'
                          "
                        >
                          {{
                            allJobs.postJob.jobTitle.hasError
                              ? allJobs.postJob.jobTitle
                                  .errorMessage
                              : ""
                          }}</small
                        >
                      </div>
                      <div class="flex gap-x-5 items-center">
                        <div class="w-1/2 mb-5">
                          <div class="flex justify-between items-center mb-2">
                            <label class="block mb-1" for="description"
                            >Description <span class="text-red-500">*</span></label
                          >
                          <div v-if="!allJobs.postJob.jobDescription.isGenerating" class="">
                            <button @click="generateDescription" class="bg-teal-800 px-3 py-1 rounded-full text-white">
                            <Icon name="material-symbols:magic-button" class="mr-1" />
                            <span>Generate Description</span>
                            </button>
                          </div>
                          <div v-else>
                            <VLoading />
                          </div>
                          </div>
                          <textarea
                            type="text"
                            v-model="allJobs.postJob.jobDescription.value"
                            name="description"
                            id="description"
                            rows="10"
                            class="bg-remark-light px-4 py-3 w-full focus:outline-none border rounded-lg"
                            :class="!allJobs.postJob.jobDescription.hasError ? 'border-teal-100' : 'border-red-200'"
                            placeholder="Enter the description"
                          ></textarea>
                          <small
                            :class="
                              !allJobs.postJob.jobDescription.hasError
                                ? 'text-slate-500'
                                : 'text-red-500'
                            "
                          >
                            {{
                              allJobs.postJob.jobDescription.hasError
                                ? allJobs.postJob.jobDescription
                                    .errorMessage
                                : "Description is required"
                            }}</small
                          >
                        </div>
                        <div class="w-6/12">
                          <div class="mb-5">
                            <label class="block mb-1" for="no_of_hiring"
                              >No of Hiring
                              <span class="text-red-500">*</span></label
                            >
                            <input
                              type="tel"
                              v-model="
                                allJobs.postJob.numberOfHiring.value
                              "
                              name="no_of_hiring"
                              id="no_of_hiring"
                              class="bg-remark-light px-4 py-3 w-full focus:outline-none border border-teal-200 rounded-lg"
                              placeholder="5"
                            />
                            <small
                              :class="
                                !allCompanies.addCompany.inputs.business_phone.hasError
                                  ? 'text-slate-500'
                                  : 'text-red-500'
                              "
                            >
                              {{
                                allCompanies.addCompany.inputs.business_phone.hasError
                                  ? allCompanies.addCompany.inputs.business_phone
                                      .errorMessage
                                  : "Please mention the number of hirings"
                              }}</small
                            >
                          </div>
                          <div class="grid grid-cols-2 gap-x-3">
                            <div class="mb-5">
                              <label class="block mb-1 text-slate-700" for="minimum_salary"
                                >Minimum Salary <span class="text-xs  font-semibold">(Monthly)</span> <span class="text-red-500">*</span></label
                              >
                              <input
                                type="tel"
                                v-model="allJobs.postJob.minimumSalary.value"
                                name="minimum_salary"
                                id="minimum_salary"
                                class="bg-remark-light px-4 py-3 w-full focus:outline-none border border-teal-200 rounded-lg"
                                placeholder="10000"
                              />
                              <small
                                :class="
                                  !allJobs.postJob.minimumSalary.hasError
                                    ? 'text-slate-500'
                                    : 'text-red-500'
                                "
                              >
                                {{
                                  allJobs.postJob.minimumSalary.hasError
                                    ? allJobs.postJob.minimumSalary.errorMessage
                                    : ""
                                }}</small
                              >
                            </div>
                            <div class="mb-5">
                              <label class="block mb-1" for="city"
                                >Maximum Salary (Monthly) <span class="text-red-500">*</span></label
                              >
                              <input
                                type="text"
                                v-model="allJobs.postJob.maximumSalary.value"
                                name="city"
                                id="city"
                                class="bg-remark-light px-4 py-3 w-full focus:outline-none border border-teal-200 rounded-lg"
                                placeholder="20000"
                              />
                              <small
                                :class="
                                  !allJobs.postJob.maximumSalary.hasError
                                    ? 'text-slate-500'
                                    : 'text-red-500'
                                "
                              >
                                {{
                                  allJobs.postJob.maximumSalary.hasError
                                    ? allJobs.postJob.maximumSalary.errorMessage
                                    : ""
                                }}</small
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="my-10"></div>
                  
                  <div class="qualification-job-section">
                    <div class="mb-2">
                      <p class="font-bold text-xl text-slate-500">
                        Qualification Details
                      </p>
                    </div>
                    <div class="flex gap-x-5 border border-teal-100 rounded-xl p-3">
                      <div class="mb-5 w-1/3">
                        <label class="block mb-1" for="state"
                          >Basic Qualification</label
                        >
                        <input
                          type="text"
                          v-model="allJobs.postJob.basicQualification.value"
                          name="state"
                          id="state"
                          class="bg-remark-light px-4 py-3 w-full focus:outline-none border border-teal-200 rounded-lg"
                          placeholder="Any (Optional)"
                        />
                        <small
                          :class="
                            !allJobs.postJob.basicQualification.hasError
                              ? 'text-slate-500'
                              : 'text-red-500'
                          "
                        >
                          {{
                            allJobs.postJob.basicQualification.hasError
                              ? allJobs.postJob.basicQualification.errorMessage
                              : ""
                          }}</small
                        >
                      </div>
                      <div class="mb-5 w-1/3">
                        <label class="block mb-1" for="state"
                          >Required Qualification</label
                        >
                        <select v-model="allJobs.postJob.requiredQualification.value" name="" class="bg-remark-light px-4 py-3 w-full focus:outline-none border border-teal-200 rounded-lg" id="">
                          <option v-if="allJobs.postJob.requiredQualification.value == '0'" value="0">--Select Qualification--</option>
                          <option v-for="(education, ind) in allEducations" :key="ind" :value="education.education_name"> {{ education.education_name }} </option>
                        </select>
                        <small
                          :class="
                            !allJobs.postJob.requiredQualification.hasError
                              ? 'text-slate-500'
                              : 'text-red-500'
                          "
                        >
                          {{
                            allJobs.postJob.requiredQualification.hasError
                              ? allJobs.postJob.requiredQualification.errorMessage
                              : ""
                          }}</small
                        >
                      </div>
                    </div>
                  </div>

                  <div class="my-10"></div>

                  <div class="skills-job-section">
                    <div class="mb-2">
                      <p class="font-bold text-xl text-slate-500">
                        Skills Details
                      </p>
                    </div>
                    <div class="flex gap-x-5 border border-teal-100 rounded-xl p-3">
                      <div class="mb-5 w-1/3">
                        <label class="block mb-1" for="state"
                          >Add Skills</label
                        >
                        <div class="flex justify-between bg-remark-light border border-teal-200 rounded-lg">
                          <input
                          type="text"
                          v-model="allJobs.postJob.jobSkills.value"
                          name="state"
                          id="state"
                          class="bg-transparent  focus:outline-none  px-4 py-3 w-full"
                          placeholder="HTML"
                        />
                        <button @click="addJobSkill" class="bg-teal-800 text-white mx-3 my-2 px-5 rounded-full">
                          Add
                        </button>
                        </div>
                        <small
                          :class="
                            !allCompanies.addCompany.inputs.state.hasError
                              ? 'text-slate-500'
                              : 'text-red-500'
                          "
                        >
                          {{
                            allCompanies.addCompany.inputs.state.hasError
                              ? allCompanies.addCompany.inputs.state.errorMessage
                              : ""
                          }}</small
                        >
                        <div class="my-2"></div>
                        <div class="flex gap-x-2">
                          <VChip  v-for="(skill,ind) in allJobs.postJob.jobSkills.skills" :key="ind" @click="removeJobSkill(ind)" :isDismissible="true"> {{ skill }} </VChip>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="my-10"></div>
                  
                  <div class="skills-job-section">
                    <div class="flex gap-x-5">
                      <div class="w-1/2">
                        <div class="mb-2">
                          <p class="font-bold text-xl text-slate-500">
                            Job Type
                          </p>
                        </div>
                        <div class="flex gap-x-5 border border-teal-100 rounded-xl p-3">
                          <div class="mb-5 w-full">
                            <label class="block mb-1" for="state"
                              >Select Job Type</label
                            >
                            <div class="bg-remark-light border border-teal-200 rounded-lg">
                              
                            <select v-model="allJobs.postJob.jobType.value" name="" class="bg-transparent  focus:outline-none  px-4 py-3 w-full" id="">
                              <option value="Full Time">Full Time</option>
                              <option value="Part Time">Part Time</option>
                            </select>
                            </div>
                            <small
                              :class="
                                !allCompanies.addCompany.inputs.state.hasError
                                  ? 'text-slate-500'
                                  : 'text-red-500'
                              "
                            >
                              {{
                                allCompanies.addCompany.inputs.state.hasError
                                  ? allCompanies.addCompany.inputs.state.errorMessage
                                  : ""
                              }}</small
                            >
                          </div>
                          
                        </div>
                      </div>
                      <div class="w-1/2">
                        <div class="mb-2">
                          <p class="font-bold text-xl text-slate-500">
                            Experience
                          </p>
                        </div>
                        <div class="flex gap-x-5 border border-teal-100 rounded-xl p-3">
                          <div class="mb-5 w-full">
                            <label class="block mb-1" for="state"
                              >Experienced Required</label
                            >
                            <div class="bg-remark-light border border-teal-200 rounded-lg">
                              
                            <select v-model="allJobs.postJob.jobExperience.value" name="" class="bg-transparent  focus:outline-none  px-4 py-3 w-full" id="">
                              <option value="Fresher">Fresher</option>
                              <option value="Experienced">Experienced</option>
                            </select>
                            </div>
                            <small
                              :class="
                                !allJobs.postJob.jobExperience.hasError
                                  ? 'text-slate-500'
                                  : 'text-red-500'
                              "
                            >
                              {{
                                allJobs.postJob.jobExperience.hasError
                                  ? allJobs.postJob.jobExperience.errorMessage
                                  : ""
                              }}</small
                            >
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="my-10"></div>
                  
                </form>
                <div class="w-full text-center">
                  <button
                    v-if="!allJobs.postJob.isPostingJob"
                    type="submit"
                    class="px-5 py-2 bg-teal-800 rounded"
                    @click="postJob"
                  >
                    <span class="text-white">Post Job</span>
                  </button>
                  <VLoading v-else />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { generate } from '@vue/compiler-core';
import Snackbar from 'awesome-snackbar';


export default {
  data() {
    return {
      activeMenu: "profile",
      menus: [
        {
          title: "Saved Jobs",
          slug: "saved-jobs",
          isActive: false,
          icon: "ic:baseline-bookmark-added",
          isForNewUser: true,
          isForEmployee: true,
          isForEmployer: true,
          show: false,
        },
        {
          title: "Applied Jobs",
          slug: "applied-jobs",
          isActive: false,
          icon: "ic:baseline-check-circle",
          isForNewUser: false,
          isForEmployee: true,
          isForEmployer: false,
          role: "1",
          show: false,
        },
        {
          title: "AI Recommended Jobs",
          slug: "ai-recommended-jobs",
          isActive: false,
          icon: "ic:baseline-recommend",
          isForNewUser: false,
          isForEmployee: true,
          isForEmployer: false,
          role: "1",
          show: false,
        },
        {
          title: "Companies",
          slug: "companies",
          isActive: false,
          icon: "material-symbols:apartment",
          isForNewUser: false,
          isForEmployee: false,
          isForEmployer: true,
          role: "2",
          show: false,
        },
        {
          title: "Jobs",
          slug: "jobs",
          isActive: false,
          icon: "icon-park-outline:briefcase",
          isForNewUser: false,
          isForEmployee: false,
          isForEmployer: true,
          role: "2",
          show:false,
        },
        {
          title: "Profile",
          slug: "profile",
          isActive: true,
          icon: "ic:sharp-person",
          isForNewUser: true,
          isForEmployee: true,
          isForEmployer: true,
          role: "2",
          show: false,
        },
        // {
        //   title: "Support",
        //   slug: "support",
        //   isActive: false,
        //   icon: 'ic:baseline-question-mark'
        // }
      ],
      savedJobs: {
        isFetching: false,
        jobs: [],
        isFetched: false,
      },
      appliedJobs: {
        isFetching: false,
        jobs: [],
        isFetched: false,
      },
      recommendedJobs: {
        isFetching: false,
        jobs: [],
        isFetched: false,
      },
      allCompanies: {
        isFetching: false,
        companies: [],
        isFetched: false,
        addCompany: {
          inputs: {
            company_name: {
              value: "",
              hasError: false,
              errorMessage: "",
            },
            website: {
              value: "",
              hasError: false,
              errorMessage: "",
            },
            business_email: {
              value: "",
              hasError: false,
              errorMessage: "",
            },
            business_phone: {
              value: "",
              hasError: false,
              errorMessage: "",
            },
            description: {
              value: "",
              hasError: false,
              errorMessage: "",
            },
            address: {
              value: "",
              hasError: false,
              errorMessage: "",
            },
            city: {
              value: "",
              hasError: false,
              errorMessage: "",
            },
            state: {
              value: "",
              hasError: false,
              errorMessage: "",
            },
          },
        },
      },
      allJobs: {
        isFetching: false,
        jobs: [],
        isFetched: false,
        postJob: {
          isPostingJob: false,
          hasError: false,
          errorMessage: "",
          company_id: {
            value: "0",
            hasError: false,
            errorMessage: ""
          },
          jobIndustry: {
            value: "0",
            hasError: false,
            errorMessage:""
          },
          jobTitle: {
            value: "",
            hasError: false,
            errorMessage: ""
          },
          jobDescription: {
            value: "",
            isGenerating: false,
            hasError: false,
            errorMessage: ""
          },
          numberOfHiring: {
            value: "",
            hasError: false,
            errorMessage: ""
          },
          minimumSalary: {
            value: "",
            hasError: false,
            errorMessage: ""
          },
          maximumSalary: {
            value: "",
            hasError: false,
            errorMessage: ""
          },
          basicQualification: {
            value: "",
            hasError: false,
            errorMessage: ""
          },
          requiredQualification: {
            value: "0",
            hasError: false,
            errorMessage: ""
          },
          jobSkills: {
            skills: [],
            value: [],
            hasError: false,
            errorMessage: ""
          },
          jobType: {
            value: "Full Time",
            hasError: false,
            errorMessage: ""
          },
          jobExperience: {
            value: "Fresher",
            addExperience: {
              experienceTitle: {
                value:"",
                hasError: "",
                errorMessage: ""
              },
              experienceMinYear: {
                value: "",
                hasError: "",
                errorMessage: ""
              },
              experienceMinMonth: {
                value: "",
                hasError: "",
                errorMessage: ""
              }
            },
            hasError: false,

          }
        }
      },
      allIndustry: [],
      allEducations: [],
      states: [],
      cities: [],
      profile: {
        isStartEdit: false,
        updateProfile: {
          inputs: {
            userFirstName: {
              value: ''
            },
            userLastName: {
              value: ''
            },
            userBio: {
              value: ''
            },
            userProfile: {
              value: ''
            },
            userOrganization: {
              value:''
            },
            userOrganizationType: {
              value: 'Company'
            },
            userEmail: {
              value: ''
            },
            userAddress:{
              value: ''
            },
            userSkills: {
              value: ''
            },
            userLanguage: {
              value: ''
            },
            userQualification: {
              class: "",
              university: "",
              year: "",
              status: ""
            },
            userExperience: {
              position: "",
              company: "",
              workFrom: "",
              workUpto: ""
            },
            userState: {
              value: ''
            },
            userCity: {
              value: ''
            },
            userJobLocation: {
              value: ''
            },
            skills: [],
            languages: [],
            qualifications: [],
            experiences: [],
          },
          isUpdating: false,
          isEditStarted: false,
        }
      }
    };
  },
  computed: {
    userStore() {
      const u = useMyUserStore();
      // console.log(u.user.isLogged);
      return u;
      
    },
  },
  methods: {
    async init() {
      
      this.menus.forEach((menu) => {
        if (this.userStore.user.user_type == "0") {
          if (menu.isForNewUser) {
            menu.show = true;
          }
        }

        if (this.userStore.user.user_type == "1") {
          if (menu.isForEmployee) {
            menu.show = true;
          }
        }

        if (this.userStore.user.user_type == "2") {
          if (menu.isForEmployer) {
            menu.show = true;
          }
        }
      });

      // this.profile.inputs.userBio.value = this.userStore.user.user_bio;
      // this.profile.inputs.userProfile.value = this.userStore.user.user_profile;

    },
    async startEditProfile() {


      this.profile.updateProfile.inputs.userProfile.value = this.userStore.user.user_profile;
      this.profile.updateProfile.inputs.userEmail.value = this.userStore.user.user_email;
      this.profile.updateProfile.inputs.userBio.value = this.userStore.user.user_bio;
      this.profile.updateProfile.inputs.userAddress.value = this.userStore.user.user_address;

      if(this.userStore.user.user_skills) {

          this.profile.updateProfile.inputs.skills = this.userStore.user.user_skills.split(",");

      }

      if(this.userStore.user.user_languages) {
        this.profile.updateProfile.inputs.languages = this.userStore.user.user_languages.split(",");
      }

      if(this.userStore.getQualification) {

        this.profile.updateProfile.inputs.qualifications = this.userStore.getQualification;

      }

      if(this.userStore.getWorkExperience) {
        this.profile.updateProfile.inputs.experiences = this.userStore.getWorkExperience;
      }



      const { data, pending, error, refresh } = await useFetch('https://apimanager.remarkhr.com/getAllStates');

      console.log(data.value.data);

      this.states = data.value.states;

      if(this.userStore.user.user_state) {
        this.profile.updateProfile.inputs.userState.value = this.userStore.user.user_state; 
      }

      if(this.userStore.user.user_city) {
        this.profile.updateProfile.inputs.userCity.value = this.userStore.user.user_city;
      }

      this.profile.updateProfile.inputs.userFirstName.value = this.userStore.user.user_name;

      this.profile.updateProfile.inputs.userOrganization.value = this.userStore.user.user_organization;
      this.profile.updateProfile.inputs.userOrganizationType.value = this.userStore.user.user_organization_type;

      // this.profile.isStartEdit = true;
      this.profile.updateProfile.isEditStarted = true;



    },

    stopEditProfile() {
      this.profile.updateProfile.isEditStarted = false;
    },

    async getCities() {

      console.log('on change hits');
      this.profile.updateProfile.inputs.userCity.value = "";

      const { data, pending, error, refresh } = await useFetch('https://apimanager.remarkhr.com/getAllCities?state_name='+this.profile.updateProfile.inputs.userState.value);

      console.log(data.value);

      if(data.value.status) {
        this.cities = data.value.cities;
      }


    },

    async updateUser() {

      // COLLECT PROFILE DATA
      this.profile.updateProfile.isUpdating = true;

      var experiences = [];

      this.profile.updateProfile.inputs.experiences.forEach((exp) => {

        experiences.push({
          "ExperiencePosition": exp.title,
          "ExperienceCompany": exp.company,
          "ExperienceFrom": exp.from,
          "ExperienceTo": exp.to
        });

      });

      var userData = {
        "user_id" : this.userStore.user.user_id,
        "user_name": this.profile.updateProfile.inputs.userFirstName.value,
        "user_email": this.profile.updateProfile.inputs.userEmail.value,
        "user_profile": this.profile.updateProfile.inputs.userProfile.value,
        "user_bio": this.profile.updateProfile.inputs.userBio.value,
        "user_organization": this.profile.updateProfile.inputs.userOrganization.value,
        "user_organization_type": this.profile.updateProfile.inputs.userOrganizationType.value,
        "user_mobile": this.userStore.user.user_mobile,
        "user_display_mobile_number": this.userStore.user.user_display_mobile_number,
        "user_dob": "",
        "user_skills": this.profile.updateProfile.inputs.skills,
        "experiences": experiences,
        "qualifications": this.profile.updateProfile.inputs.qualifications,
        "user_languages": this.profile.updateProfile.inputs.languages,
        "user_address": this.profile.updateProfile.inputs.userAddress.value,
        "user_state": this.profile.updateProfile.inputs.userState.value,
        "user_city": this.profile.updateProfile.inputs.userCity.value,
        "user_country": "India",
        "user_type": this.userStore.user.user_type,
        "user_job_location": this.profile.updateProfile.inputs.userJobLocation.value,
        "user_referral_code": ""
      }

      console.log(userData);
      
      const { data, pending, error, refresh } = await useFetch('/api/user/update-user',{
          method: 'post',
          body: userData
      });

      if(data.value) {
        if(data.value.status) {
          console.log(data.value);
          data.value.data.isLogged = true;
          this.userStore.setUser(data.value.data);
          
        }
      } 

      if(error.value) {
        console.log(error.value);
      }

      this.profile.updateProfile.isUpdating = false;
      this.profile.updateProfile.isEditStarted = false;


    },

    addUserSkill() {
      
      var skill = this.profile.updateProfile.inputs.userSkills.value;
      console.log(skill);
      skill = skill.trim();

      skill = skill.split(',');

      skill.forEach(sk => {
        if(sk != '') {
          this.profile.updateProfile.inputs.skills.push(sk);
        }
      });

      this.profile.updateProfile.inputs.userSkills.value = '';
      console.log(this.profile.updateProfile.inputs.skills);
    },

    removeUserSkill(ind) {

      this.profile.updateProfile.inputs.skills.splice(ind, 1);

    },

    addUserLanguage() {

      var language = this.profile.updateProfile.inputs.userLanguage.value;
      console.log(language);
      language = language.trim();

      var languages = language.split(',');

      languages.forEach(lang => {
        if(lang != '') {

          this.profile.updateProfile.inputs.languages.push(lang);

        }
      });

      this.profile.updateProfile.inputs.userLanguage.value = '';
      
    },

    removeUserLanguage(ind) {

      this.profile.updateProfile.inputs.languages.splice(ind, 1);

    },

    addUserQualification() {

      this.profile.updateProfile.inputs.qualifications.push({
        QualificationTitle: this.profile.updateProfile.inputs.userQualification.class,
        QualificationUniv: this.profile.updateProfile.inputs.userQualification.university,
        QualificationYear: this.profile.updateProfile.inputs.userQualification.year,
        QualificationStatus: this.profile.updateProfile.inputs.userQualification.status
      });

      this.profile.updateProfile.inputs.userQualification.class = "";
      this.profile.updateProfile.inputs.userQualification.university = "";
      this.profile.updateProfile.inputs.userQualification.year = "";
      this.profile.updateProfile.inputs.userQualification.status = "";
      
    },

    removeUserQualification(ind) {

      this.profile.updateProfile.inputs.qualifications.splice(ind, 1);

    },

    addUserExperience() {

    this.profile.updateProfile.inputs.experiences.push({
      title: this.profile.updateProfile.inputs.userExperience.position,
      company: this.profile.updateProfile.inputs.userExperience.company,
      from: this.profile.updateProfile.inputs.userExperience.workFrom,
      to: this.profile.updateProfile.inputs.userExperience.workUpto
    });

    this.profile.updateProfile.inputs.userExperience.position = "";
    this.profile.updateProfile.inputs.userExperience.company = "";
    this.profile.updateProfile.inputs.userExperience.workFrom = "";
    this.profile.updateProfile.inputs.userExperience.workUpto = "";

    },

    removeUserExperience(ind) {

      this.profile.updateProfile.inputs.experiences.splice(ind, 1);


    },

    closeEditProfile() {
      this.profile.isStartEdit = false;
    },

    async fetchData(m) {
      this.activeMenu = m;

      if (m == "saved-jobs") {
        if (!this.savedJobs.isFetched) {
          this.savedJobs.isFetching = true;

          const { data, pending, error, refresh } = await useFetch(
            "/api/job/saved-jobs",
            {
              method: "post",
              body: {
                user_id: this.userStore.user.user_id,
              },
            }
          );

          if (data.value) {
            if (data.value.status) {
              if (data.value.status) {
                this.savedJobs.isFetched = true;

                this.savedJobs.jobs = data.value.jobs;
              }
            }
          }

          this.savedJobs.isFetching = false;
        }
      }

      if (m == "applied-jobs") {
        if (!this.appliedJobs.isFetched) {
          this.appliedJobs.isFetching = true;

          const { data, pending, error, refresh } = await useFetch(
            "/api/job/applied-jobs",
            {
              method: "post",
              body: {
                user_id: this.userStore.user.user_id,
              },
            }
          );

          if (data.value) {
            if (data.value.status) {
              if (data.value.status) {
                this.appliedJobs.isFetched = true;

                this.appliedJobs.jobs = data.value.jobs;
              }
            }
          }

          this.appliedJobs.isFetching = false;
        }
      }

      if (m == "ai-recommended-jobs") {
        if (!this.recommendedJobs.isFetched) {
          this.recommendedJobs.isFetching = true;

          const { data, pending, error, refresh } = await useFetch(
            "/api/job/recommended-jobs",
            {
              method: "post",
              body: {
                token: this.userStore.token,
              },
            }
          );

          console.log(data);

          if (data.value) {
            if (data.value.status) {
              if (data.value.status) {
                this.recommendedJobs.isFetched = true;
                this.recommendedJobs.jobs = data.value.jobs;
              }
            }
          }

          this.recommendedJobs.isFetching = false;
        }
      }

      if (m == "companies") {
        if (!this.allCompanies.isFetching) {
          this.allCompanies.isFetching = true;
        }

        const { data, pending, error, refresh } = await useFetch(
          "/api/company/fetch-posted-companies",
          {
            method: "post",
            body: {
              token: this.userStore.token,
            },
          }
        );

        console.log(data.value);
        if (data.value.status) {
          this.allCompanies.companies = data.value.companies;
        }

        this.allCompanies.isFetching = false;
        this.allCompanies.isFetched = true;
      }

      if(m == "jobs") {

        if (!this.allJobs.isFetching) {
          this.allJobs.isFetching = true;
        }

        const { data, pending, error, refresh } = await useFetch(
          "/api/job/employer-jobs",
          {
            method: "post",
            body: {
              token: this.userStore.token,
            },
          }
        );

        console.log(data.value);
        if (data.value.status) {
          this.allJobs.jobs = data.value.jobs;
        }

        this.allJobs.isFetching = false;
        this.allJobs.isFetched = true;

      }

    },

    addCompany() {
      var input = this.allCompanies.addCompany.inputs;
      var companyForm = document.getElementById("company_form");

      if (input.company_name.value == "") {
        input.company_name.hasError = true;
        input.company_name.errorMessage = "Company name is required";
        return false;
      } else {
        input.company_name.hasError = false;
      }

      if (input.business_email.value == "") {
        input.business_email.hasError = true;
        input.business_email.errorMessage = "Business Email is required";
        return false;
      } else {
        input.business_email.hasError = false;
      }

      if (input.business_phone.value == "") {
        input.business_phone.hasError = true;
        input.business_phone.errorMessage = "Business Phone Number is required";
        return false;
      } else {
        input.business_phone.hasError = false;
      }

      if (input.description.value == "") {
        input.description.hasError = true;
        input.description.errorMessage = "Description is required";
        return false;
      } else {
        input.description.hasError = false;
      }

      if (input.address.value == "") {
        input.address.hasError = true;
        input.address.errorMessage = "Address is required";
        return false;
      } else {
        input.address.hasError = false;
      }

      if (input.city.value == "") {
        input.city.hasError = true;
        input.city.errorMessage = "City is required";
        return false;
      } else {
        input.city.hasError = false;
      }

      if (input.state.value == "") {
        input.state.hasError = true;
        input.state.errorMessage = "State is required";
        return false;
      } else {
        input.state.hasError = false;
      }
    },

    async startJobPosting() {

      console.log("Job Posting Started");

      // FETCH USER COMPANIES
      if (!this.allCompanies.isFetching) {
          this.allCompanies.isFetching = true;
        }

        const { data, pending, error, refresh } = await useFetch(
          "/api/company/fetch-posted-companies",
          {
            method: "post",
            body: {
              token: this.userStore.token,
            },
          }
        );

        console.log(data.value);
        if (data.value.status) {
          this.allCompanies.companies = data.value.companies;
        }

        this.allCompanies.isFetching = false;
        this.allCompanies.isFetched = true;
      
      // COMPANY FETCHING COMPLETED

      // FETCH ALL INDUSTRIES

      var industryResult = await this.fetchIndustries();
      this.allIndustry = industryResult.industries;

      // ENDED FETCH INDUSTRIES

      // FETCH ALL EDUCATIONS

      var educationResult = await this.fetchEducations();
      this.allEducations = educationResult.educations;
      // END FETCH ALL EDUCATIONS



      this.activeMenu = 'add-new-job';


    },

    async postJob() {

      this.allJobs.postJob.isPostingJob = true;
      this.allJobs.postJob.hasError = false;
      this.allJobs.postJob.errorMessage = '';

      this.allJobs.postJob.jobTitle.hasError = false;
        this.allJobs.postJob.jobTitle.errorMessage = '';
      
        this.allJobs.postJob.company_id.hasError = false;
        this.allJobs.postJob.company_id.errorMessage = '';

        this.allJobs.postJob.jobIndustry.hasError = false;
        this.allJobs.postJob.jobIndustry.errorMessage = '';

        // collect job data

      if(this.allJobs.postJob.company_id.value == '0') {
        this.allJobs.postJob.company_id.hasError = true;
        this.allJobs.postJob.company_id.errorMessage = 'Please select a company';
      }

      if(this.allJobs.postJob.jobIndustry.value == '0') {
        this.allJobs.postJob.jobIndustry.hasError = true;
        this.allJobs.postJob.jobIndustry.errorMessage = 'Please select a industry for job';
      }

      if(this.allJobs.postJob.jobTitle.value == '') {
        this.allJobs.postJob.jobTitle.hasError = true;
        this.allJobs.postJob.jobTitle.errorMessage = 'Job title is required';
      }

      var extExperience = [];

      if(this.allJobs.postJob.jobExperience.value == 'Fresher') {
        extExperience = [];
      }else{
        extExperience = [];
      }

      var jobData = {
        token: this.userStore.token,
        company_status: true,
        company_id: this.allJobs.postJob.company_id.value,
        job_industry: this.allJobs.postJob.jobIndustry.value,
        job_title: this.allJobs.postJob.jobTitle.value,
        job_description: this.allJobs.postJob.jobDescription.value,
        job_qualification: this.allJobs.postJob.basicQualification.value,
        job_education: this.allJobs.postJob.requiredQualification.value,
        job_hiring_count: this.allJobs.postJob.numberOfHiring.value,
        job_minimum_salary: this.allJobs.postJob.minimumSalary.value,
        job_maximum_salary: this.allJobs.postJob.maximumSalary.value,
        job_salary_type: "Per Month",
        job_schedule: this.allJobs.postJob.jobType.value,
        job_ext_experience: extExperience,
        job_key_skills: this.allJobs.postJob.jobSkills.skills
      };

      console.log(jobData);

      const { data, pending, error, refresh } = await useFetch('/api/job/post-job',{
          method: 'post',
          body: jobData,
      });

      if(data.value) {

        if(data.value.status) {
          console.log('job posted');
          new Snackbar('Job posted and will be live soon!', {
            position: 'bottom-center'
          });

          this.fetchData('jobs');
          this.activeMenu = 'jobs';

        }else{
          console.log(data.value.message);
          this.allJobs.postJob.hasError = true;
          this.allJobs.postJob.errorMessage = data.value.message;
        }

      }

      if(error.value) {
        console.log('error');
        console.log(error.value);

        this.allJobs.postJob.hasError = true;
        this.allJobs.postJob.errorMessage = 'Something went wrong';
      }

      this.allJobs.postJob.isPostingJob = false;

    },

    addJobSkill() {

      if(this.allJobs.postJob.jobSkills.value != '') {

        var skills = this.allJobs.postJob.jobSkills.value.split(',');

        skills.forEach((skill) => {
          this.allJobs.postJob.jobSkills.skills.push(skill);
        });

        this.allJobs.postJob.jobSkills.value = "";

      }

    },
    removeJobSkill(index) {
      this.allJobs.postJob.jobSkills.skills.splice(index, 1);
    },
    async fetchIndustries() {
      const { data, pending, error, refresh } = await useFetch(
          "/api/industry/all-industry",
          {
            method: "post",
            body: {
              token: this.userStore.token,
            },
          }
        );

      return data.value;
    },

    async fetchEducations() {
      const { data, pending, error, refresh } = await useFetch(
          "/api/education/all-educations", {method: 'post'});

      return data.value;
    },

    async generateDescription() {

      this.allJobs.postJob.jobDescription.isGenerating = true;
      this.allJobs.postJob.jobDescription.hasError = false;
          this.allJobs.postJob.jobDescription.errorMessage = "";

      const { data, pending, error, refresh } = await useFetch(
          "/api/job/ai-jd",
          {
            method: "post",
            body: {
              job_title: this.allJobs.postJob.jobTitle.value,
            },
          }
        );

      if(data.value) {
        if(data.value.status) {

          this.allJobs.postJob.jobDescription.value = data.value.description.text;
          
          

        }else{
          this.allJobs.postJob.jobDescription.hasError = true;
          this.allJobs.postJob.jobDescription.errorMessage = data.value.message;

        }
      }

      if(error.value) {
        console.log(error.value);
        this.allJobs.postJob.jobDescription.hasError = true;
        this.allJobs.postJob.jobDescription.errorMessage = "Something went wrong!";
      }

      this.allJobs.postJob.jobDescription.isGenerating = false;

    },

    doLogout() {
      this.userStore.unsetUser();

      location.href = "/";
    },
  },
  async mounted() {
    await this.init();
  },
};
</script>