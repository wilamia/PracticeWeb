$(document).ready(function() {
    let angle = 0;
    function rotate() {
        angle += 1; // скорость вращения (градусы)
        $('#circleText').css('transform', 'rotate(' + angle + 'deg)');
        requestAnimationFrame(rotate);
    }
    rotate();
});