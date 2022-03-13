var sayi = 5
var karakter = 'a'
var metin = "berkay" // var ile tanımlanmış bir değeri aynı isimle tekrar tanımlayabiliriz scope kavramı az kurallıdır tekrar değiştirilebilir
var ondalikli_sayi = 1.567

let sayi1 = 5
let karakter1 = 'a' // let kavramı ile tanımlanmış bir değeri tekrar aynı isimle tanımlayamayız scope kavramı daha kurallıdır tekrar değişebilir
let metin1 = "berkay"
let ondalikli_sayi1 = 1.5

const sayi2 = 5
const karakter2 = 'a'
const metin2 = "berkay" // const kavramı ile tanımlanmış bir değeri tekrar aynı isimle tanımlayamayız değiştiremeyiz sabittir tanımlandığı
const ondalikli_sayi2 = 1.5 //şekilde kalır

var undefinedSayi; // değişkeni tanımladık ama bir değer ile başlatmadığımız için undefined olarak karşımıza çıkar

var MetinselSayi = String(sayi); // integer değerden metinsel ifade olan stringe dönüştürdük aynı şekilde tersini de yapabiliriz

var yuvarla = ondalikli_sayi.toPrecision(3) //ondalıklı olan sayıyı yuvarlamak için kullanılır 3. değerinden itibaren yuvarlar
var yuvarla2 = ondalikli_sayi.toFixed(2) //ondalıklı sayıyı soldan başlayarak 2. indexinden itibaren yuvarlar

// bir değişkenin sayısal değer olup olmadığını kontrol etmek için:
if (typeof(sayi) == Number) {
    console.log("değişken bir sayıdır");
} else if (typeof(sayi) != Number) {
    console.log("değişken bir sayı değildir");
} else {
    console.log("yanlış bir değer girdiniz veya değişken null idi", console.error());
}
let tarihBilgileri = new Date();
console.log(tarihBilgileri.getFullYear());
console.log(tarihBilgileri.getDate());
console.log(tarihBilgileri.getDay());
console.log(tarihBilgileri.getHours());
console.log(tarihBilgileri.getMilliseconds());
console.log(tarihBilgileri.getTimezoneOffset());

//Math sınıfı hazır metodları

var piSayısı = Math.PI; // Pi sayısını içerir
var rastgeleSayi = Math.random(100); //rastgele sayı üretme fonksiyonudur 2. değer verilmezse default olarak 0 ile değer kadar döner
var yuvarlama = Math.floor(6.5); //parantez içerisine yazılan integer parametreyi maximum değere yuvarlar yukarı yöne
var FloorDown = Math.ceil(6.5); // parantez içerisine yazılan integer değeri aşşağı yöne yuvarlar
var yukarıYuvarla = Math.round(6.5) // Sayı aşşağı yöne yakınsa aşşağı yukarı yöne yakınsa yukarı ondalığı 5 ise yukarı yuvarlar
var karekok = Math.sqrt(5); // parantez içersine yazılan integer değerin karekökünü döner
var UstluSayi = Math.pow(2.5); //parantez içerisine yazılan integer değerlerin üslü halini döner
var MutlakSayi = Math.abs(-44); // parantez içerisine yazılan integer değerlerin mutlağını döner
var enKucukBul = Math.min(1, 5, 20, 2, 3); //parantez içerisine yazılan integer değerlerin yada integer arrayin en küçük elemanını döner
var enBuyukBul = Math.max(1, 5, 20, 21, 51, 23); //parantez içerisine yazılan integer değerlerin yada integer arrayin en büyük elemanını döner

// ES6 İle gelen özellikler

let ad = "berkay",
    soyad = "saraç",
    FullName = `Adım : ${ad}, Soyadım : ${soyad}`; // back tick `` arasına yazılan string ifadede $ işareti yanına {} parantezler ile kod yazmamıza olanak sağlar

console.log("deneme1 \"deneme \" deneme2"); //escape karakter stringi kendi içinde böler tırnak işaretlerini 1 fazla kullanmamızı sağlar

//String methodlar

let stringİfade = "merhaba ben berkay";
let metinUzunlugu = stringİfade.length; //metinsel ifadenin uzunluğunu döner saymaya 0 dan başlar
let BuyukHarfliMetin = stringİfade.toUpperCase(); // string ifadede ki tüm harfleri büyük harf yapar
let KucukHarfliMetin = stringİfade.toLowerCase(); // string ifadede ki tüm harfleri küçük harf yapar
let stringİfade1 = "Javascript",
    stringİfade2 = "TypeScript",
    StringİfadeBirlesimi = stringİfade1.concat(stringİfade2); //concat methodu 2 stringi birleştirir
console.log(StringİfadeBirlesimi);

let ifadeİciArama = stringİfade.search("m"); //string ifade içinde parantez içinde yazılan string veya char veri türünde arama yapar varsa 0 yoksa -1 döner
console.log(ifadeİciArama);
let Kacıncıİndex = stringİfade.indexOf("m"); //bir string ifadenin içinde paranteze yazılı olan string değerin hangi indexde olduğunu söyler
console.log(Kacıncıİndex);
let bosluksuzMetin = stringİfade.trim(" "); //string ifadenin başında ki ve sonunda ki boşlukları siler
console.log(bosluksuzMetin);
let BolveDevamEt = stringİfade.split("berkay"); //string ifadede parantez içine yazılan string yada char ifadeyi siler ve sildiği yerden devam eder
console.log(BolveDevamEt);
let yeriniDegistir = stringİfade.replace("berkay", "ramazan"); //string ifadede parantez içinde ki ilk parametrede ki string ifadeyi çıkarır 2. parametreyi ekler
console.log(yeriniDegistir);

// İf Else ternary ve switch case

var kararSayi = 4;
if (kararSayi < 5) {
    console.log("kararsayi değişkeni 5 den küçüktür");
} else {
    console.log("karar sayi 5 e eşit yada büyük");
}

var result = console.log(kararSayi < 5) ? "karar sayi 5 den küçük" : "karar sayi 5 e eşit yada büyük";

switch (kararSayi) {
    case 1:
        console.log("karar sayi = 1");
        break;
    case 2:
        console.log("karar sayi = 2");
        break;
    case 3:
        console.log("karar sayi = 3");
        break;
    case 4:
        console.log("karar sayi = 4");
        break;
    default:
        break;
}
// DÖNGÜLELR LOOPS
for (let i = 0; i < 4; i++) {
    console.log(i);

}
let a = 0;
while (a < 10) {
    a++;
    console.log(a);
}
let StringDizisi = ["berkay", "saraç", "ramazan"];
StringDizisi.forEach(element => {
    console.log(element);
});
let dizi = [1, 2, 3, 4, 5, 6]
var yeniDizi = dizi.map(function(item) {
    return item + 1;
});

// JS De diziler ve methodlar
let OrnekDizi = [1, 2, 3, 4, 5, 6, "berkay", "saraç", "izmit"];
OrnekDizi.push("Kocaeli"); //push methodu ile parantez içine girdiğimiz değeri diziye ekleriz sona eklenir
OrnekDizi.unshift(0); //unshift ile parantez içine girdiğimiz değeri dizinin başına ekleriz
OrnekDizi.pop(); // pop methodu ile dizinin son elemanı silinir
OrnekDizi.shift(); // shift methodu ile baştaki eleman silinir

OrnekDizi.reverse(); //dizinin sıralamasını tersine çevirir
OrnekDizi.sort(); //diziyi sıralar

// BOM Browser Object Model
// browser üzerinde document objesi history objesi navigation objesi ve diğer tüm objeler window objesinden türüyor
var sil = window.confirm("silmek istiyormusunuz");
if (sil == true) {
    console.log("siliniyor");
} else {
    console.log("silinmiyor");
}
console.log("merhaba");