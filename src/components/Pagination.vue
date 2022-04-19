<template>
  <div class="container">
    <ul class="pagination d-flex justify-content-center">
      <li class="pagination-item">
        <button
          type="button"
          class="btn btn-primary me-1"
          @click="onCLickFirstPage(), scrollToTop()"
          :disabled="isInFirstPage"
        >
          First
        </button>
      </li>
      <li class="pagination-item">
        <button
          type="button"
          class="btn btn-primary me-1"
          @click="onClickPreviousPage(), scrollToTop()"
          :disabled="isInFirstPage"
        >
          {{ previous }}
        </button>
      </li>
      <li class="pagination-item">
        <button
          type="button"
          class="btn btn btn-primary me-1"
          @click="pageCurrent(), scrollToTop()"
          :disabled="isInCurrentPage"
        >
          {{ current }}
        </button>
      </li>
      <li class="pagination-item">
        <button
          type="button"
          class="btn btn btn-primary me-1"
          @click="onClickNextPage(), scrollToTop()"
          :disabled="isInLastPage"
        >
          {{ next }}
        </button>
      </li>
      <li class="pagination-item">
        <button
          type="button"
          class="btn btn-primary me-1"
          @click="onClickLastPage(), scrollToTop()"
          :disabled="isInLastPage"
        >
          Last
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons;
      }
      return this.currentPage - 1;
    },
    next() {
      if (!this.isInFirstPage) {
        if (this.isInLastPage) {
          return this.currentPage;
        }
        return this.currentPage + 1;
      } else return this.currentPage + 2;
    },
    previous() {
      if (this.isInFirstPage) {
        return 1;
      }
      if (this.isInLastPage) {
        return this.currentPage - 2;
      } else return this.currentPage - 1;
    },
    current() {
      if (!this.isInFirstPage) {
        if (this.isInLastPage) {
          return this.currentPage - 1;
        }
        return this.currentPage;
      } else return this.currentPage + 1;
    },
    isInCurrentPage() {
      if (this.isInLastPage) {
        return false;
      }
      if (this.currentPage != 1) {
        return true;
      }
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    pages() {
      const range = [];
      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currendPage,
        });
      }
      return page;
    },
    onCLickFirstPage() {
      this.$emit("pagechanged", 1);
    },
    onClickPreviousPage() {
      if (!this.isInLastPage)
        this.$emit("pagechanged", this.currentPage - 1);
      else
        this.$emit("pagechanged", this.currentPage - 2);
    },
    onClickPage(page) {
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      if (!this.isInFirstPage)
        this.$emit("pagechanged", this.currentPage + 1);
      else
        this.$emit("pagechanged", this.currentPage + 2);
    },
    onClickLastPage() {
      this.$emit("pagechanged", this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    searchPage() {
      this.$emit("pagechanged", this.currentPage);
    },
    pageCurrent() {
      if (this.isInFirstPage) {
        return this.onClickNextPage();
      }
      if (this.isInLastPage) {
        return this.onClickPreviousPage();
      } else {
        return this.currentPage;
      }
    },
  },
};
</script>
