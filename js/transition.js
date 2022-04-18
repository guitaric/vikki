import Highway from '@dogstudio/highway';
import {TimelineLite} from 'gsap';
import 'slick-carousel';

// jquery and jquery ui
import "./import-jquery.js";
import "jquery-ui-dist/jquery-ui.js";

class Fade extends Highway.Transition{

    in({from,to,done}){
        const tl = new TimelineLite();
        tl
        .fromTo(from, 0.5, {opacity: '1'}, {opacity: '0'})

        .fromTo(to, 1, {opacity: '0'}, {opacity: '1', 
            onComplete: function() {
                from.remove();
                done();

                console.log("ajhsakjsh")
                $('.slickContainer').slick({
                    vertical: true,

                });

            }
        })
    }
    out({from, done}){
        done();
    }
}

export default Fade;

