# React Texniki Tapşırıq

**1. FIN üzrə müştəri axtarışı**\
    &emsp;**1.1 Müştəri mövcud deyil**\
    &emsp;&emsp;    - Yeni müştəri qeydiyyatı imkanı\
    &emsp;&emsp;        - Faktiki ünvan \
    &emsp;&emsp;        - Şəxsiyyət vəsiqəsi məlumatları \
    &emsp;&emsp;            - FİN\
    &emsp;&emsp;            - Seriya və kod\
    &emsp;&emsp;            - Ad Soyad Ata adı\
    &emsp;&emsp;            - Qeydiyyat ünvanı\
    &emsp;&emsp;            - Doğum tarixi\
    &emsp;&emsp;        - Telefon (mobil + ev)\
    &emsp;**1.2 Müştəri mövcuddur** \
    &emsp;&emsp;    - Müştəri məlumatları əks olunması\
    &emsp;&emsp;    - Yeni kredit sifarişi yarat button-u\
**2. Yeni kredit müraciəti**\
    &emsp;**2.1 Birinci mərhələ - Şəxs haqqında məlumat**\
    &emsp;&emsp;        - Fəaliyyət sektoru\
   &emsp;&emsp;         - Aylıq gəliri\
    &emsp;&emsp;        - İş təcrübəsi (il)\
    &emsp;&emsp;        - İş təcrübəsi (ay)\
    &emsp;&emsp;        - Region\
   &emsp;&emsp;         - Biznes ünvanı\
    &emsp;**2.2 İkinci mərhələ - Kredit barədə məlumat**\
    &emsp;&emsp;        - Valyuta\
    &emsp;&emsp;        - Biznes kreditin məqsədi\
   &emsp;&emsp;         - Məbləğ\
   &emsp;&emsp;         - Müddət\
    &emsp;&emsp;        - Faiz\
   &emsp; **2.3 Üçüncü mərhələ - Zaminin əlavəsi** \
    &emsp;&emsp;        - 1-ci maddədəki Eyni müştəri məntiqi ilə axtarış\
    &emsp;&emsp;        - Bir neçə zamin əlavəsi funksionalı\
    &emsp;&emsp;        - Əlavə olunan zaminlərin siyahısı cədvəli\
    &emsp; **2.4 Dördüncü mərhələ - Kredit Kalkulyatoru**\
    &emsp;&emsp;    - 2.2 maddəsindəki mərhələdəki müddətə, məbləğə, faizə uyğun ödəniş cədvəlinin generasiyası \
    &emsp;&emsp;    - *Cədvəlin formulasın elə yazmaq lazımdır ki, hər ay (+-) eyni qədər məbləğ ödənsin amma faiz məbləği çoxdan aza doğru dəyişsin*\
    &emsp; **2.5 Beşinci mərhələ - Xülasə**\
    &emsp;&emsp;    - Əlavə olunmuş məlumatların xülasəsi\
    &emsp;&emsp;    - Kreditin təsdiqi və ya imtinası üçün button-lazımdır\
    &emsp;&emsp;    - İmtina halında səbəb qeyd olunsun\

## Nə tələb olunur
    
Aşağıdakı mərhələli prosesi uyğun validasiyalar tətbiq olunmaqla yazmaq. 
Hər mərhələnin submit-ində cari form-dakı məlumatlar save olunmalı və store update olunmalı.
Tapşırığı fork edib həll etdikdən sonra git şəxsi hesaba push etmək.

## İstifadə olunacaq stack
- React.js
- Typescript
- Redux toolkit
- Material UI
- React-router
- react hook form
- imask
