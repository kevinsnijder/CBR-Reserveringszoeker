# CBR Reserveringszoeker
Een tampermonkey browserscript om geautomatiseerd een reservering te claimen op de website van het Centraal Bureau Rijvaardigheidsbewijzen.

**LET OP!**

Zorg dat je de website van het CBR open hebt staan in een apart tabje. <br/>
De titel van het tabje tijdens het zoeken is _'Reserveren - CBR - Zoeken....'_. Wanneer er een reservering gevonden is wordt de titel van het tabje aangepast naar _'!!! Reservering gevonden !!!'_.<br/>
Het script probeert deze reservering automatisch aan te klikken zodat je in de betaalstap komt. Ik vermoed dat het CBR in sommige gevallen de reserveringen niet door laat gaan omdat je te snel bent. In dit geval wordt de titel nog wel aangepast, maar staat er een foutmelding op de pagina. Als je snel een incognito tabblad opent en hier in logt op het CBR ben je hoogstwaarschijnlijk nog wel op tijd om de reservering handmatig te claimen.


# Gebruik
**1.** Installeer de tampermonkey browserplugin


**2.** Maak een nieuw script aan

![image](https://user-images.githubusercontent.com/22765565/144583460-d3265a8f-fc1f-429e-b0e4-cc35e5888d89.png)
 
**3.** Plak de inhoud van CBRAutoSearch.js in het script veld

![image](https://user-images.githubusercontent.com/22765565/144583724-c6b75095-fe5c-4760-a43a-0ad52c31741a.png)

**4.** Sla het bestand op (ctrl + s)

**5.** Log in op de website van het CBR

**6.** Ga naar 'Examen reserveren of wijzigen'

**7.** Ga naar de pagina die voor jou relevant is

**8.** Vul een datum in vanaf wanneer je wilt beginnen met zoeken

  Het script zoekt automatisch 4 weken vooruit.

**9.** Klik op zoeken

**10.** Het script zoekt en reserveert automatisch een vrije plaats!
