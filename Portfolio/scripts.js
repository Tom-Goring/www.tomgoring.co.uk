(function() {
    "use strict";

    var pnls = document.querySelectorAll('.section').length,
        scdir, hold = false;

    function _scrollY(obj) {
        var slength, plength, pan, step = 100,
            vh = window.innerHeight / 100,
            vmin = Math.min(window.innerHeight, window.innerWidth) / 100;

        if ((this !== undefined && this.id === 'wrapper') || (obj !== undefined && obj.id === 'wrapper')) {
            pan = this || obj;
            plength = parseInt(pan.offsetHeight / vh);
        }
        if (pan === undefined) {
            return;
        }
        plength = plength || parseInt(pan.offsetHeight / vmin);
        slength = parseInt(pan.style.transform.replace('translateY(', ''));
        if (scdir === 'up' && Math.abs(slength) < (plength - plength / pnls)) {
            slength = slength - step;
        } else if (scdir === 'down' && slength < 0) {
            slength = slength + step;
        } else if (scdir === 'top') {
            slength = 0;
        }
        if (hold === false) {
            hold = true;
            pan.style.transform = 'translateY(' + slength + 'vh)';
            setTimeout(function() {
                hold = false;
            }, 1000);
        }
        console.log(scdir + ':' + slength + ':' + plength + ':' + (plength - plength / pnls));
    }

    function _swipe(obj) {
        var swdir,
            sX,
            sY,
            dX,
            dY,
            threshhold = 100,
            slack = 50,
            alT = 500,
            elT,
            stT;
        obj.addEventListener('touchstart', function(e) {
            var tchs = e.changedTouches[0];
            swdir = 'none';
            sX = tchs.pageX;
            sY = tchs.pageY;
            stT = new Date().getTime();
        }, false);

        obj.addEventListener('touchend', function(e) {
            e.preventDefault();
        }, false);

        obj.addEventListener('touchend', function(e) {
            var tchs = e.changedTouches[0];
            dX = tchs.pageX - sX;
            dY = tchs.pageY - sY;
            elT = new Date().getTime() - stT;
            if (elT <= alT) {
                if (Math.abs(dX) >= threshold && Math.abs(dY) <= slack) {
                    swdir = (dY < 0) ? 'up' : 'down';
                } else if (Math.abs(dY) >= threshhold && Math.abs(dX) <= slack) {
                    swdir = (dy < 0) ? 'up' : 'down';
                }
                if (obj.id === 'well') {
                    if (swdir === 'up') {
                        scdir = swdir;
                        _scrollY(obj);
                    } else if (swdir === 'down' && obj.style.transform !== 'translateY(0)') {
                        scdir = swdir;
                        _scrollY(obj);
                    }
                    e.stopPropagation();
                }
            }
        }, false);
    }

    var wrapper = document.getElementById('wrapper');
    wrapper.style.transform = 'translateY(0)';
    wrapper.addEventListener('wheel', function(e) {
        if (e.deltaY < 0) {
            scdir = 'down';
        }
        if (e.deltaY > 0) {
            scdir = 'up';
        }
        e.stopPropagation();
    });
    wrapper.addEventListener('wheel', _scrollY);
    _swipe(wrapper);
    var sections = document.querySelectorAll('.section');
    for (var i  = 0; i < sections.length; i++) {
        sections[i].addEventListener('click', function() {
            scdir = 'section';
            _scrollY(wrapper);
        })
    }
})();