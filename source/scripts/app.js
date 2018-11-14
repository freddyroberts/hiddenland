import $router from 'wee-routes';
import './bootstrap';
import header from '../components/header';
import cardPopup from '../components/card';

$router.map([
    {
        path: '/',
        handler: [header, cardPopup],
    },
]).run();
