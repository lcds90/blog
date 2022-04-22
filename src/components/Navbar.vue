<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="../"
        >
          <img
            src="https://pt.gravatar.com/userimage/173633821/43a8fe0fbd25e7e5e850abc02eb801a5.png?size=1000"
            alt="Logo"
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
        id="navbarMenu"
        class="navbar-menu"
      >
        <div class="navbar-end">
          <slot name="navbar-links" />
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Menu
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
