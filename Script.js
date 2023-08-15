const btn = document.getElementById('navbarIcon');

    let index = 0;

    const Bwidth = ['4px', '2px'];

    btn.addEventListener('click', function onClick() {
        btn.style.borderWidth = Bwidth[index];
        btn.style.outline = 'none';

        index = index >= Bwidth.length - 1 ? 0 : index + 1;
    });

//active classes menu
document.getElementsByClassName("MB active")

