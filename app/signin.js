document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // デフォルトの送信を防ぐ

    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    fetch('http://localhost/app/signin.html', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        const messageDiv = document.getElementById('login-message');
        if (data.success) {
            messageDiv.textContent = 'ログイン成功！';
            // 必要に応じてリダイレクト処理などを追加
        } else {
            messageDiv.textContent = 'ログイン失敗: ' + data.message;
        }
    })
    .catch(error => console.error('Error:', error));
});
