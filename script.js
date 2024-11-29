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
