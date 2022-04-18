
import Highway from '@dogstudio/highway';
import Fade from './transition';

// jquery and jquery ui
import "./import-jquery.js";
import "jquery-ui-dist/jquery-ui.js";


jQuery(function() {


    $('.weatherButton').on('mouseover', function() {
        console.log("KK")
        $('.weatherBackground').show();
    })

    $('.weatherButton').on('mouseleave', function() {
        $('.weatherBackground').hide();
    })

    
    const H = new Highway.Core( {
        transitions: {
            default: Fade
        }
    })
    


    // normal js

    $('.shadowButtons.button3').on('click', function() {
        $('#viktorVideo').hide();
        $('#viktorVideo2').get(0).play();

        // $('#projectLink').get(0).click();

    })

    $('.shadowButtons.button4').on('click', function() {
        $('#viktorVideo2').hide();
        $('#viktorVideo').get(0).play();

        // $('#funandartLink').get(0).click();

    })





});