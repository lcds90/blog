<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="../"
        >
          <img
            alt="Logo"
            src="https://pt.gravatar.com/userimage/173633821/43a8fe0fbd25e7e5e850abc02eb801a5.png?size=1000"
            :style="{borderRadius: '5px', width: 'auto', height: '200px'}"
          >
        </a>
        <span
          class="navbar-burger burger"
          data-target="navbarMenu"
        >
          <span />
          <span />
          <span />
        </span>
      </div>
      <div
        class="navbar-menu"
        id="navbarMenu"
      >
        <div class="navbar-end">
          <slot name="navbar-links" />
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Artigos
            </a>
            <div class="navbar-dropdown">
              <slot name="navbar-menu-links" />
              <hr class="navbar-divider">
              <div class="navbar-item">
                Portfólio
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<style lang="scss">

.navbar {

  a {
    font-weight: 900;
    color: #2c3e50;

    &.router-link-exact-active {
      color: $link;
    }
  }
}
</style>
