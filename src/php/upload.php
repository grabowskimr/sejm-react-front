<?php
    $success = 0;
    $uploadedFile = '';
    $uploadPath = 'images/posel/';
    $targetPath = $uploadPath . basename( $_FILES['image']['name']);

    if(@move_uploaded_file($_FILES['image']['tmp_name'], $targetPath)){
        $success = 1;
        $uploadedFile = $targetPath;
        echo $uploadedFile;
    }
?>