export function mouseMoveHandler(ev){
        ev.preventDefault();
        console.log(ev.target.nodeName)
        if(ev.target.nodeName === "svg") ev.target = ev.target.parentElement
        if (ev.target.nodeName === "LI") {
          setWidth(ev.target.getBoundingClientRect().width);
          setTranslate(ev.target.getBoundingClientRect().x);
        }
}