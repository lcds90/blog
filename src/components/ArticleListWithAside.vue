<template>
  <div class="container">
    <section class="articles columns">
      <div class="column is-3 is-offset-1">
        <slot name="aside" />
      </div>
      <div class="column is-8">
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
