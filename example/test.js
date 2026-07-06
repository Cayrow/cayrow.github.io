function test(){
    xmlhttp.open("GET", "info.php?q=" + str);
    xmlhttp.send();
    navigator.clipboard.writeText('Cay#4971');
    alert('Copied tag to clipboard!')
}