<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

    <div class="container-fluid">
      <a class="navbar-brand" href="/">{{projectName}}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#/maps">Maps</a>
          </li>
        </ul>
      </div>

<!--      <div class="collapse navbar-collapse" id="navbarSupportedContent">-->
<!--        <form class="d-flex">-->
<!--          <input class="form-control me-2" type="search"-->
<!--                 placeholder="To Active Search"-->
<!--                 aria-label="Search">-->
<!--          <button class="btn btn-outline-success" type="submit">Search</button>-->
<!--        </form>-->
<!--      </div>-->
    </div>
  </nav>

</template>

<script>
  export default {
    name: 'Navbar',

    data() {
      return {
        projectName: 'Geo-Map'
      }
    },

  }
</script>

