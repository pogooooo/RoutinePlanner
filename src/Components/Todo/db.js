// src/db/db.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// 데이터베이스 파일 경로 설정
const dbPath = path.resolve(__dirname, '../../userDatabase.db');

// SQLite 데이터베이스 연결
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to the SQLite database.");
    }
});

// 유저 테이블 생성 및 기본 데이터 초기화
db.serialize(() => {
    // 유저 테이블 생성
    db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      completed_todos INTEGER DEFAULT 0
    )
  `);

    // 기본 유저 데이터 추가
    const insert = db.prepare("INSERT INTO users (name, completed_todos) VALUES (?, ?)");
    insert.run("유저1", 5);
    insert.run("유저2", 3);
    insert.run("현정", 0);
    insert.finalize();

    console.log("Default users inserted into the database.");
});

// 데이터베이스 연결 종료 함수
const closeDatabase = () => {
    db.close((err) => {
        if (err) {
            console.error("Error closing the database:", err);
        } else {
            console.log("Database connection closed.");
        }
    });
};

// 데이터베이스 연결 및 종료 함수 내보내기
module.exports = {
    db,
    closeDatabase,
};
