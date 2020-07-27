$(document).ready(function() {
    document.getElementById('burger').onclick = function () {
        document.getElementById('menu').classList.add('open');
    };
    document.querySelectorAll('#menu > *').forEach((item) => {
        item.onclick = () => {
            document.getElementById('menu').classList.remove('open');
        }
    })
    $('.foto-popup').magnificPopup({
        type: 'image'
        // other options
    });
    $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });

    /*$(document).on('click', '#button',() => {
            alert('Спасибо за заказ. Мы свяжемся с вами в ближайшее время!')
    })*/

    /*
    $('#button').on('click', function() {
        alert('Спасибо за заказ. Мы свяжемся с вами в ближайшее время!')
    })
     */
});