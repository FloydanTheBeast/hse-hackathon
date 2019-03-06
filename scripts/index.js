const moveTo = new MoveTo()

window.onload = () => {
    const triggers = document.getElementsByClassName('js-trigger');
        for (var i = 0; i < triggers.length; i++) {
            moveTo.registerTrigger(triggers[i]);
        }
}