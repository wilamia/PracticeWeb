$(document).ready(function() {
    // 1. Обрамить h1 смайликами (кавычками)
    let $h1 = $('h1').first();
    $h1.text('😊 "' + $h1.text() + '" 😊');

    // 2. Добавить в конец каждой ссылки её номер на странице
    $('a').each(function(index) {
        $(this).append(` [${index + 1}]`);
    });

    // 3. Создать новый блок с количеством всех ссылок и добавить в body
    let totalLinks = $('a').length;
    let $countBlock = $('<div id="linkCountBlock"></div>').text('Всего ссылок на странице: ' + totalLinks);
    $('body').append($countBlock);

    // 4. Выделить количество всех ссылок курсивом (тег em)
    $countBlock.html('Всего ссылок на странице: <em>' + totalLinks + '</em>');

    // 5. Обернуть все ссылки в элементы списка <li>, создать из них упорядоченный список <ol>
    let $ol = $('<ol></ol>');
    $('a').each(function() {
        let $li = $('<li></li>').append($(this));
        $ol.append($li);
    });
    // Добавить список в body
    $('body').append($ol);

    // 6. Заменить значение атрибута alt всех изображений на новое
    $('img').attr('alt', 'Новое описание изображения');

    // 7. Заменить элемент с id=header на <header>
    let $oldHeader = $('#header');
    let $newHeader = $('<header></header>').html($oldHeader.html());
    $oldHeader.replaceWith($newHeader);

    // 8. Скопировать таблицу и поместить копию в конец body
    let $tableCopy = $('#myTable').clone();
    $('body').append($tableCopy);

    // 9. Удалить каждый второй дочерний элемент body (нумерация с 1)
    $('body').children().each(function(index) {
        if ((index + 1) % 2 === 0) {
            $(this).remove();
        }
    });
});
