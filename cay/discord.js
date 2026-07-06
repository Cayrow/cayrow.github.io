function test() {
    navigator.clipboard.writeText('Cay#4971');
    document.getElementById('rcorners2').innerHTML = 'Coppied tag to clipboard';
    document.getElementById('rcorners2').style.color = "White";
    document.getElementById('rcorners2').style.fontSize ='3em'
    setTimeout(perv,5000);
    }

function perv(){
  document.getElementById('rcorners2').innerHTML = 'Discord';
  document.getElementById('rcorners2').style.color = "pink";
  document.getElementById('rcorners2').style.fontSize ='2em'
}