'use strict'
// 1行目に記載している 'use strict' は削除しないでください

$(document).ready(function() {
    $(document).scroll(function() {
        let $nav = $('#mainNavbar');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
