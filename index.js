//zad1
class KontoBankowe {
    #saldo;
    constructor(saldo = 0) {
        this.#saldo = saldo;
    }
    deposit(amount) {
        if (amount > 0) this.#saldo += amount;
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.#saldo) this.#saldo -= amount;
    }
    get saldo() {
        return this.#saldo;
    }
}

//zad2
class StaticOsoba {
    static przedstawSie(imie, nazwisko) {
        if (imie && nazwisko) return `Nazywam się ${imie} ${nazwisko}`;
        if (imie) return `Mam na imię ${imie}`;
        return "Nie podano danych";
    }
}

//zad3
const Osoba = {
    imie: "Jan",
    nazwisko: "Kowalski",
    powitanie() {
        return `Cześć, jestem ${this.imie}`;
    }
};

const Uczen = {
    oceny: [4, 5, 5, 3],
    sredniaOcen() {
        let wynik = 0;
        for(ocena of this.oceny) {
            wynik += ocena;
        }
        return wynik / this.oceny.length;
    }
};

Object.setPrototypeOf(Uczen, Osoba);

console.log(Uczen.powitanie());
console.log(Uczen.sredniaOcen());

//zad4

class SrodekTransportu {
    constructor(nazwa, predkosc) {
        this.nazwa = nazwa;
        this.predkosc = predkosc;
    }
}

class Samolot extends SrodekTransportu {
    opis() {
        return `${this.nazwa} leci z prędkością ${this.predkosc} km/h`;
    }
}

class Auto extends SrodekTransportu {
    opis() {
        return `${this.nazwa} jedzie z prędkością ${this.predkosc} km/h`;
    }
}

class Lodz extends SrodekTransportu {
    opis() {
        return `${this.nazwa} płynie z prędkością ${this.predkosc} km/h`;
    }
}

const boeing = new Samolot("Boeing 747", 900);
const fiat = new Auto("Fiat 126p", 90);
const arka = new Lodz("Arka", 30);

console.log(boeing.opis());
console.log(fiat.opis());
console.log(arka.opis());


//zad5
function Psowate() {}
Psowate.prototype.dajGlos = function() {
    return "...";
};

function Szczeniak() {}
Szczeniak.prototype = Object.create(Psowate.prototype);
Szczeniak.prototype.dajGlos = function() {
    return "hau!";
};

function Pies() {}
Pies.prototype = Object.create(Psowate.prototype);
Pies.prototype.dajGlos = function() {
    return "Hau hau";
};

function Wilk() {}
Wilk.prototype = Object.create(Psowate.prototype);
Wilk.prototype.dajGlos = function() {
    return "Auuuuu";
};

class PsowateK {
    dajGlos() {
        return "...";
    }
}
class SzczeniakK extends PsowateK {
    dajGlos() {
        return "hau!";
    }
}
class PiesK extends PsowateK {
    dajGlos() {
        return "Hau hau";
    }
}
class WilkK extends PsowateK {
    dajGlos() {
        return "Auuuuu";
    }
}

//zad6
class Artysta {
    constructor(imie) {
        this.imie = imie;
    }
    kontempluj() {
        return `${this.imie} kontempluje swoje dzieło.`;
    }
}

class Rzezbiarz extends Artysta {
    tworzDzielo() {
        return `${this.imie} rzeźbi w marmurze.`;
    }
}

class Malarz extends Artysta {
    tworzDzielo() {
        return `${this.imie} maluje obraz.`;
    }
}

class Pisarz extends Artysta {
    tworzDzielo() {
        return `${this.imie} pisze powieść.`;
    }
}

//zad7
class Uzytkownik {
    constructor(imie, email, haslo) {
        this.imie = imie;
        this.email = email;
        if (!Uzytkownik.sprawdzHaslo(haslo)) {
            throw new Error("Hasło musi mieć co najmniej 8 znaków, zawierać litery i cyfry");
        }
        this.haslo = haslo;
    }
    static sprawdzHaslo(haslo) {
        const maLitere = /[a-zA-Z]/.test(haslo);
        const maCyfre = /\d/.test(haslo);
        return haslo.length >= 8 && maLitere && maCyfre;
    }

    static listaUzytkownikow = [];

    static dodajUzytkownika(uzytkownik) {
        this.listaUzytkownikow.push(uzytkownik);
    }
}

function zarejestrujUzytkownika() {
    const imie = document.getElementById("imie").value.trim();
    const email = document.getElementById("email").value.trim();
    const haslo = document.getElementById("haslo").value.trim();

    const user = new Uzytkownik(imie, email, haslo);
    Uzytkownik.dodajUzytkownika(user);
    wyswietlListeUzytkownikow();
    document.getElementById("formularzUzytkownika").reset();
    alert("Użytkownik został zarejestrowany!");
}

function wyswietlListeUzytkownikow() {
    const lista = document.getElementById("listaUzytkownikow");
    lista.innerHTML = "<h3>Lista użytkowników:</h3>";
    Uzytkownik.listaUzytkownikow.forEach((u, i) => {
        lista.innerHTML += `<p>${i + 1}. ${u.imie} (${u.email})</p>`;
    });
}

//zad8
class KalkulatorProsty {
    static dodaj(a, b) {
        return a + b;
    }
    static odejmij(a, b) {
        return a - b;
    }
    static pomnoz(a, b) {
        return a * b;
    }
    static podziel(a, b) {
        if (b === 0) throw new Error("Nie można dzielić przez zero");
        return a / b;
    }
}
