const character = document.querySelector('.character');
const bullet = document.querySelector('.bullet1');
const bullet2 = document.querySelector('.bullet2');
const audio = document.querySelector('.audio');
const monsters = document.querySelectorAll('.monster')
const monster1 = document.querySelector('.monster-1')
const monster2 = document.querySelector('.monster-2')
const monster3 = document.querySelector('.monster-3')
const point = document.querySelector('.poin-real')
var i =0;
var j =0;
var x = 0;
var k =0;
alert('chào các bạn bấm phím mũi tên để di chuyển bấm F để bắn ');
var shootRight = function(element,left,bot){
    j=left;
    element.style.display="block"
    element.style.left=`${left+170}px`;
    console.log(left);
   const interval= setInterval(function(){
        
        j+=50;
        if(j>1700){
    element.style.display="none"
            clearInterval(interval);
        }
        element.style.left = `${j+170}px`
        element.style.bottom = `${bot+102}px`

        console.log('1')
    },20)
}
var shootLeft = function(element,left,bot){
    j=left;
    element.style.display="block"
    element.style.left=`${left-10}px`;
    console.log(left);
   const interval= setInterval(function(){
        
        j-=50;
        if(j<0){
    element.style.display="none"
            clearInterval(interval);
        }
        element.style.left = `${j-10}px`
        element.style.bottom = `${bot+134}px`

        console.log('1')
    },20)
}

var goRight = function(element) {

    i=i+100;
    if(i>1300){
        i=1370;
    }
    element.style.left = `${i}px`;
}
var goLeft = function(element) {
    i=i-100;
    if(i<0){
        i=0;
    }
    element.style.left = `${i}px`;
}
var goTop = function(element,bottom){
    bottom=bottom+50;
    if(bottom>580){
        bottom=580;
    }
    console.log('botto',bottom);
    element.style.bottom = `${bottom}px`;
}
var goDow = function(element,bottom){
    bottom=bottom-50;
    if(bottom<0){
        bottom=0;
    }
    console.log('botto',bottom);
    element.style.bottom = `${bottom}px`;
}
window.onkeydown = function(e) {
    console.log(e.key);
    if(e.key=='ArrowRight'){
        character.src = './image/game.png';
        goRight(character);
    }
    if(e.key=='ArrowLeft'){
        character.src = './image/game2.png';
        goLeft(character);
    }
    var rect = character.getBoundingClientRect();
    if(e.key=='f'){
        audio.play();
        if(character.getAttribute('src') == './image/game.png'){
            shootRight(bullet,rect.left,574-character.offsetTop);    
        }
        if(character.getAttribute('src') == './image/game2.png'){
            shootLeft(bullet2,rect.left,574-character.offsetTop);    
        }
    }

    if(e.key=='ArrowUp'){
        goTop(character,Math.floor( 574- character.offsetTop));
        console.log(Math.floor( character.offsetTop-574));
    }
    if(e.key=='ArrowDown'){
        goDow(character,Math.floor( 574- character.offsetTop));
        console.log(Math.floor( character.offsetTop-574));
    }
    if(e.key=='c'){
        monsters.forEach(function(monster){
                        var x = monster.getBoundingClientRect();
                        var y = bullet.getBoundingClientRect();
                            console.log('dayne',bullet.offsetTop)
    })
}}
setInterval(function() {
    monsters.forEach(function(monster){
        console.log('quái vật đây')
        var x = Math.floor(Math.random() * 500);
        var y = Math.floor(Math.random() * 1500);

        console.log(x,y)
        monster.style.top = `${x}px`
        monster.style.left = `${y}px`

    })
    monster1.src = './image/quaivat1-removebg-preview.png'
    monster2.src = './image/quaivat2-removebg-preview.png'
    monster3.src = './image/quaivat3-removebg-preview.png'

},3000)

setInterval(function(){
    monsters.forEach(function(monster){
    var x = monster.getBoundingClientRect();
    var y = bullet2.getBoundingClientRect();
    var z = bullet.getBoundingClientRect();

        if(bullet2.offsetTop>monster.offsetTop-60 && bullet2.offsetTop<monster.offsetTop+60 && y.left>x.left-50 &&y.left<x.left+50){
            monster.src = './image/boom-removebg-preview.png'
            point.innerHTML= `${k}`
            k++;
        }
        if(bullet.offsetTop>monster.offsetTop-60 && bullet.offsetTop<monster.offsetTop+60 && z.left>x.left-50 &&z.left<x.left+50){
            monster.src = './image/boom-removebg-preview.png'
            point.innerHTML= 'helo'
            point.innerHTML= `${k}`
            k++;
        }
    })
},1)

// window.onkeydown = function(e) {
//     if(e.key=='c'){
//         monsters.forEach(function(monster){
//             var x = monster.getBoundingClientRect();
//             var y = bullet.getBoundingClientRect();
//                 console.log(bullet.offsetTop)
//                 if(bullet.offsetTop>monster.offsetTop-10 && bullet.offsetTop<monster.offsetTop+10 && y.left>x.left-10 &&y.left<x.left+10){
//                     // monster.src = './image/boom-removebg-preview.png'
//                 }
//             })
//     }

// 