import '../sass/main.scss';

/* AOS Control Block */
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();


/** Parallax Control Block */
import Rellax from 'rellax';

if(jQuery('.rellax').length != 0){
    let rellax = new Rellax('.rellax', {});
}



 
