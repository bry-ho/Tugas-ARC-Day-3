const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function displayFavoriteCourses(name, courses) {
    console.log(`Halo ${name}! Mata kuliah favorit Anda:`);
    courses.forEach((course, index) => {
        console.log(`${index + 1}. ${course}`);
    });
}

async function Input(question) {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
        resolve(answer);
        });
    });
}


async function main() {

    console.log("Program Daftar Mata Kuliah Favorit")

    const name = await Input("Masukkan nama Anda: ");

    let favoriteCourses = [];

    while (true) {
        const course = await Input("Masukkan mata kuliah favorit Anda (ketik 'exit' untuk keluar): ");

        if (course.toLowerCase() === 'exit') {
        break;
        }

        favoriteCourses.push(course);
    }

    displayFavoriteCourses(name, favoriteCourses);

    rl.close();
}

main().catch((err) => {
  console.error('Terjadi kesalahan:', err);
});