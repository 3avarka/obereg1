<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php echo("Obereg"); header('Access-Control-Allow-Origin: *');  ?></title>
    <?php include 'script.html'; ?>
    <?php include 'style.html'; ?>

</head>

<body class="screen">
    <?php include 'header.html'; ?>


<!---->
    <div id="main">
<!-----------------------------aside---------------------------------------------------->
<!--        map-->
        <?php include 'aside.html'; ?>
<!--      Path  -->
<!--        --><?php //include 'path/aside.html'; ?>
<!--        Record-->
<!--        --><?php //include 'record/aside.html'; ?>
        <!-----------------------------article---------------------------------------------------->
        <?php include 'article.html'; ?>

        <!-----------------------------figure---------------------------------------------------->
        <?php include 'figure.html'; ?>
    </div>
<!---->

    <?php include 'footer.html'; ?>
</body>

</html>