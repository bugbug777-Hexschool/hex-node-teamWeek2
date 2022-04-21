<template>
  <div class="page-title">張貼動態</div>
  <div class="post">
    <form>
      <div class="form-control">
        <label for="content" class="form-label">貼文內容</label>
        <textarea
          id="content"
          rows="7"
          v-model="post.content"
          placeholder="輸入您的貼文內容"
        ></textarea>
      </div>
      <div class="form-upload">
        <label for="upload" class="form-label">上傳圖片</label>
        <input id="upload" type="file" />
      </div>
      <div class="post__image">
        <img src="@/assets/img/image@2x.png" alt="upload image" />
      </div>
      <div class="post__feedback">
        <div class="post__feedback-error">圖片檔案過大，僅限 1mb 以下檔案</div>
        <div class="post__feedback-error">圖片格式錯誤，僅限 JPG、PNG 圖片</div>
      </div>
      <div class="post__submit">
        <button type="submit" class="btn btn-primary" disabled>送出貼文</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      post: {
        content: '今天竟然下雪哩！',
      },
    };
  },
};
</script>
