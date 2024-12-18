// Data soal
const soal = [
  {
    pertanyaan: "Apa nama ibukota Indonesia?",
    jawaban: ["Jakarta", "Bandung", "Surabaya"],
    kunci: 0
  },
  {
    pertanyaan: "Siapa Nama bapak awang?",
    jawaban: ["Soekarno", "SUMARJANI", "Sugihartantoo"],
    kunci: 1
  },
  {
    pertanyaan: "Apa arti MARKUS menurut tara?",
    jawaban: ["Marsel tikus", "markus", "Injil Di alkitab"],
    kunci: 0
  },
  {
    pertanyaan: "DIMANA BIASANYA CUTUT BERKELUYURAN?",
    jawaban: ["sawah", "Comberan", "JOGODAYOH"],
    kunci: 2
  },
  {
    pertanyaan: "Apa nama sungai YANG SERING DIGUNAKAN CURUT UNTUK BERENANG, MEROKOK, dan HAIK?",
    jawaban: ["Sungai Opak", "Sungai Winongo (mejing)", "Sungai Progo"],
    kunci: 1
  }
];

// Variabel untuk menyimpan indeks soal saat ini
let soalIndex = 0;

// Fungsi untuk menampilkan soal
function tampilkanSoal() {
  const soalText = document.getElementById("soal-text");
  const jawaban1 = document.getElementById("jawab1-text");
  const jawaban2 = document.getElementById("jawab2-text");
  const jawaban3 = document.getElementById("jawab3-text");
  soalText.innerText = soal[soalIndex].pertanyaan;
  jawaban1.innerText = soal[soalIndex].jawaban[0];
  jawaban2.innerText = soal[soalIndex].jawaban[1];
  jawaban3.innerText = soal[soalIndex].jawaban[2];
  document.getElementById("next-btn").style.display = "none";
  document.getElementById("submit-btn").style.display = "block";
}

// Fungsi untuk memeriksa jawaban
function periksaJawaban() {
  const jawaban = document.querySelectorAll("input[type='radio']:checked");
  const hasil = document.getElementById("hasil");
  let benar = 0;
  jawaban.forEach((jawab) => {
    if (jawab.value === soal[soalIndex].jawaban[soal[soalIndex].kunci]) {
      benar++;
    }
  });
  hasil.innerText = `Jawaban Anda: ${benar} benar dari 1 soal`;
  document.getElementById("submit-btn").style.display = "none";
  document.getElementById("next-btn").style.display = "block";
}

// Fungsi untuk melanjutkan ke soal berikutnya
function nextSoal() {
  soalIndex++;
  if (soalIndex >= soal.length) {
    alert("Soal habis!");
    location.reload();
  } else {
    tampilkanSoal();
  }
}

// Event listener untuk tombol kirim
document.getElementById("submit-btn").addEventListener("click", (e) => {
  e.preventDefault();
  periksaJawaban();
});

// Event listener untuk tombol next
document.getElementById("next-btn").addEventListener("click", (e) => {
  e.preventDefault();
  nextSoal();
});

// Tampilkan soal pertama
tampilkanSoal();
