<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">


  <div class="footer-background">
    <section class="footer">
      <h5>About Let Me Cook</h5>
      <div class="footere-p">
        <p>Founded in 2024, Let Me Cook is a platform designed to inspire home cooks of all skill levels to create meals using leftover ingredients and reduce food waste. The platform features engaging cooking challenges and an interactive social page, fostering community support and collaboration.</p>
      </div>

      <div class="icons">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-tiktok"></i>
        <i class="fa-brands fa-snapchat"></i>
      </div>

      <br>

      <div class="copyright">
        <p>&copy; 2024 Let Me Cook. All rights reserved.</p>
      </div>
    </section>
  </div>
</template>

<style>
html, body {
  overflow-x: hidden;
}

.footer-background {
  background-color: rgb(255, 157, 101); 
  /* height: 200; */
}

.footer {
  color: white;
  width: 100%;
  text-align: center;
  margin: auto;
  padding: 10px 0;
}

.footer h5 {
  margin-bottom: 15px;
  margin-top: 8px;
  font-weight: 600;
  font-size: 22px;
  font-family: "Trirong", serif;
}

.footer p {
  font-size: medium;
  width: 90%;
}

.footere-p {
  display: flex;
  justify-content: center;
}

.icons i {
  padding: 2px;
}

.copyright {
  font-size: smaller;
  color: rgb(245, 245, 245);
  display: flex;
  justify-content: center;
}
</style>