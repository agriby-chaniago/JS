// PZN JS
// Hello World
// document.writeln("hello world");


// Komentar
// Ini adalah Komentar


// Tipe Data Number
// document.writeln(100);
// document.writeln("</br>");
// document.writeln(100.100);
// document.writeln("</br>");
// document.writeln(100.123);

// Number Notation
// selain decimal, bisa menggunakan hexadecimal, octal, binary
// Format (tiap ingin membuat suatu angka diawali dengan format(output default tetap berbasis 10))
// Hexadecimal = 0xFF
// Octal = 0o10
// Binary = 0b10101
// document.writeln(0b100);
// document.writeln("</br>");
// document.writeln(0xF5);
// document.writeln("</br>");
// document.writeln(0o10);


// Tipe Data Boolean
// document.writeln(true);
// document.writeln("</br>");
// document.writeln(false);


// Tipe Data String
// ("")
// document.writeln("Agriby D. Chaniago");
// document.writeln("</br>");
// ('')
// document.writeln('Weirdo in This Cool Planet.');

// Menambah String(+)
// document.writeln("Nama: " + "Agriby");

// Escape Sequence (\n, \t, \", \', \\)
// document.writeln("<textarea cols='100' rows='10'>");
// document.write("Agriby \nDiandra \nChaniago\n");
// document.write("\\Home\\chaniago\n");
// document.write("\"Weirdo in This Cool Planet\"\n");
// document.write("\'JS ONLY\'");
// document.writeln("</textarea>");


// Variable

// var (deprecated)

// Wrong way (KISS)
// document.writeln("Agriby Diandra Chaniago");
// document.writeln("</br>");
// document.writeln("Agriby Diandra Chaniago")
// document.writeln("</br>");
// document.writeln("Agriby Diandra Chaniago")
// document.writeln("</br>");
// document.writeln("Agriby Diandra Chaniago")
// document.writeln("</br>");
// document.writeln("Agriby Diandra Chaniago")
// document.writeln("</br>");

// Right way
// let (bisa diubah)
// let fullname = "Agriby Diandra Chaniago";
// let firstname = "Agriby";
// let middlename = "Diandra";
// let lastname = "Chaniago";

// document.writeln(fullname);
// document.writeln("</br>");
// document.writeln(firstname + " " + middlename + " " + lastname);
// document.writeln("</br>");
// document.writeln(fullname);
// document.writeln("</br>");
// document.writeln(firstname + " " + middlename + " " + lastname);
// document.writeln("</br>");
// document.writeln(fullname);
// document.writeln("</br>");
// document.writeln(firstname + " " + middlename + " " + lastname);
// document.writeln("</br>");
// fullname = "Agriby D. Chaniago";
// document.writeln(fullname);
// document.writeln("</br>");
// document.writeln(firstname + " " + middlename + " " + lastname);
// document.writeln("</br>");
// document.writeln(fullname);
// document.writeln("</br>");
// document.writeln(firstname + " " + middlename + " " + lastname);

// const(tidak bisa diubah)
// const fullname = "Agriby Diandra Chaniago";
// fullname = "Agriby D. Chaniago";  // Error
// document.writeln(fullname);
// Uncaught TypeError: invalid assignment to const 'fullname'
    // <anonymous> http://127.0.0.1:5500/script.js:101
// script.js:101:1
    // <anonymous> http://127.0.0.1:5500/script.js:101


// Operator Matematika
// --------------
// |+  | plus   |
// |-  | minus  |
// |*  | kali   |
// |** | pangkat|
// |/  | bagi   |
// |%  | mod    |
// --------------

// let hasil = 1 + 2;

// document.writeln("<p> 1 + 2 = " + hasil + "</p>");
// let originalHasil = hasil;

// hasil = hasil - 1;
// document.writeln("<p>" + originalHasil + " - 1 = " + hasil + "</p>");
// originalHasil = hasil;

// hasil = hasil * 2;
// document.writeln("<p>" + originalHasil + " x 2 = " + hasil + "</p>");
// originalHasil = hasil;

// hasil = hasil ** 3;
// document.writeln("<p>" + originalHasil + " pangkat 3 = " + hasil + "</p>");
// originalHasil = hasil;

// hasil = hasil / 2;
// document.writeln("<p>" + originalHasil + " : 2 = " + hasil + "</p>");
// originalHasil = hasil;

// hasil = hasil % 2;
// document.writeln("<p>" + originalHasil + " mod 2 = " + hasil + "</p>");
// originalHasil = hasil;

// Operator Augmented Assignment
// ------------------------
// |+  | hasil   +=  10   |
// |-  | minus   -=  10   |
// |*  | kali    *=  10   |
// |** | pangkat **= 10   |
// |/  | bagi    /=  10   |
// |%  | mod     %=  10   |
// ------------------------

// let hasil = 1 + 2;

// document.writeln("<p> 1 + 2 = " + hasil + "</p>");
// let originalHasil = hasil;

// hasil -= 1;
// document.writeln("<p>" + originalHasil + " - 1 = " + hasil + "</p>");
// originalHasil = hasil;

// hasil *= 2;
// document.writeln("<p>" + originalHasil + " x 2 = " + hasil + "</p>");
// originalHasil = hasil;

// hasil **= 3;
// document.writeln("<p>" + originalHasil + " pangkat 3 = " + hasil + "</p>");
// originalHasil = hasil;

// hasil /= 2;
// document.writeln("<p>" + originalHasil + " : 2 = " + hasil + "</p>");
// originalHasil = hasil;

// hasil %= 2;
// document.writeln("<p>" + originalHasil + " mod 2 = " + hasil + "</p>");
// originalHasil = hasil;

// Operator Unary
// --------------------------------
// |+  | menandakan nilai positif |
// |-  | menandakan nilai negatif |
// |++ | increment (+1)           |
// |-- | decrement (-1)           |
// --------------------------------

// let hasil = + 1;
// document.writeln("<p>" + hasil + "</p>");

// hasil--;
// document.writeln("<p>" + hasil + "</p>");

// hasil++
// document.writeln("<p>" + hasil + "</p>");

// hasil = -hasil
// document.writeln("<p>" + hasil + "</p>");

// Operator Perbandingan
// ---------------------------------------------------------
// | ==  | Sama dengan (nilai saja, tanpa tipe data)       |
// | === | Sama dengan (nilai dan tipe data)               |
// | !=  | Tidak sama dengan (nilai saja, tanpa tipe data) |
// | !== | Tidak sama dengan (nilai dan tipe data)         |
// | >   | Lebih besar dari                                |
// | <   | Lebih kecil dari                                |
// | >=  | Lebih besar atau sama dengan                    |
// | <=  | Lebih kecil atau sama dengan                    |
// ---------------------------------------------------------

// let hasil = 5 == "5";
// document.writeln("<p>5 == \"5\" = " + hasil + "</p>");
// 
// hasil = 5 === "5";
// document.writeln("<p>5 === \"5\" = " + hasil + "</p>");
// 
// hasil = 5 != "5";
// document.writeln("<p>5 != \"5\" = " + hasil + "</p>");
// 
// hasil = 5 !== "5";
// document.writeln("<p>5 !== \"5\" = " + hasil + "</p>");
// 
// hasil = 5 > 5;
// document.writeln("<p>5 > 5 = " + hasil + "</p>");
// 
// hasil = 5 < 5;
// document.writeln("<p>5 < 5 = " + hasil + "</p>");
// 
// hasil = 5 >= 5;
// document.writeln("<p>5 >= 5 = " + hasil + "</p>");
// 
// hasil = 5 <= 5;
// document.writeln("<p>5 <= 5 = " + hasil + "</p>");

// Operator Logika
// ----------------------------
// | && | AND (dan)           |
// | || | OR (atau)           |
// | !  | NOT (negasi)        |
// ----------------------------

// let hasil = true && true;
// document.writeln("<p>true && true = " + hasil + "</p>");

// hasil = true && false;
// document.writeln("<p>true && false = " + hasil + "</p>");

// hasil = true || true;
// document.writeln("<p>true || true = " + hasil + "</p>");

// hasil = true || false;
// document.writeln("<p>true || false = " + hasil + "</p>");

// hasil = !true;
// document.writeln("<p>!true = " + hasil + "</p>");

// hasil = !false;
// document.writeln("<p>!false = " + hasil + "</p>");


// Console
// console.log("Hello World");
// console.debug("Hello World");
// console.info("Hello World");
// console.warn("Hello World");
// console.error("Hello World");



// String Template (`backtick`)
// const nama = "Agriby Diandra Chaniago";
// const nilai = 80;
// // const nilai = 60;
// const StringTemplate = `Halo, nama saya ${nama}, lulus ${nilai > 75}`;
// console.log(StringTemplate);

// let multilineString = `Hello World,
// nama saya Agriby D. Chaniago
// cihuy
// Weirdo in This Cool Planet.`;
// 
// document.writeln("<pre>");
// document.writeln(multilineString);
// document.writeln("</pre>");


// Konversi String dan Number
// String ke Number
// let str = "123.45";
// console.log(Number(str));      // Output: 123.45
// console.log(parseInt(str, 10));// Output: 123
// console.log(parseFloat(str));  // Output: 123.45
// console.log(+str);             // Output: 123.45
// 
// Number ke String
// let num = 123.45;
// console.log(String(num));      // Output: "123.45"
// console.log(num.toString());   // Output: "123.45"
// console.log(`${num}`);         // Output: "123.45"


// Tipe Data Array
// const names = [];
// names.push("Agriby");
// names.push("Diandra", "Chaniago");

// console.log(names);

// Operasi di Array
// ---------------------------------------------------------------------------------
// | Operasi           | Penjelasan                                                |
// |-------------------|-----------------------------------------------------------|
// | push(element)     | Menambahkan elemen di akhir array                         |
// | unshift(element)  | Menambahkan elemen di awal array                          |
// | pop()             | Menghapus elemen terakhir array                           |
// | shift()           | Menghapus elemen pertama array                            |
// | concat(array)     | Menggabungkan dua array                                   |
// | slice(start, end) | Mengambil elemen tertentu                                 |
// | splice(index, count, ...items) | Menghapus/menambah elemen di indeks tertentu |
// | indexOf(element)  | Mendapatkan indeks elemen pertama                         |
// | includes(element) | Mengecek apakah elemen ada di array                       |
// | join(separator)   | Menggabungkan elemen menjadi string                       |
// | reverse()         | Membalik urutan elemen array                              |
// | sort(compareFn)   | Mengurutkan elemen dalam array                            |
// | map(callback)     | Membuat array baru dengan fungsi                          |
// | filter(callback)  | Memfilter elemen sesuai kondisi                           |
// | forEach(callback) | Melakukan iterasi pada setiap elemen                      |
// | reduce(callback)  | Mengakumulasi elemen jadi satu nilai                      |
// ---------------------------------------------------------------------------------


// Tipe Data Object
// const mahasiswa = {
    // NIM   : 240111017,
    // Nama  : "Agriby Diandra Chaniago",
    // Prodi : "Informatika"
// }
// 
// console.log(mahasiswa);


// If Else Expression
// const  nilai = 90;
// const nilai = 75
// const nilai = 60;
// if (nilai > 75) {
    // document.writeln("Jago");
// } else if (nilai == 75) {
    // document.writeln("Mid lah");
// } else {
    // document.writeln("Belajar lagi dek");
// }


// Pop Up (Alert, Prompt, Confirm)
// alert("Hati hati dengan hatiku");
// const nyanyi = prompt("Hati hati dengan hatiku");
// alert(nyanyi);
// const nyanyi = confirm("Hati hati dengan hatiku?");
// if (nyanyi == true) {
//     alert("siap bang");
// } else {
//     alert("no weyyy")
// }


// Switch Case Expression
// const hari = 5;
// 
// switch (hari) {
//   case 1:
    // console.log("Hari ini adalah Senin");
    // break;
//   case 2:
    // console.log("Hari ini adalah Selasa");
    // break;
//   case 3:
    // console.log("Hari ini adalah Rabu");
    // break;
//   case 4:
    // console.log("Hari ini adalah Kamis");
    // break;
//   case 5:
    // console.log("Hari ini adalah Jumat");
    // break;
//   case 6:
    // console.log("Hari ini adalah Sabtu");
    // break;
//   case 7:
    // console.log("Hari ini adalah Minggu");
    // break;
//   default:
    // console.log("Hari tidak valid");
    // break;
// }


// Operator typeof
// ---------------------------------------------------------------------------------
// | Operasi           | Penjelasan                                                |
// |-------------------|-----------------------------------------------------------|
// | typeof undefined  | Mengembalikan "undefined" untuk variabel tanpa nilai      |
// | typeof null       | Mengembalikan "object" untuk nilai null (bug legacy)      |
// | typeof boolean    | Mengembalikan "boolean" untuk nilai true/false            |
// | typeof number     | Mengembalikan "number" untuk angka, termasuk NaN/Infinity |
// | typeof bigint     | Mengembalikan "bigint" untuk angka besar (contoh: 123n)   |
// | typeof string     | Mengembalikan "string" untuk teks                         |
// | typeof symbol     | Mengembalikan "symbol" untuk nilai simbol unik            |
// | typeof function   | Mengembalikan "function" untuk fungsi                     |
// | typeof object     | Mengembalikan "object" untuk objek biasa, array, atau null|
// ---------------------------------------------------------------------------------


// console.log(typeof undefined);  // "undefined"
// console.log(typeof null);       // "object"
// console.log(typeof 123);        // "number"
// console.log(typeof "Halo");     // "string"
// console.log(typeof true);       // "boolean"
// console.log(typeof Symbol());   // "symbol"
// console.log(typeof function(){}); // "function"
// console.log(typeof {});         // "object"
// console.log(typeof [1, 2, 3]);  // "object"
// console.log(typeof BigInt(123));// "bigint"


// Ternary Operator
// Wrong way
// const nilai = 75;
// let ucapan;
// if (nilai >= 75) {
    // ucapan = "Selamat";
// } else {
    // ucapan = "Belajar lagi";
// }
// 
// document.writeln(`<p>${ucapan}</p>`);

// Correct Way
// const nilai = 75;
// const ucapan = nilai >= 75 ? "Selamat" : "Belajar lagi";
// 
// document.writeln(`<p>${ucapan}</p>`);


// Nullish Coalescing Operator (null dan undefined)
// Mirip dengan Ternary Operator, tetapi hanya mengecek null dan undefined
// let parameter;
// Wrong Way
// let data = parameter;
// if (data === undefined || data === null) {
    // data = "Nilai default";
    // 
// }
// document.writeln(`<p>${data}</p>`);

// Correct Way
// data = parameter ?? "Nilai default"; 
// document.writeln(`<p>${data}</p>`);


// Optional Chaining Operator
// digunakan untuk mengamankan ketika kita ingin mengakses properti dari objek yang mungkin tidak ada
// jika kita mencoba mengakses properti dari sebuah object dari data nullish tanpa menggunakan optional chaining, maka akan terjadi error

// let person = {};
// let country = person.address.country;
// document.writeln("Sukses");
// document.writeln(`<p>${country}</p>`);
// document.writeln("Sukses");
// Output tidak muncul karena ada error pada line 466(const country = person.address.country;)

// Harus dilakukan pengecekan
// let person = {};
// let person = {
    // address: {
        // country : "Indonesia"
    // }
// }
// let country = person?.address?.country;
// document.writeln("Sukses");
// document.writeln(`<p>${country}</p>`);
// document.writeln("Sukses");
// Output muncul karena sudah menggunakan optional chaining


// Falsy dan Truthy
// Falsy adalah nilai yang dianggap false ketika dievaluasi dalam kondisi boolean
// ---------------------------------------------------------------------------------
// | Nilai            | Penjelasan                                                 |
// |------------------|------------------------------------------------------------|
// | false            | Nilai boolean `false` adalah falsy                         |
// | 0                | Angka nol dianggap falsy                                   |
// | -0               | Angka negatif nol juga falsy                               |
// | 0n               | Nilai bigint nol dianggap falsy                            |
// | "", '', ``       | String kosong adalah falsy                                 |
// | null             | Menunjukkan tidak ada nilai (null)                         |
// | undefined        | Menunjukkan variabel belum didefinisikan                   |
// | NaN              | Nilai "Not-a-Number" dianggap falsy                        |
// ---------------------------------------------------------------------------------

// Truthy adalah nilai yang dianggap true ketika dievaluasi dalam kondisi boolean
// ----------------------------------------------------------------------------------------
// | Nilai                   | Penjelasan                                                 |
// |--------------------------|-----------------------------------------------------------|
// | true                    | Nilai boolean `true` adalah truthy                         |
// | Angka selain 0          | Semua angka kecuali 0 (contoh: 1, -1, 42) adalah truthy    |
// | BigInt selain 0n        | Semua BigInt kecuali 0n (contoh: 1n, -1n) adalah truthy    |
// | String non-kosong       | Semua string yang tidak kosong (contoh: "hello", " ")      |
// | Objek                   | Semua objek, termasuk array dan fungsi, adalah truthy      |
// | Symbol                  | Semua nilai simbol (contoh: `Symbol('foo')`) adalah truthy |
// | Infinity/-Infinity      | Nilai Infinity dan -Infinity dianggap truthy               |
// ----------------------------------------------------------------------------------------


// Operator Logika di Non Boolean
// ----------------------------------------------------------------------------------------
// | Operator   | Penjelasan                                                             |
// |------------|------------------------------------------------------------------------|
// | ||         | Mengembalikan nilai pertama yang truthy, atau nilai terakhir           |
// | &&         | Mengembalikan nilai pertama yang falsy, atau nilai terakhir            |
// | !          | Mengubah nilai menjadi boolean, kemudian mengubah kebalikannya         |
// ----------------------------------------------------------------------------------------


// For Loop
// for (let i = 0; i < 5; i++) {
    // document.writeln(`<p>${i}</p>`);
// }

// While Loop
// let i = 0;
// while (i < 5) {
    // document.writeln(`<p>${i}</p>`);
    // i++;
// }

// Do While Loop
// let i = 0;
// do {
    // document.writeln(`<p>${i}</p>`);
    // i++;
// } while (i < 5);


// Break dan Continue
// Break
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     document.writeln(`<p>${i}</p>`);
// }

// Continue
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     document.writeln(`<p>Perulangan Ganjil: ${i}</p>`);
// }


// Label (jarang digunakan, hampir tidak pernah)
// merupakan penanda yang bisa digunakan dengan break dan continue
// outerLoop:
// for (let i = 0; i < 5; i++) {
    // innerLoop:
    // for (let j = 0; j < 5; j++) {
        // if (i === 2 && j === 2) {
            // break outerLoop;
        // }
        // document.writeln(`<p>i: ${i}, j: ${j}</p>`);
    // }
// }


// For In Loop
// merupakan perulangan for yang digunakan untuk mengulang properti dari sebuah objek
// const person = {
//     name: "Agriby",
//     age: 20,
//     address: "Indonesia"
// };

// for (const key in person) {
//     document.writeln(`<p>${key}: ${person[key]}</p>`);
// }

// For Of Loop
// merupakan perulangan for yang digunakan untuk mengulang elemen dari objek yang iterable, seperti array, string dan lainnya
// const names = ["Agriby", "Diandra", "Chaniago"];
 
// for (const name of names) {
//     document.writeln(`<p>${name}</p>`);
// }


// With Statement
// merupakan fitur yang digunakan untuk menurunkan sebuah scope data
// kita bisa mengakses property dari objek tanpa harus menuliskan nama objeknya
// const person = {
//     name: "Agriby",
//     age: 20,
//     address: "Indonesia"
// };

// with (person) {
//     document.writeln(`<p>${name}</p>`);
//     document.writeln(`<p>${age}</p>`);
//     document.writeln(`<p>${address}</p>`);
// }


// Function
// blok kode program yang dibuat untuk melakukan tugas tertentu
// function sayHello() {
//     document.writeln("Hello World");
// }

// sayHello();

// Function Parameter
// function sayHello(name) {
    // document.writeln(`Hello ${name}`);
// }
// 
// sayHello("Agriby");
// sayHello("Revan");

// Function Return Value
// function sayHello(name) {
//     return `Hello ${name}`;
// }
// const result = sayHello("Agriby");
// document.writeln(result);

// Optional Parameter
// function sayHello(name = "Stranger") {
//     return `Hello ${name}`;
// }
// const result = sayHello();
// document.writeln(result);
// const result2 = sayHello("Agriby");
// document.writeln(result2);

// Default Parameter
// function sayHello(name = "Stranger") {
//     return `Hello ${name}`;
// }
// const result = sayHello();
// document.writeln(result);
// const result2 = sayHello("Agriby");
// document.writeln(result2);

// --------------------------------------------------------------------------------------------------------
// | Aspek                   | Default Parameter                       | Optional Parameter               |
// |--------------------------|----------------------------------------|--------------------------------- |
// | Nilai saat kosong        | Parameter menggunakan nilai default    | Parameter menjadi undefined      |
// | Perlu pengecekan manual  | Tidak perlu, nilai default otomatis    | Perlu pengecekan manual          |
// | Penggunaan undefined     | Argumen undefined memicu nilai default | Argumen undefined tetap undefined|
// --------------------------------------------------------------------------------------------------------

// Rest Parameter
// digunakan untuk menggabungkan beberapa argumen menjadi sebuah array
// function sum(...numbers) {
//     let result = 0;
//     for (let number of numbers) {
//         result += number;
//     }
//     return result;
// }
// const result = sum(1, 2, 3, 4, 5);
// document.writeln(result);

// Spread Syntax
// digunakan untuk memecah iterables menjadi single element
// function sum(...data) {
//     let total = 0;
//     for (const item of data) {
//         total += item;  
//     }
//     document.writeln(total);
// }

// sum(...[1, 2, 3, 4, 5]);

// Function sebagai Value