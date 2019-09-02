<!DOCTYPE html>
<html lang="en">
<head>
    <title>Tom Goring | Intern Software Engineer</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<form action="dnd.php" method="post">
    Name: <input type="text" name="name"><br/>
    Class: <input type="text" name="class"><br/>
    Level: <input type="number" name="level"><br/>
    <input type="submit">
</form>

<?php
    require_once('character.php');
    if (isset($_POST)) {
        $char = new character();

        $char->name = $_POST['name'];
        $char->class = $_POST['class'];
        $char->level = $_POST['level'];

        $char->saveToXML();
    }
?>

</body>
</html>