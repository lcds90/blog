<template>
  <div class="container">
    <section class="articles columns">
      <div class="column is-2">
        <slot name="aside" />
      </div>
      <div class="column is-10 is-offset-one-quarter m-0 p-0">
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
