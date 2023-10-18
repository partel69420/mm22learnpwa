window.onload = () => {
    'use strict'

    if('serviceWorker' in navigator){
        navigator.serviceWorker.registrer('./sw.js');
    }
}