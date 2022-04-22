<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: '',
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
    required: true,
  },
});
</script>

<template>
  <article class="card article">
    <main class="card-content">
      <section class="media">
        <div class="media-center">
          <slot name="image" />
        </div>
        <div class="media-content has-text-centered">
          <p class="title article-title">
            {{ title }}
          </p>
          <p class="subtitle is-6 article-subtitle">
            {{ subtitle }}
          </p>
        </div>
      </section>
      <section class="content article-body">
        <slot name="content" />
      </section>
    </main>
  </article>
</template>

<style>
.content p {
    line-height: 1.9;
    margin: 15px 0;
}
.article-title {
  font-size: 2rem;
  font-weight: lighter;
  line-height: 2;
}
.article-subtitle {
  color: #909AA0;
  margin-bottom: 3rem;
}
.article-body {
  line-height: 1.4;
  margin: 0 6rem;
}

.author-image {
    position: absolute;
    top: -30px;
    left: 50%;
    width: 60px;
    height: 60px;
    margin-left: -30px;
    border: 3px solid #ccc;
    border-radius: 50%;
}
.media-center {
  display: block;
  margin-bottom: 1rem;
}
.media-content {
  margin-top: 3rem;
}
</style>
