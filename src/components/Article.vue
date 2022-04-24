<script setup lang="ts">
defineProps({
  subtitle: {
    default: '',
    required: false,
    type: String,
  },
  title: {
    default: '',
    required: false,
    type: String,
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

.card {
  background-color: var(--accent-color);
}

.card-content {
  background-color: var(--accent-color);
}

.content p {
    margin: 15px 0;
    line-height: 1.9;
}
.article-title {
  font-size: 2rem;
  font-weight: lighter;
  line-height: 2;
  color: var(--text-primary-color);
}
.article-subtitle {
  margin-bottom: 3rem;
  color: var(--text-primary-color);
}
.article-body {
  margin: 0 5vw;
  line-height: 1.4;
  color: var(--text-primary-color);
}

.author-image {
    position: absolute;
    top: 1vh;
    left: 2vh;
    width: 60px;
    height: 60px;
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

@media screen and (min-width: 768px) {
  .author-image {
    position: absolute;
    width: 60px;
    height: 60px;
    border: 3px solid #ccc;
    border-radius: 50%;
  }
}

</style>
