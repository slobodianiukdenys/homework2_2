const fs = require('fs');
const filename = 'dota2.txt'; 

function processFile(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error('Помилка при зчитуванні файлу:', err);
            return;
        }

        const processedText = replaceLetter(data);

        const newFilename = filename.replace('.txt', '_reworked.txt');
        fs.writeFile(newFilename, processedText, (err) => {
            if (err) {
                console.error('Помилка при записі у файл:', err);
                return;
            }
            console.log(`Файл успішно оброблено та збережено як ${newFilename}`);
        });
    });
}

function replaceLetter(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        if ((i + 1) % 3 === 0 && /[a-zA-Z]/.test(text[i])) {
            result += text[i].toUpperCase();
        } else {
            result += text[i];
        }
    }
    return result;
}
processFile(filename);