<template>
    <div class="container">
        <ul class="pagination d-flex justify-content-center">
            <li class="pagination-item">
                <button type="button" class="btn btn-primary me-1" @click="onCLickFirstPage(),scrollToTop()" :disabled="isInFirstPage">First</button>
            </li>
            <li class="pagination-item">
                <button type="button" class="btn btn-primary me-1" @click="onClickPreviousPage(),scrollToTop()" :disabled="isInFirstPage">{{precedente}}</button>
            </li>
            
            <li class="pagination-item">
                <button type="button" class="btn btn btn-primary me-1" @click="paginacorrente(), scrollToTop()" :disabled="isInCurrentPage">{{corrente}}</button>
            </li> 
            <li class="pagination-item">
                <button type="button" class="btn btn btn-primary me-1" @click="onClickNextPage(), scrollToTop()" :disabled="isInLastPage">{{prossima}}</button> 
            </li>
            <li class="pagination-item">
                <button type = "button"  class="btn btn-primary me-1" @click="onClickLastPage(), scrollToTop()" :disabled="isInLastPage">Last</button>
            </li>
            <li class="paginatio-item">
                <input type="number" class="form-contol me-5" @keyup="searchPage(), scrollToTop()"  v-model="currentPage">
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    props: {
        maxVisibleButtons:{
            type: Number,
            required: false,
            default: 3
        },
        totalPages:{
            type: Number, 
            required: true
        },
        perPage:{
            type: Number,
            required: true
        },
        currentPage:{
            type:Number,
            required: true
        }
    },
    computed:{
        startPage(){
            if(this.currentPage===1){
                return 1;
            }

            if(this.currentPage===this.totalPages){
                return this.totalPages-this.maxVisibleButtons;
            }
            
            return this.currentPage-1;
        },
        prossima () {
            if (!this.isInFirstPage){
                if(this.isInLastPage){
                    return this.currentPage;
                }
                return this.currentPage+1;
            }
            else
                return this.currentPage+2;
        },
        
        precedente() {
            if(this.isInFirstPage){
                return 1;
            }
            if(this.isInLastPage){
                return this.currentPage-2
            }
            else
                return this.currentPage-1;
        },
        
        corrente(){
            if(!this.isInFirstPage){
                if(this.isInLastPage){
                    return this.currentPage-1;
                }
               return this.currentPage;
            }
            else
                return this.currentPage+1;
        

        },

        isInCurrentPage(){
            if(this.isInLastPage){
                return false;
            }
            if(this.currentPage!=1){
                return true;
            }
        },

        isInFirstPage(){
            return this.currentPage===1;
        },
        isInLastPage(){
            return this.currentPage===this.totalPages;
        },
    },
    methods:{
        pages(){
            const range=[];
            for(let i= this.startPage; i<= Math.min(this.startPage+ this.maxVisibleButtons-1, this.totalPages); i++){
                range.push({
                    name:i, 
                    isDisabled: i === this.currendPage
                });
            }
            return page;
        },
        onCLickFirstPage(){
            this.$emit('pagechanged', 1);
        },
        onClickPreviousPage(){
            this.$emit('pagechanged', this.currentPage-1);
        },
        onClickPage(page){
            this.$emit("pagechanged", page);
        },
        onClickNextPage(){
            this.$emit("pagechanged", this.currentPage +1);
        },
        onClickLastPage(){
            this.$emit("pagechanged", this.totalPages);
        },
        isPageActive(page){
            return this.currentPage===page;
        },
        scrollToTop() {
            window.scrollTo(0,0);
        },
        searchPage(){
            this.$emit("pagechanged", this.currentPage);
        },

        paginacorrente(){
            if(this.isInFirstPage){
                return this.onClickNextPage();
            }
            if(this.isInLastPage){
                return this.onClickPreviousPage();
            }
            else{
                return this.currentPage;
            }
        }

    }
};
</script>
