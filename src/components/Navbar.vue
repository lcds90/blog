<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <!-- <a class="navbar-item" href="../">
                    <img src="../images/bulma.png" alt="Logo">
                </a> -->
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
