<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
// データベース接続情報
$host = 'localhost';
$username = 'root'; // XAMPPのデフォルトのユーザー名
$password = ''; // デフォルトではパスワードは空
$dbname = 'asagohan';

// MySQLデータベースに接続
$conn = new mysqli($host, $username, $password, $dbname);

// 接続エラーをチェック
if ($conn->connect_error) {
    die("接続失敗: " . $conn->connect_error);
}

// ユーザーIDを取得（必要に応じて調整）
$userId = 12; // ここで適切なユーザーIDを指定

// クエリを作成
$sql = "SELECT point FROM profile WHERE user_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $userId);
$stmt->execute();
$result = $stmt->get_result();

// ポイント数を取得
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $points = $row['point'];
} 

// JSON形式でポイント数を返す
echo json_encode(['points' => $points]);

// 接続を閉じる
$stmt->close();
$conn->close();
?>
