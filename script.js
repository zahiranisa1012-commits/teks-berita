// Login sederhana (username: admin, password: 123)
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "123") {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("mainPage").classList.remove("hidden");
    } else {
        document.getElementById("loginMessage").innerText = "Username atau password salah!";
    }
}

// Logout
function logout() {
    document.getElementById("mainPage").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");
}

// Cek jawaban latihan
function cekJawaban() {
    let jawab = document.getElementById("jawaban").value.toLowerCase();
    let result = document.getElementById("result");

    if (jawab.includes("hujan") || jawab.includes("hujan deras")) {
        result.innerText = "Benar! Banjir terjadi karena hujan deras.";
        result.style.color = "green";
    } else {
        result.innerText = "Kurang tepat. Coba baca kembali teks berita.";
        result.style.color = "red";
    }
}
