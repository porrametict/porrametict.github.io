window.onload = function () {
    let vid = document.getElementById("myVideo");
    // vid.currentTime = 70.00
    // vid.play();
    // vid.muted = false;
    // setTimeout(function () {
    //     document.getElementById("myVideo").play();
    // },3000)

    setInterval(my, 1)

};
function playVideo () {
    document.getElementById("play").style.display = "none"
    document.getElementById("myVideo").play()

}


function my() {
    let vid = document.getElementById("myVideo");
    let cur_time = vid.currentTime.toFixed(2)
    console.log(cur_time)
    if (cur_time == 78.00) {
        document.getElementById("bird").style.display = "block"
    }
    if (cur_time == 78.95) {
        vid.pause();
        p_sfx1()
        setTimeout(pause_sx1, 8000)
    }

    if (cur_time == 89.20) {
        nicknameShow()
    }
    if (cur_time == 92.00) {
        document.getElementById("nikeName").style.animation = "crossfade .5s ease-out forwards"
    }
    if (cur_time == 93.10) {
        document.getElementById("fullname").style.display = "flex"
    }
    if (cur_time == 95.63) {
        document.getElementById("fullname").style.animation = "endFullname 0.5s ease-out forwards"
        setTimeout(function () {
            document.getElementById("fullname").style.opacity = "0"
        }, 1000)

    }
    if (cur_time == 97.30) {
        document.getElementById("up").style.display = "flex"
    }
    if (cur_time == 99.30) {
        document.getElementById("se").style.display = "flex"
    }

    if (cur_time == 101.00) {
        document.getElementById("up").style.animation = " upExit .58s ease-out forwards"
        document.getElementById("se").style.animation = " seExit .58s ease-out forwards"
    }

    if (cur_time == 103.70) {
        document.getElementById("webDev").style.display = "flex"
    }
    if (cur_time == 107.35) {
        document.getElementById("webDev").style.animation = "webDevExit .5s ease-out forwards"
    }
    if (cur_time == 110.00) {
        document.getElementById("frontBack").style.display = "block"
    }

    if(cur_time == 110.65){
        document.getElementById('front').style.display = "none"
        document.getElementById('back').style.display = "block"
    }
    if(cur_time == 112.77){
        document.getElementById('front').style.display = "block"
        document.getElementById('back').style.display = "none"
    }
    if(cur_time == 113.29){
        document.getElementById('front').style.display = "none"
        document.getElementById('back').style.display = "block"
    }


    if (cur_time == 113.56) {
        document.getElementById("frontBack").style.animation = " seExit .58s ease-out forwards"

    }



    if (cur_time == 125.23) {
        document.getElementById("end").style.display = "flex"
    }


    delete vid;
    delete cur_time;
}

function p_sfx1() {
    // console.log("audioplay")
    document.getElementById('illum').play();
    document.getElementById("myVideo").classList.add("video_gray")
}
function pause_sx1() {
    // console.log("audio_pause")
    document.getElementById("myVideo").classList.remove("video_gray")
    document.getElementById('illum').pause()
    document.getElementById('s_punch').play()
    document.getElementById("bird").style.opacity = "0"
    document.getElementById("cssText").style.display = "block"
    // document.getElementById('myVideo').currentTime = 78.96;
    document.getElementById('myVideo').play()
    // document.getElementById('s_punch').pause()

}


function nicknameShow() {
    document.getElementById("nikeName").style.display = "flex";
    document.getElementById("cssText").style.opacity = "0"

}
