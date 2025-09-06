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
    alert('Bangladesh Emergency Helpline information Copied!')
    document.getElementById('copy-btn').innerText = copyBtn + ' Copy';
    // after click on the copy button the hotline number will be copied and you can paste it anywhere
    navigator.clipboard.writeText(document.getElementById("hotline1").innerText).then(() => {
      alert(`Hotline number "${document.getElementById("hotline1").innerText}" copied to clipboard!`);
    });
    })

    document.getElementById('copy-btn2').addEventListener('click', function(e){
        e.preventDefault();
    let copyBtn = parseInt(document.getElementById('copy-btn').innerText);
    copyBtn = copyBtn + 1;
     alert('Police Helpline information Copied!')
    document.getElementById('copy-btn').innerText = copyBtn + ' Copy';
        // after click on the copy button the hotline number will be copied and you can paste it anywhere
    navigator.clipboard.writeText(document.getElementById("hotline2").innerText).then(() => {
      alert(`Hotline number "${document.getElementById("hotline2").innerText}" copied to clipboard!`);
    });
    })


    document.getElementById('copy-btn3').addEventListener('click', function(e){
        e.preventDefault();
    let copyBtn = parseInt(document.getElementById('copy-btn').innerText);
    copyBtn = copyBtn + 1;
    alert('Fire Service Helpline information Copied!')
    document.getElementById('copy-btn').innerText = copyBtn + ' Copy';
        // after click on the copy button the hotline number will be copied and you can paste it anywhere
    navigator.clipboard.writeText(document.getElementById("hotline3").innerText).then(() => {
      alert(`Hotline number "${document.getElementById("hotline3").innerText}" copied to clipboard!`);
    });
    })

    document.getElementById('copy-btn4').addEventListener('click', function(e){
        e.preventDefault();
    let copyBtn = parseInt(document.getElementById('copy-btn').innerText);
    copyBtn = copyBtn + 1;
    alert('Ambulance Helpline information Copied!')
    document.getElementById('copy-btn').innerText = copyBtn + ' Copy';
        // after click on the copy button the hotline number will be copied and you can paste it anywhere
    navigator.clipboard.writeText(document.getElementById("hotline4").innerText).then(() => {
      alert(`Hotline number "${document.getElementById("hotline4").innerText}" copied to clipboard!`);
    });
    })


    document.getElementById('copy-btn5').addEventListener('click', function(e){
        e.preventDefault();
    let copyBtn = parseInt(document.getElementById('copy-btn').innerText);
    copyBtn = copyBtn + 1;
     alert('Women & Child Helpline information Copied!')
    document.getElementById('copy-btn').innerText = copyBtn + ' Copy';
        // after click on the copy button the hotline number will be copied and you can paste it anywhere
    navigator.clipboard.writeText(document.getElementById("hotline5").innerText).then(() => {
      alert(`Hotline number "${document.getElementById("hotline5").innerText}" copied to clipboard!`);
    });
    })

    document.getElementById('copy-btn6').addEventListener('click', function(e){
        e.preventDefault();
    let copyBtn = parseInt(document.getElementById('copy-btn').innerText);
    copyBtn = copyBtn + 1;
    alert('Anti-Corruption Helpline information Copied!')
    document.getElementById('copy-btn').innerText = copyBtn + ' Copy';
        // after click on the copy button the hotline number will be copied and you can paste it anywhere
    navigator.clipboard.writeText(document.getElementById("hotline6").innerText).then(() => {
      alert(`Hotline number "${document.getElementById("hotline6").innerText}" copied to clipboard!`);
    });
    })


    document.getElementById('copy-btn7').addEventListener('click', function(e){
        e.preventDefault();
    let copyBtn = parseInt(document.getElementById('copy-btn').innerText);
    copyBtn = copyBtn + 1;
    alert('Electricity Helpline information Copied!')
    document.getElementById('copy-btn').innerText = copyBtn + ' Copy';
        // after click on the copy button the hotline number will be copied and you can paste it anywhere
    navigator.clipboard.writeText(document.getElementById("hotline7").innerText).then(() => {
      alert(`Hotline number "${document.getElementById("hotline7").innerText}" copied to clipboard!`);
    });
    })

    document.getElementById('copy-btn8').addEventListener('click', function(e){
        e.preventDefault();
    let copyBtn = parseInt(document.getElementById('copy-btn').innerText);
    copyBtn = copyBtn + 1;
    alert('Brac Helpline information Copied!')
    document.getElementById('copy-btn').innerText = copyBtn + ' Copy';
        // after click on the copy button the hotline number will be copied and you can paste it anywhere
    navigator.clipboard.writeText(document.getElementById("hotline8").innerText).then(() => {
      alert(`Hotline number "${document.getElementById("hotline8").innerText}" copied to clipboard!`);
    });
    })


    document.getElementById('copy-btn9').addEventListener('click', function(e){
        e.preventDefault();
    let copyBtn = parseInt(document.getElementById('copy-btn').innerText);
    copyBtn = copyBtn + 1;
    alert('Bangladesh Railway Helpline information Copied!')
    document.getElementById('copy-btn').innerText = copyBtn + ' Copy';
        // after click on the copy button the hotline number will be copied and you can paste it anywhere
    navigator.clipboard.writeText(document.getElementById("hotline9").innerText).then(() => {
      alert(`Hotline number "${document.getElementById("hotline9").innerText}" copied to clipboard!`);
    });
    })

// call detail- current time of a call ---console.log(new Date().toLocaleTimeString());
document.getElementById("call-time1").innerText = new Date().toLocaleTimeString();
document.getElementById("call-time2").innerText = new Date().toLocaleTimeString();
document.getElementById("call-time3").innerText = new Date().toLocaleTimeString();
document.getElementById("call-time4").innerText = new Date().toLocaleTimeString();
document.getElementById("call-time5").innerText = new Date().toLocaleTimeString();
document.getElementById("call-time6").innerText = new Date().toLocaleTimeString();
document.getElementById("call-time7").innerText = new Date().toLocaleTimeString();
document.getElementById("call-time8").innerText = new Date().toLocaleTimeString();
document.getElementById("call-time9").innerText = new Date().toLocaleTimeString();

