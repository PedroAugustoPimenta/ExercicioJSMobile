window.onload = function () {
   if ('sessionStorage' in window) {

      const nameSet = document.getElementById('valueName');
      const colorSet = document.getElementById('valueCor');
      const ageSet = document.getElementById('valueAge');
      const citySet = document.getElementById('valueCity');

      let reloadInputValue = function () {
         console.log("Session Storage name: ", sessionStorage.getItem('Name'));
         console.log("Session Storage color: ", sessionStorage.getItem('Color'));
         console.log("Session Storage age: ", sessionStorage.getItem('Age'));
         console.log("Session Storage cage: ", sessionStorage.getItem('City'));
         nameSet.value = sessionStorage.getItem('Name') || '';
         colorSet.value = sessionStorage.getItem('Color') || '';
         ageSet.value = sessionStorage.getItem('Age') || '';
         citySet.value = sessionStorage.getItem('City') || '';
      }

      reloadInputValue();

      nameSet.addEventListener('keyup', function () {
         sessionStorage.setItem('Name', this.value);
      });
      colorSet.addEventListener('keyup', function () {
         sessionStorage.setItem('Color', this.value);
      });
      ageSet.addEventListener('keyup', function () {
         sessionStorage.setItem('Age', this.value);
      });
      citySet.addEventListener('keyup', function () {
         sessionStorage.setItem('City', this.value);
      });
   }

   bodyColor();
   nameH1();
   ageH2();
   citySpan();
}

function bodyColor() {
   let Body = document.querySelector("#bodyColor");
   let Cor = document.querySelector("#valueCor");
   let colorSelectcolor = Cor.value;
   Body.setAttribute("style", "background-color: #" + colorSelectcolor + ";");
}

function nameH1() {
   let nomeSet = document.querySelector("#nomeSet");
   let nameGet = document.querySelector("#valueName").value;
   nomeSet.innerText = nameGet;
}

function ageH2() {
   let ageSet = document.querySelector("#ageSet");
   let ageGet = document.querySelector("#valueAge").value;
   ageSet.innerText = ageGet;
}

function citySpan() {
   let citySet = document.querySelector("#citySet");
   let cityGet = document.querySelector("#valueCity").value;
   citySet.innerText = cityGet;
}