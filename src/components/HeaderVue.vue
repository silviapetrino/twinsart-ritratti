<script>
  export default {
  
  }
</script>
<template>

  <header>
    <div class="container d-flex justify-content-between align-items-center">
      <!-- logo brand -->
      <div class="brand d-flex">
        <div id="logo">logo</div>
        <span class="name d-none d-md-block">TwinsArt</span>
      </div>

      <!-- navbar  -->
      <nav class="navbar navbar-sp navbar-expand-md navbar-light text-center">
        <div class="container-fluid d-flex flex-column">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
            <i class="fa-solid fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link active nav-link-sp" aria-current="page" :to="{name: 'home'}">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link nav-link-sp" :to="{name: 'chi-siamo'}">Chi siamo</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link nav-link-sp" :to="{name: 'contatti'}">Contatti</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     
    </div>
  </header>
</template>


<style lang="scss">
@import "../scss/partials/_vars.scss";

header {
  background-color: $brand_tertiary;
  padding: 12px 0;
  position: fixed;
  z-index: 999;
  width: 100%;
  -webkit-box-shadow: 0px 5px 15px -1px rgba(0,0,0,0.4); 
  box-shadow: 0px 5px 15px -1px rgba(0,0,0,0.2);

  .brand {
      #logo {
      background: white;
      width: 35px;
      height: 35px;
      text-align: center;
      line-height: 35px;
      border-radius: 50%;
    }
    .name {
      text-align: center;
      width: 100px;
      height: 35px;
      line-height: 35px;
      font-size: 20px;
      font-weight: 500;
      font-style: italic;
      padding: 0 5px;
      color: $brand_quaternary !important
    }
  } 
  // navbar 
  .navbar-sp{
    padding: 0;
    font-size: 13px;
      .nav-link-sp {
        padding: 8px 0;
        color: $brand_quaternary !important;
        transition: all 0.3 ease;
        &:hover{
          font-weight: 600;
        }
      }
  }

}

@media all and (min-width: 768px){
    .navbar-sp {
      padding: 0;
      font-size: 15px;
        .nav-link-sp {
          padding: 5px;
        }
    }
  
  }

</style>