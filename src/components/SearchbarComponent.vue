<template>
    <div class="searchBar">
        <div class="form-control searchBar-type">
            <label for="postType" class="form-label">貼文分類</label>
            <select name="" id="postType">
                <option value="1">最新貼文</option>
                <option value="2">熱門貼文</option>
            </select>
        </div>
        <div class="searchBar-keyword">
            <div class="form-control searchBar-keyword-input">
                <label for="keyword" class="form-label">關鍵字</label>
                <input type="search" id="keyword">
            </div>
            <button type="button" class="searchBar-keyword-btn">
                <i class="bi bi-search"></i>
            </button>
        </div>
    </div>
</template>
<script>
export default {

};
</script>
