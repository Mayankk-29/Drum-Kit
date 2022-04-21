for (let i = 0; i < 7; i++) {
document.querySelectorAll("button")[i].addEventListener("click", function() {
var l = this.innerHTML;
makeSound(l);
ba(l);
});
}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  ba(event.key);
});

function makeSound(key){
  switch(key) {
    case "w":new Audio("sounds/tom-1.mp3").play();
      break;
      case "a": new Audio("sounds/tom-2.mp3").play();

        break;
        case "s": new Audio("sounds/tom-3.mp3").play();

          break;
          case "d": new Audio("sounds/tom-4.mp3").play();

            break;
            case "j": new Audio("sounds/snare.mp3").play();

              break;
              case "k": new Audio("sounds/crash.mp3").play();

                break;
                case "l": new Audio("sounds/kick-bass.mp3").play();
                  break;
                  default: console.log("wrong");
  }
}

function ba(ckey){
var ab = document.querySelector("."+ckey);
ab.classList.add("pressed");
setTimeout(function() {
  ab.classList.remove("pressed");
}, 100);


}
