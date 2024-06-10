const loadcomponent = async (phat) => await (await fetch(phat)).text()

const select = (el, all = false) => {
    el = el.trim();
    if (all) {
        return [...document.querySelectorAll(el)];
    } else {
        return document.querySelector(el);
    }
};

function sidebar() {
    document.body.classList.toggle("toggle-sidebar");
}
function sidebarActive(myVal) {
    myVal.classList.add("active")
    //doing custom things with myVal
    //here I want to prevent default
    return false;
}
