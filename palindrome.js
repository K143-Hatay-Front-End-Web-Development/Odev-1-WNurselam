function largestPalindrome() {
    let max = 0;  
    let product = "";
    for (var i = 100; i < 1000; i++) {    
      for (var j = i; j < 1000; j++) { 
         product = i * j;  
        if(product > max){ 
            if(product.toString().split("").reverse().join("") === product.toString()){
                max = product
            }
        }
      }
    }
    return max;
  }
  console.log(largestPalindrome());

    /*
      başta max adında number bir değişkene atıyoruz
      döngü çarpılarımını product değişken de tutuyoruz.
      İki sayı dediği için 2 tane döngü oluşturuyoruz bunlar iç içe olacak döngülerdir.
      döngümüzü 100'den başlatım 999'a kadar sayıları yazdırıyoruz. 
      aynı 2. döngümüzde oluşturuyoruz burada j i'nin değerinden başlayacak yani
      direk 100'den başlayacak.
      2 döngü'de çalıştırılıp birbirleriye çarpıyoruz.
      şartımız şu bizim product değerimiz max'dan yani 0'dan büyükse true ise
      product değerimizi stringe sonra split ile bölüyoruz ve sonra da bunu ters
      çevirip birleştiriyoruz ve önceki değerle karşılaştırıyoruz bu istedğimiz 
      şarta uyuyorsa.
      Max değişkenine atıyoruz zaten maxın değeri number olduğu için başta 0 vermiştik
      bunu direk bize number olarak vericek yani tekrardan number'a çevirmeye gerek kalmıyor
      ve çıktı 906609 şeklinde döndecektir bize
    */