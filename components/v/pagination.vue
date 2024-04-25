<template>
  <VContainer :width="100" class="text-center">
    <ul class="flex list-unstyled gap-x-3 justify-center">
      <li class="px-5 py-2 bg-teal-100 border border-teal-400 rounded-full" :class="{ 'disabled hidden': currentPage === 1 }">
        <button @click="goToPage(currentPage - 1)">Previous</button>
      </li>
      <li v-if="showStartEllipsis" class="ellipsis text-teal-800">...</li>
      <li class="px-4 py-2 bg-teal-100 border border-teal-400 rounded-full font-semibold text-slate-600" v-for="pageNumber in displayedPages" :key="pageNumber" :class="{ 'active bg-teal-800 text-white': pageNumber === currentPage }">
        <button @click="goToPage(pageNumber)">{{ pageNumber }}</button>
      </li>
      <li v-if="showEndEllipsis" class="ellipsis text-teal-800">...</li>
      <li class="px-5 py-2 bg-teal-100 rounded-full" :class="{ 'disabled hidden': currentPage === totalPages }">
        <button @click="goToPage(currentPage + 1)">Next</button>
      </li>
    </ul>
  </VContainer>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    maxDisplayedPages: {
      type: Number,
      default: 5 // Adjust as needed
    }
  },
  computed: {
    displayedPages() {
      const start = Math.max(1, this.currentPage - Math.floor(this.maxDisplayedPages / 2));
      const end = Math.min(this.totalPages, start + this.maxDisplayedPages - 1);

      const pages = [];
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      return pages;
    },
    showStartEllipsis() {
      return this.currentPage - Math.floor(this.maxDisplayedPages / 2) > 1;
    },
    showEndEllipsis() {
      return this.currentPage + Math.floor(this.maxDisplayedPages / 2) < this.totalPages;
    }
  },
  methods: {
    goToPage(pageNumber) {
      if (pageNumber >= 1 && pageNumber <= this.totalPages) {
        this.$emit('pageChange', pageNumber);
        console.log(pageNumber);
      }
    }
  }
};
</script>

<style scoped>
.pagination {
  display: flex;
  list-style: none;
  padding: 0;
}

.pagination li {
  margin: 0 0.5rem;
}

.pagination button {
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.pagination button:hover {
  background-color: #f3f4f6;
}

.pagination button.active {
  background-color: #3182ce;
  color: white;
}

.pagination button.disabled {
  cursor: default;
  pointer-events: none;
  opacity: 0.5;
}

.ellipsis {
  padding: 0 0.5rem;
}
</style>