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
          <router-link
            class="navbar-item"
            to="/"
          >
            Básico
          </router-link>
          <router-link
            class="navbar-item"
            to="/about"
          >
            Building parts
          </router-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Menu
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item">
                Início
              </a>
              <a class="navbar-item">
                Sobre o projeto
              </a>
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
