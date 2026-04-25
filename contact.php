<!-- <?php
// 
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';

    $file = "messages.json";

    $data = file_exists($file) ? json_decode(file_get_contents($file), true) : [];

    $data[] = [
        "name" => $name,
        "email" => $email,
        "message" => $message,
        "date" => date("Y-m-d H:i:s")
    ];

    file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));

    echo "✅ تم إرسال رسالتك بنجاح";

} else {
    echo "❌ Invalid Request";
}

?> -->
