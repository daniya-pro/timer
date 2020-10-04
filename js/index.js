$('.ui.dropdown')
  .dropdown();
var re =document.getElementById("reset")

  re.disabled= true


var minsec = (typeoftime = "min", sec, min) => {
  sec=parseInt(sec)
  min=parseInt(min)
  var ismin = typeoftime.trim() === "min"
  var WTSBW = document.getElementById("SecOMin")
        document.getElementById("disable").disabled = true
re.disabled= false
  var a = setInterval(() => {
re.addEventListener("click",function(){
  document.getElementById("disable").disabled = false

clearInterval(a)
WTSBW.innerText=0

})
    //WTSSBW =where time should be written
    //it is h1 element
    WTSBW.style.display = "block"
    document.getElementById("h12").style.display = "none"
    // if ((min === 0 && sec === 0) || (min === "0" && sec === "0")) {
    //   document.getElementById("disable").disabled = false


    //   clearInterval(a)
    // }


    if (ismin === true) {

      let condition= parseInt(min) < 1 && parseInt(sec) <1
      console.log(ismin)
      isNaN(sec) || sec === '' ? sec = 60 : console.log("sec ==>", sec);
   if (condition) {
          //alert("WORKED")
          clearInterval(a)
          document.getElementById("disable").disabled = false
          re.disabled= true
          WTSBW.innerHTML='0'

        }
      if (  !isNaN(parseInt(min))   && !isNaN(parseInt(sec)) ) {

        console.log(parseInt(sec), ":", sec)
        WTSBW.innerText = `${min}:${sec}  `
       //alert(`${min}:${sec} , Condition=> ${condition} `)

        if (sec < 1 &&min > 0  ) {
          sec = 60     
            min--

        }
  
     

        sec--;
      } else {
        document.getElementById("disable").disabled = false
        re.disabled= true

        document.getElementById('dn-o-db').style.display = "block"
        WTSBW.innerHTML = `0`
        clearInterval(a)
        setTimeout(function () {
          document.getElementById('dn-o-db').style.display = "none"



        }, 1000)
      }
    }

    else {

      if (sec === '' || isNaN(sec)) {
        document.getElementById("disable").disabled = false
        re.disabled= true

        document.getElementById('dn-o-db').style.display = "block"
        WTSBW.style.display = "none"
        document.getElementById("h12").style.display = "block"

        setTimeout(function () {
          document.getElementById('dn-o-db').style.display = "none"
        }, 1000)
        clearInterval(a)

      } else {
        document.getElementById("disable").disabled = true
re.disabled= false

        console.log(sec, WTSBW)
        WTSBW.innerHTML = `${sec}`
        sec--
        if (sec === 1) {
          setTimeout(function () {




            sec = 0
            clearInterval(a)
            document.getElementById("disable").disabled = false
            re.disabled= true

          }
            , 1000)
        }

        if (sec === 0) {
          document.getElementById("disable").disabled = false
          re.disabled= true

          clearInterval(a)

        }

      }
      WTSBW.innerText = `${sec}`

    }


  }, 1000)

}


document.getElementById("disable").addEventListener('click', function () {
  var ifmos = document.getElementById("IFMOS")

  //ifmos variable array
  var ia = ifmos.value.split(":")
  //el=element
  // (element is dropdown)
  var el = document.getElementById("drop");
  //VOE= value of element 
  //(value of drop down)
  var VOE = el.options[el.selectedIndex].value;
var aii =parseInt(ifmos.value)+1
    if(VOE === "min"?  ia[1]===0  &&  ia[0]===0   : aii===0){
      document.getElementById('dn-o-db').style.display = "block"
setTimeout(function(){

  document.getElementById('dn-o-db').style.display = "none"


},1000)
    }else{

  VOE === "min" ? minsec(VOE, ia[1], ia[0]) : minsec(VOE, aii);

    }
})


