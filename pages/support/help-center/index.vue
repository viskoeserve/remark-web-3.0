<template>
  <section>
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div class="container mx-auto px-4 sm:px-8 max-w-3xl">
        <div class="main-title mb-8">
          <h1 class="font-bold text-2xl text-center">How can we help you?</h1>
        </div>

        <div
          class="main-search mb-8 rounded-lg shadow-lg px-6 py-3 w-full flex items-center space-x-6 border border-gray-200 border-opacity-75"
        >
          <button class="focus:outline-none" @click="focusSearch">
            <svg
              class="w-6 h-6 text-gray-500"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          <input
            ref="search"
            type="text"
            placeholder="Describe your issue"
            class="text-base w-full bg-transparent focus:outline-none"
          />
        </div>

        <div
          class="main-question mb-8 flex flex-col divide-y text-gray-800 text-base"
        >
          <div
            class="item px-6 py-6"
            v-for="(item, index) in items"
            :key="index"
          >
            <a
              href="#"
              class="flex items-center justify-between"
              @click.prevent="toggle(index)"
            >
              <h4 :class="{ 'text-600 font-bold': openIndex === index }" style="color: #115E59;">
                {{ item.title }}
              </h4>
              <svg
                class="w-5 h-5 text-gray-500"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
            <transition name="fade">
              <div v-if="openIndex === index" class="mt-3 text-gray-600">
                {{ item.content }}
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Data for the collapsible items
const items = ref([
  {
    title: "Job Search and Application",
    content:
      "Learn how to optimize your profile and search for jobs effectively using filters and applying for jobs with ease.",
  },
  {
    title: "Account and Profile Setup",
    content:
      "Guide on setting up and updating your account with essential information like education, skills, and experience.",
  },
  {
    title: "Resume Upload and Management",
    content:
      "Steps for uploading resumes, managing multiple resumes, and using our resume builder tool.",
  },
  {
    title: "Notifications and Alerts",
    content:
      "Set up job alerts and manage your notifications to receive the latest job updates tailored to your preferences.",
  },
  {
    title: "Interview Tips and Preparation",
    content:
      "Tips and resources to help you prepare for interviews, including online interview best practices and follow-up guidance.",
  },

  {
    title: "Employer Guide",
    content:
      "How employers can post jobs, manage applications, and find the best candidates using our platform.",
  },
]);

// Data for the images section

// State for open/close functionality
const openIndex = ref(null);

// Function to toggle the visibility of each item
const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};

// Function to focus the search input
const focusSearch = () => {
  document.querySelector("input[ref=search]").focus();
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
