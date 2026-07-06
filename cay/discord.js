function test() {
    navigator.clipboard.writeText('Cay#4971');
    document.getElementById('rcorners2').innerHTML = 'Coppied tag to clipboard';
    document.getElementById('rcorners2').style.color = "White";
    document.getElementById('rcorners2').style.fontSize ='3em'
    setTimeout(test,5000);
    }
