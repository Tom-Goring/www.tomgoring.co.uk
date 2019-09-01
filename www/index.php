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
    <nav class="flex">
        <div class="nav-els">
            <div class="nav-el active" dest="home">home</div>
            <div class="nav-el" dest="about">about</div>
            <div class="nav-el" dest="timeline">timeline</div>
            <div class="nav-el" dest="projects">projects</div>
            <div class="nav-el" dest="contact">contact</div>
        </div>
    </nav>

</section>



<section>
    <div class="container" id="about">
        <div class="row">
            <div class="col-sm">
                <h1>Title</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <h2>Content</h2>
            </div>
            <div class="col-sm">
                <h2>Content</h2>
            </div>
        </div>
    </div>

</section>

<section>

</section>

<script src="js/canvas.js"></script>
<script src="js/scripts.js"></script>
<?php include ('html/footer.html'); ?>

</body>
</html>