import $ from 'wee-dom';
import $router from 'wee-routes';
import $events from 'wee-events';
import './bootstrap';

$router.map([
    {
        path: '/',
        init() {
            $events.on('window', 'load', (e, el) => {
                $('.js-site-nav').addClass('-loaded');
                // Click logic
                e.preventDefault();
            });
        },
    },
]).run();
