// Heart Icons- Clicking on the heart icon of any card will increase the count in the Navbar
    document.getElementById("heart-icon1").addEventListener('click', function(e){
        e.preventDefault();
        let heartCount = parseInt(document.getElementById("heart-count").innerText);
        heartCount = heartCount + 1;
        document.getElementById("heart-count").innerText = heartCount;
    })

    document.getElementById("heart-icon2").addEventListener('click', function(e){
        e.preventDefault();
        let heartCount = parseInt(document.getElementById("heart-count").innerText);
        heartCount = heartCount + 1;
        document.getElementById("heart-count").innerText = heartCount;
    })

    document.getElementById("heart-icon3").addEventListener('click', function(e){
        e.preventDefault();
        let heartCount = parseInt(document.getElementById("heart-count").innerText);
        heartCount = heartCount + 1;
        document.getElementById("heart-count").innerText = heartCount;
    })

    document.getElementById("heart-icon4").addEventListener('click', function(e){
        e.preventDefault();
        let heartCount = parseInt(document.getElementById("heart-count").innerText);
        heartCount = heartCount + 1;
        document.getElementById("heart-count").innerText = heartCount;
    })

    document.getElementById("heart-icon5").addEventListener('click', function(e){
        e.preventDefault();
        let heartCount = parseInt(document.getElementById("heart-count").innerText);
        heartCount = heartCount + 1;
        document.getElementById("heart-count").innerText = heartCount;
    })

    document.getElementById("heart-icon6").addEventListener('click', function(e){
        e.preventDefault();
        let heartCount = parseInt(document.getElementById("heart-count").innerText);
        heartCount = heartCount + 1;
        document.getElementById("heart-count").innerText = heartCount;
    })

    document.getElementById("heart-icon7").addEventListener('click', function(e){
        e.preventDefault();
        let heartCount = parseInt(document.getElementById("heart-count").innerText);
        heartCount = heartCount + 1;
        document.getElementById("heart-count").innerText = heartCount;
    })

    document.getElementById("heart-icon8").addEventListener('click', function(e){
        e.preventDefault();
        let heartCount = parseInt(document.getElementById("heart-count").innerText);
        heartCount = heartCount + 1;
        document.getElementById("heart-count").innerText = heartCount;
    })

    document.getElementById("heart-icon9").addEventListener('click', function(e){
        e.preventDefault();
        let heartCount = parseInt(document.getElementById("heart-count").innerText);
        heartCount = heartCount + 1;
        document.getElementById("heart-count").innerText = heartCount;
    })

    // each call reduce coin
        document.getElementById("call-btn1").addEventListener('click', function(e){
        e.preventDefault();
        let afterCallCoin = parseInt(document.getElementById('after-call-coin').innerText);
        alert('National Emergency\n999');
        if(afterCallCoin <= 20){
            alert('Sorry!!\nYou do not have enough coing');
            return;
        }
        afterCallCoin = afterCallCoin - 20;
        document.getElementById('after-call-coin').innerText = afterCallCoin;
        document.getElementById("history-1").style.display="block";
    })


        document.getElementById("call-btn2").addEventListener('click', function(e){
        e.preventDefault();
        let afterCallCoin = parseInt(document.getElementById('after-call-coin').innerText);
        alert('Police Helpline\n999');
        if(afterCallCoin <= 20){
            alert('Sorry!!\nYou do not have enough coin');
            return;
        }
        afterCallCoin = afterCallCoin - 20;
        document.getElementById('after-call-coin').innerText = afterCallCoin;
        document.getElementById("history-2").style.display="block";
    })


        document.getElementById("call-btn3").addEventListener('click', function(e){
        e.preventDefault();
        let afterCallCoin = parseInt(document.getElementById('after-call-coin').innerText);
        alert('Fire Service\n999');
        if(afterCallCoin <= 20){
            alert('Sorry!!\nYou do not have enough coin');
            return;
        }
        afterCallCoin = afterCallCoin - 20;
        document.getElementById('after-call-coin').innerText = afterCallCoin;
        document.getElementById("history-3").style.display="block";
    })


        document.getElementById("call-btn4").addEventListener('click', function(e){
        e.preventDefault();
        let afterCallCoin = parseInt(document.getElementById('after-call-coin').innerText);
        alert('Ambulance Service\n1994-999999');
        if(afterCallCoin <= 20){
            alert('Sorry!!\nYou do not have enough coin');
            return;
        }
        afterCallCoin = afterCallCoin - 20;
        document.getElementById('after-call-coin').innerText = afterCallCoin;
        document.getElementById("history-4").style.display="block";
    })


        document.getElementById("call-btn5").addEventListener('click', function(e){
        e.preventDefault();
        let afterCallCoin = parseInt(document.getElementById('after-call-coin').innerText);
        alert('Women & Child Helpline\n109');
        if(afterCallCoin <= 20){
            alert('Sorry!!\nYou do not have enough coin');
            return;
        }
        afterCallCoin = afterCallCoin - 20;
        document.getElementById('after-call-coin').innerText = afterCallCoin;
        document.getElementById("history-5").style.display="block";
    })


        document.getElementById("call-btn6").addEventListener('click', function(e){
        e.preventDefault();
        let afterCallCoin = parseInt(document.getElementById('after-call-coin').innerText);
        alert('Anti-Corruption Helpline\n106');
        if(afterCallCoin <= 20){
            alert('Sorry!!\nYou do not have enough coin');
            return;
        }
        afterCallCoin = afterCallCoin - 20;
        document.getElementById('after-call-coin').innerText = afterCallCoin;
        document.getElementById("history-6").style.display="block";
    })


        document.getElementById("call-btn7").addEventListener('click', function(e){
        e.preventDefault();
        let afterCallCoin = parseInt(document.getElementById('after-call-coin').innerText);
        alert('Electricity Helpline\n16216');
        if(afterCallCoin <= 20){
            alert('Sorry!!\nYou do not have enough coin');
            return;
        }
        afterCallCoin = afterCallCoin - 20;
        document.getElementById('after-call-coin').innerText = afterCallCoin;
        document.getElementById("history-7").style.display="block";
    })


        document.getElementById("call-btn8").addEventListener('click', function(e){
        e.preventDefault();
        let afterCallCoin = parseInt(document.getElementById('after-call-coin').innerText);
        alert('Brac Helpline\n16445');
        if(afterCallCoin <= 20){
            alert('Sorry!!\nYou do not have enough coin');
            return;
        }
        afterCallCoin = afterCallCoin - 20;
        document.getElementById('after-call-coin').innerText = afterCallCoin;
        document.getElementById("history-8").style.display="block";
    })



        document.getElementById("call-btn9").addEventListener('click', function(e){
        e.preventDefault();
        let afterCallCoin = parseInt(document.getElementById('after-call-coin').innerText);
        alert('Bangladesh Railway Helpline\n163');
        if(afterCallCoin <= 20){
            alert('Sorry!!\nYou do not have enough coin');
            return;
        }
        afterCallCoin = afterCallCoin - 20;
        document.getElementById('after-call-coin').innerText = afterCallCoin;
        document.getElementById("history-9").style.display="block";
    })

    // clear button erase all call history
    document.getElementById("clear-btn").addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('history-1').style.display="none";
        document.getElementById('history-2').style.display="none";
        document.getElementById('history-3').style.display="none";
        document.getElementById('history-4').style.display="none";
        document.getElementById('history-5').style.display="none";
        document.getElementById('history-6').style.display="none";
        document.getElementById('history-7').style.display="none";
        document.getElementById('history-8').style.display="none";
        document.getElementById('history-9').style.display="none";
        
    })

    // copy-btn click- show alert, increase copy count
    document.getElementById('copy-btn1').addEventListener('click', function(e){
        e.preventDefault();
    let copyBtn = parseInt(document.getElementById('copy-btn').innerText);
    copyBtn = copyBtn + 1;
    document.getElementById('copy-btn').innerText = copyBtn + ' Copy';
    })

    document.getElementById('copy-btn2').addEventListener('click', function(e){
        e.preventDefault();
    let copyBtn = parseInt(document.getElementById('copy-btn').innerText);
    copyBtn = copyBtn + 1;
    document.getElementById('copy-btn').innerText = copyBtn + ' Copy';
    })


        document.getElementById('copy-btn3').addEventListener('click', function(e){
        e.preventDefault();
    let copyBtn = parseInt(document.getElementById('copy-btn').innerText);
    copyBtn = copyBtn + 1;
    document.getElementById('copy-btn').innerText = copyBtn + ' Copy';
    })

    document.getElementById('copy-btn4').addEventListener('click', function(e){
        e.preventDefault();
    let copyBtn = parseInt(document.getElementById('copy-btn').innerText);
    copyBtn = copyBtn + 1;
    document.getElementById('copy-btn').innerText = copyBtn + ' Copy';
    })


        document.getElementById('copy-btn5').addEventListener('click', function(e){
        e.preventDefault();
    let copyBtn = parseInt(document.getElementById('copy-btn').innerText);
    copyBtn = copyBtn + 1;
    document.getElementById('copy-btn').innerText = copyBtn + ' Copy';
    })

    document.getElementById('copy-btn6').addEventListener('click', function(e){
        e.preventDefault();
    let copyBtn = parseInt(document.getElementById('copy-btn').innerText);
    copyBtn = copyBtn + 1;
    document.getElementById('copy-btn').innerText = copyBtn + ' Copy';
    })


        document.getElementById('copy-btn7').addEventListener('click', function(e){
        e.preventDefault();
    let copyBtn = parseInt(document.getElementById('copy-btn').innerText);
    copyBtn = copyBtn + 1;
    document.getElementById('copy-btn').innerText = copyBtn + ' Copy';
    })

    document.getElementById('copy-btn8').addEventListener('click', function(e){
        e.preventDefault();
    let copyBtn = parseInt(document.getElementById('copy-btn').innerText);
    copyBtn = copyBtn + 1;
    document.getElementById('copy-btn').innerText = copyBtn + ' Copy';
    })


    document.getElementById('copy-btn9').addEventListener('click', function(e){
        e.preventDefault();
    let copyBtn = parseInt(document.getElementById('copy-btn').innerText);
    copyBtn = copyBtn + 1;
    document.getElementById('copy-btn').innerText = copyBtn + ' Copy';
    })

    