<template>
  <header>
    <nav class="navbar">
      <RouterLink to="/" class="logo">
        <img src="@/assets/logo.svg" alt="logo" height="25">
      </RouterLink>
      <ul class="menu">
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li></li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a target="_blank" href="/src/assets/cv.pdf">Cv</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavigationComponent"
}
</script>

<style scoped lang="scss">


header {
  position: sticky;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: rgb(243 243 239 / 93%);
  backdrop-filter: blur(3px);
  padding: 10px 10vw;

  .navbar {
    display: flex;
    justify-content: space-between;

    .logo {
      img {
        vertical-align: middle;
      }
    }

    .menu {
      display: flex;
      justify-content: space-between;
      width: 300px;
      list-style: none;

      a {
        color: #181818;
        text-decoration: none;
      }
    }
  }
}
</style>