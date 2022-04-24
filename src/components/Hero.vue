<template>
  <section class="hero is-small is-bold">
    <div class="hero-body">
      <div class="hero-container container p-4" />
    </div>
  </section>
</template>

<style>
.hero {
  background-color: var(--primary-color) !important;
}

.hero-content {
  left: 0 !important;
  top: 0 !important;
}

@media screen and (min-width: 768px) {
  .hero-content {
    position: absolute !important;
    left: 10vw !important;
    top: -20px !important;
    font-weight: 800;
  }
}
</style>
