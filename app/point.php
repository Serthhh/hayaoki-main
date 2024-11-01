<?php
// 出力バッファリングを開始
ob_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['buttonPressed'])) {
        header("Location: helloworld.php");
        exit;
    }
}

// 出力バッファをフラッシュ
ob_end_flush();
?>
