import $ from 'wee-dom';
import $events from 'wee-events';
import $location from 'wee-location';
import { RouteHandler } from 'wee-routes';

export default new RouteHandler({
    init() {

        $events.on({
            'window': {
                load(e) {
                    e.preventDefault();
                    $('.js-site-nav').addClass('-loaded');
                }
            },
            '.js-scroll-trigger': {
                click(e, el) {
                    const target = $location.uri(el.href).hash;
                    e.preventDefault();
                    $(`#${target}`)[0].scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'start',
                    });
                }
            },
        });

        // element.scrollIntoView();
        // element.scrollIntoView(false);
        // element.scrollIntoView({block: "end"});
        // element.scrollIntoView({behavior: "instant", block: "end", inline: "nearest"});
    }
});
