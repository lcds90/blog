<template>
  <div class="container">
    <section class="articles">
      <div class="column is-8 is-offset-2">
        <slot />
      </div>
    </section>
  </div>
</template>
<style scoped>
.articles {
  margin: 5rem 0;
  margin-top: -50px;
}

</style>
