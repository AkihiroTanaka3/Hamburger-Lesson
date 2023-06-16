$(function() {
    $('.menu-trigger').on('click', function(event) { //.menu-triggerをクリック時に行われる処理
        $(this).toggleClass('active'); //指定されているクラスをトグル処理するメソッド
        $('#sp-menu').fadeToggle(); //要素のフェードイン・フェードアウトを行うメソッド
        event.preventDefault();
    });
});