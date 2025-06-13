$(function () {
    // 1. получить href ссылки из класса www
    alert("Href ссылки с классом www: " + $('a.www').attr('href'));

    // 2. получить href первой ссылки
    alert("Href первой ссылки: " + $('a').first().attr('href'));

    // 3. вывести href всех ссылок в модальном окне поочерёдно
    $('a').each(function () {
        alert('Href ссылки: ' + $(this).attr('href'));
    });

    // 4. заменить href каждой ссылки на '!'
    $('a').attr('href', '!');

    // 5. добавить каждой ссылке target='_blank'
    $('a').attr('target', '_blank');

    // 6. заменить содержимое каждой ссылки на их href
    $('a').each(function () {
        $(this).text($(this).attr('href'));
    });

    // 7. вставить после содержимого каждой ссылки их href в круглых скобках
    $('a').each(function () {
        $(this).append(' (' + $(this).attr('href') + ')');
    });

    // 8. вставить в атрибут title каждой ссылки ее анкор
    $('a').each(function () {
        $(this).attr('title', $(this).text());
    });

    // 9. добавить всем li класс test
    $('li').addClass('test');

    // 10. удалить у li класс www
    $('li.www').removeClass('www');

    // 11. добавить всем li класс www, если его нет, и удалить, если есть (переключение)
    $('li').each(function () {
        $(this).toggleClass('www');
    });

    // 12. проверить, что хотя бы одна ссылка имеет класс www
    if ($('a.www').length > 0) {
        alert('Есть ссылка с классом www');
    } else {
        alert('Нет ссылок с классом www');
    }

    // 13. вывести value инпута с классом in
    $('.in').each(function () {
        alert('Input value: ' + $(this).val());
    });

    // 14. вывести содержимое textarea с классом text
    alert('Textarea content: ' + $('.text').val());

    // 15. вывести последовательно value каждого инпута
    $('input').each(function () {
        alert('Input value: ' + $(this).val());
    });

    // 16. установить value всех инпутов в '!'
    $('input').val('!');

    // 17. обернуть каждый <h2> в <div>
    $('h2').wrap('<div></div>');

    // 18. обернуть каждый <h2> в <div> с классом test
    $('h2').wrap('<div class="test"></div>');

    // 19. обернуть каждый <h2> внутри в <i>
    $('h2').wrapInner('<i></i>');

    // 20. обернуть все <h2> в один <i>
    $('h2').wrapAll('<i></i>');

    // 21. найти <p>, обернутые <div>, и удалить эти <div>, оставив <p>
    $('div > p').unwrap();

    // 22. перед каждым <h2> вставить '<p>!</p>'
    $('h2').before('<p>!</p>');

    // 23. после каждого <h2> вставить '<p>?</p>'
    $('h2').after('<p>?</p>');

    // 24. внутри каждого <h2> в начале вставить '!'
    $('h2').prepend('!');

    // 25. внутри каждого <h2> в конце вставить '?'
    $('h2').append('?');

    // 26. каждый <h2> заменить на его содержимое
    $('h2').replaceWith(function () {
        return $(this).html();
    });

    // 27. сделать все <h2> пустыми (теперь уже нет <h2>, но на всякий случай)
    $('h2').empty();

    // 28. удалить все <h2>
    $('h2').remove();

    // 4. Анимация текста (скольжение и выцветание)
    $('#animatedText').hide().slideDown(1000).delay(1000).fadeOut(1500).fadeIn(1500);
});