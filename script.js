let audienceButton = document.getElementById('audience-button');
let showBox1 = document.getElementsByClassName('show-box-1')[0];

audienceButton.addEventListener('click', ()=>{
    showBox1.classList.toggle('show-box-active');
})

function autoGrow(e){
    e.style.height = "5px";
    e.style.height = (e.scrollHeight)+"px";
}

const audienceCheckOff = ()=> {
    Array.from(document.getElementsByClassName('check-audience-i')).forEach((i)=> {
        i.style.color = "#fff";
    })
}


Array.from(document.getElementsByClassName('check-audience')).forEach((i, a) => {
    i.addEventListener('click', ()=> {
        audienceCheckOff();
        document.getElementsByClassName('check-audience-i')[a].style.color="#1ca1f1";
        if(a===0){
            audienceButton.innerHTML= `Everyone <i class="fa-sharp fa-solid fa-angle-down">`;
            audienceButton.style.color = "#1ca1f1";
            audienceButton.style.borderColor = "#1ca1f1";
        }
        else{
            audienceButton.innerHTML= `Twitter Circle <i class="fa-sharp fa-solid fa-angle-down">`;
            audienceButton.style.color = "green";
            audienceButton.style.borderColor = "green";
        }
        showBox1.classList.toggle('show-box-active');
    })
})

let selectReplyButton = document.getElementsByClassName('select-reply-button')[0];
let showBoxWhoCanReplyBox = document.getElementsByClassName('show-box who-can-reply-box')[0];

selectReplyButton.addEventListener('click', ()=> {
    showBoxWhoCanReplyBox.classList.toggle('show-box-active');
})


const whoCanReplyOff = ()=> {
    Array.from(document.getElementsByClassName('who-can-reply-box-i')).forEach((i)=> {
        i.style.color = "#fff";
    })
}


Array.from(document.getElementsByClassName('who-can-reply-box')).forEach((i, a) => {
    i.addEventListener('click', ()=> {
        whoCanReplyOff();
        document.getElementsByClassName('who-can-reply-box-i')[a].style.color="#1ca1f1";
        if(a===0){
            selectReplyButton.innerHTML= `<i class="fa-solid fa-earth-asia"></i> Everyone can reply`;
        }
        else if(a===1){
            selectReplyButton.innerHTML= `<i class="fa-solid fa-user-check"></i> People you follow`;
        }
        else{
            selectReplyButton.innerHTML= `@ Only people you mention`;
           
        }
        whoCanReplyOff.classList.toggle('show-box-active');
    })
})

let tweetTextArea = document.getElementById('tweet-text-area');
let tweetPost = document.getElementById('tweet-post');
let textLimit = document.getElementById('text-limit');

tweetTextArea.addEventListener('keyup', ()=> {
    if(tweetTextArea.value.length>0){
        tweetPost.style.background = "rgb(28,160,242)"
    }
    else{
        tweetPost.style.background = "rgb(28,160,242, .5)"
    }

    let a = tweetTextArea.value.length;
    let b = parseInt((a/2));
    let c = (100-b);
    textLimit.innerText = c + "%";

    if(c===0){
        textLimit.style.color = "red"
    }
    else{
        textLimit.style.color = "rgb(0,0,0,.8)";
    }
})