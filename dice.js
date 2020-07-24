
    let player1Roll = Math.floor(Math.random()*6+1);
    let player2Roll = Math.floor(Math.random()*6+1);
    let p1Src = "images/dice"+player1Roll+".png";
    let p2Src = "images/dice"+player2Roll+".png";
    let img1 = document.querySelectorAll("img")[0];
    let img2 = document.querySelectorAll("img")[1];
    
    img1.setAttribute("src",p1Src);
    img2.setAttribute("src",p2Src);

    // if(player1Roll === player2Roll){
    //     header.innerText="It's a Draw!"
    // }

    switch(player1Roll>player2Roll){
        case true:
            document.querySelector("h1").innerHTML="Player 1 Wins!";
        break;
        case false:
            document.querySelector("h1").innerHTML="Player 2 Wins!";
        break;
        default:
            document.querySelector("h1").innerHTML="Refresh Me!";
    }
    if(player1Roll===player2Roll){
        document.querySelector("h1").innerHTML="It's a Draw!";
    }