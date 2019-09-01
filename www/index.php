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
    <div class="container centered" id="about">
        <div class="row" id="about-title">
            <div class="col-sm flex">
                <h2>About</h2>
                <h1>Get to know me</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <h3>My Profile</h3>
                <p>I am a student at the University of the West of England studying Computer Science,
                    I have a keen interest in learning new fields and applying this knowledge to create
                    interesting things. I have a few different passions; I'm learning Korean (안녕하세요!),
                    play video games, program things that interest me, and generally like to stay on
                    top of current world events.</p>
                <br>
                <ul class="about-list">
                    <li>
                        <strong>Name:</strong>
                        <br>
                        <span>Tom Goring</span>
                    </li>
                    <li>
                        <strong>Place of Birth:</strong>
                        <br>
                        <span>Plymouth, UK</span>
                    </li>
                    <li>
                        <strong>Date of Birth:</strong>
                        <br>
                        <span>8th February 1997</span>
                    </li>
                    <li>
                        <strong>Current Location:</strong>
                        <br>
                        <span>Cambridge, UK</span>
                    </li>
                    <li>
                        <strong>Current Job:</strong>
                        <br>
                        <span>Intern Software Engineer</span>
                    </li>
                    <li>
                        <strong>Email Address:</strong>
                        <br>
                        <span>tgoring97@gmail.com</span>
                    </li>
                </ul>
            </div>
            <div class="col-sm">
                <h3>My Skills</h3>
                <p>
                    I haven't been in the industry for long, but have accrued experience with multiple
                    different technologies; below you will find a list of languages, frameworks, and scopes
                    I am familiar with.
                </p>
                <br>
                <div class="row flex">
                    <div class="card">
                        <div class="card-contents">
                            <h4>Currently Learning (At home)</h4>
                            <ul>
                                <li>Web front-end stack (HTML, CSS, JS)</li>
                                <li>Web back-end stack (PHP, Apache, Nginx, etc)</li>
                                <li>Docker</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-contents">
                            <h4>In Use (At work)</h4>
                            <ul>
                                <li>Low level C programming (Linux, QEMU, etc)</li>
                                <li>Agile Development Practises (Scrum, Kanban)</li>
                                <li>Python (Mostly interfacing with OS functions)</li>
                                <li>Git (Interacting with complex, multi repo projects)</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-contents">
                            <h4>Familiar (Have experience with, but not <i>experienced</i> with)</h4>
                            <ul>
                                <li>Java and Object Oriented Development</li>
                                <li>SQL (MySQL & JDBC)</li>
                                <li>Database Structure</li>
                                <li>C++</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>


<script src="js/canvas.js"></script>
<script src="js/scripts.js"></script>
<?php include ('html/footer.html'); ?>

</body>
</html>