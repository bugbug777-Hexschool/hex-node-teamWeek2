<template>

  <Searchbar />
  <!-- 動態牆 -->
  <ul class="postList">
    <li class="postList-item">
      <div class="post">
        <div class="post__meta metaItem">
          <img class="metaItem-avatar" src="@/assets/img/user.png" alt="headshot"/>
          <div class="metaItem-info">
            <a class="metaItem-name" href="#">邊緣小杰</a>
            <time class="metaItem-date">2022/1/10 12:00</time>
          </div>
        </div>
        <p class="post__content">
          外面看起來就超冷....<br />
          我決定回被窩繼續睡....&gt;.&lt;
        </p>
        <div class="post__image">
          <img src="@/assets/img/image@2x.png" alt="snow"/>
        </div>

        <!-- 按讚 -->
        <div class="post__actions">
          <button type="button" class="post__actions-like">
            <i class="bi bi-hand-thumbs-up"></i>
            <span>12</span>
          </button>
        </div>
        <!-- 留言 -->
        <div class="post__reply">
          <img
            src="@/assets/img/user.png"
            alt="headshot"
            class="post__reply-avatar"
          />
          <div class="form-control post__reply-input">
            <label for="" class="form-label"></label>
            <input type="text" placeholder="留言..."/>
          </div>
          <button class="post__reply-btn" type="button">留言</button>
        </div>
        <!-- 留言串 -->
        <ul class="post__replyList">
          <li class="post__replyList-item">
            <div class="metaItem">
              <img
                class="metaItem-avatar"
                src="@/assets/img/user5.png"
                alt="headshot"
              />
              <div class="metaItem-info">
                <a class="metaItem-name" href="#">希琳</a>
                <time class="metaItem-date">2022/1/11 10:00</time>
              </div>
            </div>
            <p>真的～我已經準備冬眠了</p>
          </li>
          <li class="post__replyList-item">
            <div class="metaItem">
              <img
                class="metaItem-avatar"
                src="@/assets/img/user5-2.png"
                alt="headshot"
              />
              <div class="metaItem-info">
                <a class="metaItem-name" href="#">波吉</a>
                <time class="metaItem-date">2022/1/11 10:00</time>
              </div>
            </div>
            <p>會嗎？我沒穿衣服都不覺得冷</p>
          </li>
        </ul>
      </div>
    </li>
    <li class="postList-item">
      <div class="post">
        <div class="post__meta metaItem">
          <img class="metaItem-avatar" src="@/assets/img/user.png" alt="headshot"/>
          <div class="metaItem-info">
            <a class="metaItem-name" href="#">邊緣小杰</a>
            <time class="metaItem-date">2022/1/10 12:00</time>
          </div>
        </div>
        <p class="post__content">搶到想要的 NFT 啦！ya~~</p>
        <div class="post__image">
          <img
            src="@/assets/img/image2@2x.png"
            alt="snow"
          />
        </div>
        <!-- 按讚 -->
        <div class="post__actions">
          <div class="post__actions-empty">
            <i class="bi-hand-thumbs-up"></i>
            <span>成為第一個按讚的朋友</span>
          </div>
        </div>
        <!-- 留言 -->
        <div class="post__reply">
          <img
            src="@/assets/img/user.png"
            alt="headshot"
            class="post__reply-avatar"
          />
          <div class="form-control post__reply-input">
            <label for="" class="form-label"></label>
            <input type="text" placeholder="留言..."/>
          </div>
          <button class="post__reply-btn" type="button">留言</button>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import Searchbar from '@/components/SearchbarComponent.vue';

export default {
  components: {
    Searchbar,
  },
};
</script>
