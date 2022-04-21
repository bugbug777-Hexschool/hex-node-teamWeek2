<template>
  <div class="page-title">張貼動態</div>
  <div class="post">
    <form @submit.prevent="send_post">
      <div class="form-control">
        <label for="content" class="form-label">貼文內容</label>
        <textarea
          id="content"
          rows="7"
          v-model="post.userContent"
          placeholder="輸入您的貼文內容"
        ></textarea>
      </div>
      <div class="form-upload">
        <label for="upload" class="form-label">上傳圖片</label>
        <input id="upload" type="file" />
      </div>
      <div class="post__image">
        <img :src="post.userPhoto" alt="upload image" />
      </div>
      <div class="post__feedback" style="display: none">
        <div class="post__feedback-error">圖片檔案過大，僅限 1mb 以下檔案</div>
        <div class="post__feedback-error">圖片格式錯誤，僅限 JPG、PNG 圖片</div>
      </div>
      <div class="post__submit">
        <button type="submit" class="btn btn-primary">送出貼文</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      post: {
        userName: '邊緣小杰',
        userContent: '今天竟然下雪哩！',
        userPhoto:
          'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      },
    };
  },
  methods: {
    send_post() {
      const api = 'https://stark-lake-13823.herokuapp.com/posts';
      this.$http
        .post(api, this.post)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
