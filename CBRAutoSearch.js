// ==UserScript==
// @name         CBR Reserveringszoeker
// @namespace    CBRAutoSearch
// @version      0.1
// @description  Automatisch een beschikbare reservering maken in de komende 4 weken.
// @author       Kevin
// @match        https://www.cbr.nl/nl/mijncbr/reserveren.htm
// @icon         https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Circle-icons-car.svg/512px-Circle-icons-car.svg.png
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    function setTitleToSearching(){
        document.title = 'Reserveren - CBR - Zoeken...'
    }

    function clickReserve(){
        if(document.querySelector('.rsv-overview-row--next') !== null){
            document.querySelector('.rsv-overview-row--next').firstChild.click();
            console.log('clicked overview next');
            document.title = '!!! RESERVERING GEVONDEN !!!'
        }
    }

    function clickItem(){
        if(document.querySelector('.rsv-result-container') !== null){
            console.log('found and clicked result');
            document.querySelector('.rsv-result-container').firstChild.click();
        }
        else{
            console.log('no result found');
        }
    }

    function nextPage(){
        if(document.querySelector('.rsv-details-next') !== null){
            setTitleToSearching();
            document.querySelector('.rsv-details-next').click();
            console.log('clicked next');
        }
        setTimeout(clickItem, 500)
        setTimeout(previousPage, 750)
    }

    function previousPage(){
        if(document.querySelector('.rsv-details-previous') !== null){
            setTitleToSearching();
            document.querySelector('.rsv-details-previous').click();
            console.log('clicked previous');
        }
        setTimeout(clickItem, 500)
    }

    console.log('started');
    setTitleToSearching();
  
    setInterval(() => {
        clickReserve();
        nextPage();
    }, 1750);
})();
