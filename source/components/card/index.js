import $ from 'wee-dom';
import $events from 'wee-events';
import { RouteHandler } from 'wee-routes';

export default new RouteHandler({
    init() {
        $events.on({
            '.js-card': {
                click(e, el) {
                    e.preventDefault();
                    $(`.js-popup-${$(el).data('card')}`).show();  
                    $('body').addClass('-popup');      
                }
            },
            '.js-close': {
                click(e, el) {
                    e.preventDefault();
                    $('.popup').hide();
                    $('body').removeClass('-popup');  
                }
            }
        });
    }
});
