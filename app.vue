<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#" style="font-weight: bolder; font-size: 24px;">Delizioso.tgr</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a id="navBut" class="nav-link active" aria-current="page" href="#"><button>Dash</button></a>
          </li>
          <li class="nav-item">
            <a id="navBut" class="nav-link" href="#content"><button>Desc</button></a>
          </li>
          <li class="nav-item">
            <a id="navBut" class="nav-link" href="#menu"><button>Menu</button></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div id="navbar" class="justify-content-center">
            <div class="bg-fluid">
                <svg id="wave" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                            <stop stop-color="rgba(255, 89, 0, 1)" offset="0%"></stop>
                            <stop stop-color="rgba(255, 89, 0, 1)" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,80L14.1,78.3C28.2,77,56,73,85,61.7C112.9,50,141,30,169,31.7C197.6,33,226,57,254,60C282.4,63,311,47,339,45C367.1,43,395,57,424,51.7C451.8,47,480,23,508,16.7C536.5,10,565,20,593,31.7C621.2,43,649,57,678,55C705.9,53,734,37,762,31.7C790.6,27,819,33,847,45C875.3,57,904,73,932,78.3C960,83,988,77,1016,68.3C1044.7,60,1073,50,1101,53.3C1129.4,57,1158,73,1186,71.7C1214.1,70,1242,50,1271,50C1298.8,50,1327,70,1355,80C1383.5,90,1412,90,1440,81.7C1468.2,73,1496,57,1525,51.7C1552.9,47,1581,53,1609,46.7C1637.6,40,1666,20,1694,11.7C1722.4,3,1751,7,1779,21.7C1807.1,37,1835,63,1864,76.7C1891.8,90,1920,90,1948,83.3C1976.5,77,2005,63,2019,56.7L2032.9,50L2032.9,100L2018.8,100C2004.7,100,1976,100,1948,100C1920,100,1892,100,1864,100C1835.3,100,1807,100,1779,100C1750.6,100,1722,100,1694,100C1665.9,100,1638,100,1609,100C1581.2,100,1553,100,1525,100C1496.5,100,1468,100,1440,100C1411.8,100,1384,100,1355,100C1327.1,100,1299,100,1271,100C1242.4,100,1214,100,1186,100C1157.6,100,1129,100,1101,100C1072.9,100,1045,100,1016,100C988.2,100,960,100,932,100C903.5,100,875,100,847,100C818.8,100,791,100,762,100C734.1,100,706,100,678,100C649.4,100,621,100,593,100C564.7,100,536,100,508,100C480,100,452,100,424,100C395.3,100,367,100,339,100C310.6,100,282,100,254,100C225.9,100,198,100,169,100C141.2,100,113,100,85,100C56.5,100,28,100,14,100L0,100Z"></path>
                </svg>
            </div>
        </div>
    <div id="dashboard">
        <div class="container">
            <div id="highlights" class="d-flex justify-content-center">
                <div id="hTitle" class="mt-3 mb-4">
                    <h1>OUR BEST SELLER</h1>
                </div>
            </div>
        </div>
        <div id="myCarousel" class="carousel slide mt-4 mb-5" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 5"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="container">
                        <div class="carousel-caption">
                            <img id="gambarMenu" src="./gambar/delizioso1.png"/>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container">
                        <div class="carousel-caption">
                            <img id="gambarMenu" src="./gambar/delizioso2.png"/>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container">
                        <div class="carousel-caption">
                            <img id="gambarMenu" src="./gambar/delizioso3.png"/>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            <div id="content"></div>
        </div>
        <div id="content" class="mb-5 pt-5">
            <div id="desc" class="d-flex flex-column justify-content-center">
                <div id="descT" class="mb-5">
                    <h1>TITLE OF DESCRIPTION</h1>
                </div>
                <div id="descP" class="mt-3 mb-5">
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
                        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a 
                        Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin 
                        words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in 
                        classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 
                        and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written 
                        in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 
                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>   
                    <div id="menu"></div>
                </div>
            </div>
        </div>
        <div id="menu">
            <div class="container" style="text-align: center;">
                <div id="descT" class="my-5">
                    <h1 style="font-weight: bolder;">MENU</h1>
                </div>
                <div class="row">
                    <div id="card" class="col-lg-3 my-2">
                        <div class="card">
                            <img class="card-img-top" src="./gambar/delizioso1.png" alt="Card image cap">
                            <div class="card-body">
                                <h3 class="card-title" style="font-weight: bold;">Card title</h3>
                            </div>
                        </div>
                    </div>
                    <div id="card" class="col-lg-3 my-2">
                        <div class="card">
                            <img class="card-img-top" src="./gambar/delizioso2.png" alt="Card image cap">
                            <div class="card-body">
                                <h3 class="card-title" style="font-weight: bold;">Card title</h3>
                            </div>
                        </div>
                    </div>
                    <div id="card" class="col-lg-3 my-2">
                        <div class="card">
                            <img class="card-img-top" src="./gambar/delizioso3.png" alt="Card image cap">
                            <div class="card-body">
                                <h3 class="card-title" style="font-weight: bold;">Card title</h3>
                            </div>
                        </div>
                    </div>
                    <div id="card" class="col-lg-3 my-2">
                        <div class="card">
                            <img class="card-img-top" src="./gambar/delizioso4.png" alt="Card image cap">
                            <div class="card-body">
                                <h3 class="card-title" style="font-weight: bold;">Card title</h3>
                            </div>
                        </div>
                    </div>
                    <div id="card" class="col-lg-3 my-2">
                        <div class="card">
                            <img class="card-img-top" src="./gambar/delizioso5.png" alt="Card image cap">
                            <div class="card-body">
                                <h3 class="card-title" style="font-weight: bold;">Card title</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="height: 60px;"></div>
            </div>
        </div>
    </div>
    <div id="footer" class="p-4">
        <div class="container mt-3">
            <div class="row" style="font-weight: bold;">
                <div class="col-md-6 txt-md-start my-5">
                    <h3 style="font-weight: bolder;">DELIZIOSO.TGR</h3>
                    <br>
                    <p style="font-size: 18px;">Puri Beta Jl. Taman Bobo<br>Boulevard No.111, Dilarang Ortu, Tanggar</p>
                    <p style="font-size: 15px;">Phone : (+62) 838877777521</p>
                </div>
                <div class="col-md-6 txt-md-end my-5">
                    <div class="mt-5"></div>
                    <div id="sosmed" class="text-end">
                        <img src="./gambar/instagram.png" class="img-fluid mx-2">
                        <img src="./gambar/whatsapp2.png" class="img-fluid">
                    </div>
                    <div class="text-end my-2">
                        <p>Copyright &copy; 2022, All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

  html {
      font-family: monospace;
  }
  #dashboard {
      background-color: rgb(245, 241, 237);
  }

  /* NAVBAR */
  nav {
      background-color: rgb(255, 89, 0);
  }
  #navbar {
      background-color: rgb(245, 241, 237);
      margin-top: 60px;
      position: sticky;
  }
  #navBut button {
      font-weight: bold;
      height: 30px;
      width: 70px;
      margin-top: 10px;
      background-color: rgb(255, 187, 86);
      border: 2px solid black;
      border-radius: 20px;
      box-shadow: 0 4px 0 rgb(255, 187, 86);
      margin-left: 10px;
      transition: 0.25s;
  }
  #navBut button:hover {
      filter: brightness(1.5);
      scale: 1.1;
      transition: 0.5s;
  }

  /* CAROUSEL */
  #myCarousel {
      background-color: rgb(245, 241, 237);
  }
  #hTitle h1 {
      font-weight: bold;
      font-size: 35px;
  }
  .carousel {
      margin-bottom: 4rem;
  }
  .carousel-caption {
      bottom: 3rem;
      z-index: 10;
  }
  .carousel-item {
      height: 28rem;
  }
  #gambarMenu {
      height: 28rem;
  }
  @media (max-width: 600px) {
      #gambarMenu{
          height: 18rem;
      }
  }
  .carousel-control-prev-icon {
      filter: brightness(0.2);
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
  }
  .carousel-control-next-icon {
      filter: brightness(0.2);
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
  }

  /* PAGE 02 */
  #descT h1 {
      text-align: center;
      font-weight: bold;
      font-size: 34px;
  }
  #descP p{
      margin-left: 10%;
      margin-right: 10%;
      text-align: center;
      font-weight: 600;
      font-size: 22px;
  }

  /* PAGE 03 */
  #content {
      background-image: url("gambar/bg-delizioso.png");
      background-repeat: no-repeat;
      background-attachment: relative;
      background-position: center;
  }
  .card-body {
      background-color: rgb(255, 187, 86);
      color: black;
      border-radius: 0 0 5px 5px;
  }
  .card img {
      height: 250px;
      object-fit: cover;
      border: 6px solid rgb(255, 187, 86);
  }

  /* FOOTER */
  #footer {
      background-color: rgb(114, 118, 122);
      color: rgb(245, 241, 237);
  }
  #sosmed img{
      width: 50px;
  }

</style>
