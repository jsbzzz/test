import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

// POST 요청의 body 데이터를 읽기 위한 설정
app.use(express.urlencoded({ extended: true }));

// 1. 메인 화면(index.html) 제공
app.use(express.static('public'));

// 2. 동적 페이지 생성 라우터 (POST /welcome)
app.post('/welcome', (req, res) => {
    const username = req.body.username; // 전달받은 아이디

    // 서버가 직접 HTML을 동적으로 렌더링해서 응답
    res.send(`
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <title>동적 환영 페이지</title>
        </head>
        <body style="font-family: Arial; display: flex; justify-content: center; align-items: center; height: 100vh; background: #e2f0d9;">
            <div style="background: white; padding: 40px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); text-align: center;">
                <h1 style="color: #385723;">✨ 서버에서 동적으로 그린 페이지</h1>
                <p style="font-size: 18px;">입력하신 아이디: <strong>${username}</strong>님 환영합니다!</p>
                <a href="/" style="display: inline-block; margin-top: 20px; padding: 10px 20px; background: #385723; color: white; text-decoration: none; border-radius: 4px;">처으로 돌아가기</a>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});