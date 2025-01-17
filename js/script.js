// Daftar kata dan petunjuk
const words = [
    //pertanyaan 1
    { word: "selamat siang", hint: "Apa arti kata 'Konnichiwa' dalam bahasa Indonesia?." },
    //pertanyaan 2
    { word: "selamat pagi", hint: "Apa arti kata 'Ohayou' dalam bahasa Indonesia??." },
    //pertanyaan 3
    { word: "selamat malam", hint: "Apa arti kata 'Konbanwa' dalam bahasa Indonesia??." },
    //pertanyaan 4
    { word: "hiragana", hint: "Apa huruf Jepang yang digunakan untuk menulis kata-kata asli Jepang?" },
    //pertanyaan 5
    { word: "kanji", hint: "Apa nama sistem penulisan yang menggunakan karakter Tionghoa dalam bahasa Jepang?" },
    //pertanyaan 6
    { word: "mikaela", hint: "Member JKT48 gen 13 Yang Lahir bulan Desember" },
    //pertanyaan 7
    { word: "mangga", hint: "Buah manis yang berwarna kuning." },
    //pertanyaan 8
    { word: "raisha", hint: "Member JKT48 gen 10 Yang Lahir bulan Nopember"}

];

// Game Tebak Kata
let currentWord;
let guessesLeft;
let wrongLetters;
let correctLetters;

function startGame() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    guessesLeft = 10; // Reset sisa tebakan ke 10
    wrongLetters = [];
    correctLetters = [];
    document.getElementById('hint').textContent = `Petunjuk: ${currentWord.hint}`;
    document.getElementById('guesses-left').textContent = guessesLeft;
    document.getElementById('wrong-letters-list').textContent = '';
    document.getElementById('word-container').innerHTML = '_ '.repeat(currentWord.word.length);
    document.getElementById('reset').style.display = 'none';
}

document.getElementById('submit').addEventListener('click', handleGuess);
document.getElementById('guess').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleGuess();
    }
});

function handleGuess() {
    const guess = document.getElementById('guess').value.toLowerCase();
    document.getElementById('guess').value = '';

    if (guess) {
        if (guess === currentWord.word) {
            alert('Selamat! Anda berhasil menebak kata!');
            // Pindah ke soal berikutnya
            setTimeout(() => {
                startGame();
            }, 1000); // Delay 1 detik sebelum memulai soal baru
        } else {
            guessesLeft--; // Kurangi sisa tebakan jika salah
            wrongLetters.push(guess);
            document.getElementById('wrong-letters-list').textContent = wrongLetters.join(', ');
        }
    }

    document.getElementById('guesses-left').textContent = guessesLeft;

    if (guessesLeft <= 0) {
        alert(`Game Over! Kata yang benar adalah: ${currentWord.word}`);
        document.getElementById('reset').style.display = 'block';
    }
}

document.getElementById('reset').addEventListener('click', startGame);

// Mulai game saat halaman dimuat
startGame();
