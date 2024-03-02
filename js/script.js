function myaccount() {
  location.replace("https://www.google.com");
}
function pswrdcnfm() {
  location.replace("https://www.google.com");
}
function register() {
  location.replace("https://www.google.com");
}
document.getElementById("textchange").onclick = function () {
  var textentered = "";
  textentered = document.getElementById("textinput").value;
  document.getElementById("textup").innerHTML = textentered;
};

document.getElementById("Confirm").onclick = function () {
  document.getElementById("text").innerHTML =
    document.getElementById("text").innerHTML + "wel";
};

/* test test 

  <button id="Confirm">Confirm</button>
  <p id="text">welcome</p>

  */

/* test test test test testttttttttt
            <div class="form-outline mb-4 ">
              <input type="email" id="form2Example1" class="form-control" />
              <label class="form-label" for="form2Example1">Name</label>
              <button id="Confirm">Confirm</button>
            </div> 
            
            
            */
