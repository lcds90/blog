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
        <slot name="modes" />
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
            <span class="navbar-link" />
            <div class="navbar-dropdown">
              <slot name="navbar-menu-links" />
              <hr class="navbar-divider">
              <div class="navbar-item">
                <a
                  class="button is-link is-rounded is-outlined"
                  href="https://lcds.vercel.app/"
                  target="_blank"
                >Portfolio</a>
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
  width: 100vw;
  height: 10vh;
  background-color: var(--background-color-primary) !important;
  border-bottom: 2px solid var(--accent-color);
  a {
    font-weight: 900;
    color: var(--text-color-primary);

    &.router-link-exact-active {
      color: $link;
    }
  }
}
</style>
