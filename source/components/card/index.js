import $ from 'wee-dom';
import $events from 'wee-events';
import { RouteHandler } from 'wee-routes';

export default new RouteHandler({
    init() {
        $events.on({
            body: {
                click(e) {
                    const elements = [
                        ...$socialContainer.toArray(),
                        ...$socialContainer
                            .filter('.js-populated')
                            .find('*')
                            .toArray(),
                        ...$(':socialButton').toArray(),
                    ];

                    if (! elements.includes(e.target)) {
                        $('.js-popup').hide();
                    }
                }
            },
            '.js-card': {
                click(e, el) {
                    e.preventDefault();
                    $(`.js-popup-${$(el).data('card')}`).show();

                    
                }
            },
            '.js-close': {
                click(e, el) {
                    e.preventDefault();
                    $('.popup').hide();
                }
            }
        });
    }
});
