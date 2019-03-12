<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>借用系統</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+TC" rel="stylesheet"> <!--google font-->
    <script src="main.js"></script>
</head>
<body>
    <div class="box">
        <h2>借用系統</h2>
        <form action="" method="post" name="formPost" onSubmit="return checkForm();">
            <div class="borrow-box">
                <input type="text" name="borrower-name" required>
                <label for="borrower-name">姓名</label>
            </div>
            <div class="borrow-box">
                <input type="text" name="student-ID" required>
                <label for="student-ID">學號</label>
            </div>
            <div class="borrow-box">
                <div class="floating-box" id="equip-name">
                    <input type="text" name="equipment-name" required>
                    <label for="equipment-name">借用器材名稱</label>
                </div>
                <div class="floating-box" id="num">
                    <input type="text" name="number" required>
                    <label for="number">數量</label>
                </div>
            </div>
            <div class="borrow-box">
                <input type="text" name="contact-num" required>
                <label for="contact-num">連絡電話</label>
            </div>
            <div class="borrow-box">
                <input type="email" name="email" required>
                <label for="email">電子郵件</label>
            </div>
            <button type="submit">登記</button>
        </form>
</div>
</body>
</html>