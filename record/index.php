<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php echo("Obereg"); header('Access-Control-Allow-Origin: *');  ?></title>
    <?php include '../map/script.html'; ?>
    <?php include '../map/style.html'; ?>

</head>

<body class="screen">
    <?php include '../map/header.html'; ?>


<!---->
    <div id="main">
<!-----------------------------aside---------------------------------------------------->
<!--        map-->
<!--        --><?php //include 'asideRecord.html'; ?>
<!--      Path  -->
<!--        --><?php //include 'path/aside.html'; ?>
<!--        Record-->
<!--        --><?php //include 'record/aside.html'; ?>
        <!-----------------------------article---------------------------------------------------->
<!--        --><?php //include 'articleRecord.html'; ?>

        <!-----------------------------figure---------------------------------------------------->
<!--        --><?php //include '../map/figure.html'; ?>
    </div>
<!---->

<!--    --><?php //include '../map/footer.html'; ?>
</body>

</html>