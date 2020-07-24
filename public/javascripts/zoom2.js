$(document).ready(function () {


    var div = document.getElementById('div');
    div.classList.add('selected');
    var parent = div.parentElement;
    var irmaos = parent.querySelectorAll('div:not(.selected)')    

    var defaultWidth = '100px';
    var defaultHeight = '100px';


    // div.style.width = defaultWidth;
    div.style.height = defaultHeight;
    function redrawDiv(zoomEvt, size) {
        
        var atualClass = div.classList.toString().split(' ')[0];
        console.log('atualClass', atualClass);
        //let width = parseInt(div.style.width);
        let height = parseInt(div.style.height);

        if (size == 'fullscreen') {
            //width = '100%'
            height = '100vh'
        } else if (size == 'restore') {
            //width = defaultWidth;
            height = defaultHeight;
        }
        else {
            var resize = 10;
            var novaClass = atualClass.split('-');
            console.log('hhhhhhhhhhhhh', novaClass[0]+'-' +  novaClass[1] + '-' + (parseInt( novaClass[2]) +1));
            if (zoomEvt < 0) {
                
                //div.classList.remove(atualClass)
                div.classList.replace(atualClass, novaClass[0]+'-' +  novaClass[1] + '-' + (parseInt( novaClass[2]) -1));
                resize *= -1;
            } else {
                //div.classList.remove(atualClass)
                div.classList.replace(atualClass, novaClass[0]+'-' +  novaClass[1] + '-' + (parseInt( novaClass[2]) +1));
            }            

            //width = (width + resize) + 'px';
            height = (height + resize) + 'px';
        }

        //div.style.width = width;
        div.style.height = height;

        resize *= -1;

        irmaos.forEach(function(item){        
            item.style.height);            
            
            width = '50px !important';
            height = (height + resize) + 'px';

            item.style.width = width;
            item.style.height = height;

            console.log(item.style)
        });

    }

    var dragStart, dragged;

    div.addEventListener('dblclick', function (evt) {
        console.log('this.style.width', this.style.width)

        var size = 'fullscreen';

        if (this.style.width == '100%') {
            size = 'restore';
        }

        redrawDiv(evt, size);
    });

    div.addEventListener('mousedown', function (evt) {
        document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = 'none';
        lastX = evt.offsetX || (evt.pageX - div.offsetLeft);
        lastY = evt.offsetY || (evt.pageY - div.offsetTop);
    }, false);

    div.addEventListener('mousemove', function (evt) {
        lastX = evt.offsetX || (evt.pageX - div.offsetLeft);
        lastY = evt.offsetY || (evt.pageY - div.offsetTop);
        dragged = true;
        if (dragStart) {
            var pt = ctx.transformedPoint(lastX, lastY);
            ctx.translate(pt.x - dragStart.x, pt.y - dragStart.y);
            redrawDiv();
        }
    }, false);

    div.addEventListener('mouseup', function (evt) {
        dragStart = null;
        if (!dragged) zoomDiv(evt.shiftKey ? -1 : 1);
    }, false);

    var scaleFactor = 1.1;

    var zoomDiv = function (clicks) {
        console.log('zoomDiv');
        redrawDiv(clicks);
    }

    var handleScrollDiv = function (evt) {
        ;
        var delta = evt.wheelDelta ? evt.wheelDelta / 40 : evt.detail ? -evt.detail : 0;
        if (delta) zoomDiv(delta);
        return evt.preventDefault() && false;
    };

    div.addEventListener('DOMMouseScroll', handleScrollDiv, false);
    div.addEventListener('mousewheel', handleScrollDiv, false);

    
});
