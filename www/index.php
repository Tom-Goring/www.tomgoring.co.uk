<!DOCTYPE html>
<html lang="en">
<head>
    <title>Tom Goring | Intern Software Engineer</title>
    <?php include ('html/header.html'); ?>
</head>
<body>

<section class="flex" id="hero-page">

    <div class="canvas">
        <canvas id="canvas"></canvas>
    </div>

    <div class="text">
        <span>Hello, I'm</span>
        <span class="highlight">Tom Goring</span>.
        <br>
        <span class="sub-text">Software Engineer Intern</span>
    </div>
    <button><span>Find out more</span><i class="fas fa-arrow-right"></i></button>

</section>

<section>
    <nav class="flex">
        <div class="page-links">
            <div class="page-link active" dest="home">home</div>
            <div class="page-link" dest="about">about</div>
            <div class="page-link" dest="timeline">timeline</div>
            <div class="page-link" dest="projects">projects</div>
            <div class="page-link" dest="contact">contact</div>
        </div>
    </nav>
</section>

<section>

</section>

<script src="js/canvas.js"></script>
<script src="js/scripts.js"></script>
<?php include ('html/footer.html'); ?>

</body>
</html>