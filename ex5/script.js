function SaveStorage() {
   location.reload();

}

window.onload = function () {
   if ('localStorage' in window || 'sessionStorage' in window) {

      const valueInputName = document.getElementById('valueName');
      const valueInputFun = document.getElementById('valueFun');
      const valueInputCampus = document.getElementById('valueCampus');
      const valueInputAluno = document.getElementById('valueAluno');
      const valueInputProf = document.getElementById('valueProf');
      const valueInputCurso = document.getElementById('valueCurso');
      const valueInputMec = document.getElementById('valueMEC');

      let reloadInputValue = function () {
         console.log("Local Storage: ", localStorage.getItem('Name'));
         valueInputName.value = localStorage.getItem('Name') || '';
         console.log("Local Storage: ", localStorage.getItem('Fun'));
         valueInputFun.value = localStorage.getItem('Fun') || '';
         console.log("Local Storage: ", localStorage.getItem('Campus'));
         valueInputCampus.value = localStorage.getItem('Campus') || '';
         console.log("Local Storage: ", localStorage.getItem('Aluno'));
         valueInputAluno.value = localStorage.getItem('Aluno') || '';
         console.log("Local Storage: ", localStorage.getItem('Prof'));
         valueInputProf.value = localStorage.getItem('Prof') || '';
         console.log("Local Storage: ", localStorage.getItem('Curso'));
         valueInputCurso.value = localStorage.getItem('Curso') || '';
         console.log("Local Storage: ", localStorage.getItem('Mec'));
         valueInputMec.value = localStorage.getItem('Mec') || '';
      }

      reloadInputValue();
      valueInputName.addEventListener('keyup', function () {
         localStorage.setItem('Name', this.value);
      });
      valueInputFun.addEventListener('keyup', function () {
         localStorage.setItem('Fun', this.value);
      });
      valueInputCampus.addEventListener('keyup', function () {
         localStorage.setItem('Campus', this.value);
      });
      valueInputAluno.addEventListener('keyup', function () {
         localStorage.setItem('Aluno', this.value);
      });
      valueInputProf.addEventListener('keyup', function () {
         localStorage.setItem('Prof', this.value);
      });
      valueInputCurso.addEventListener('keyup', function () {
         localStorage.setItem('Curso', this.value);
      });
      valueInputMec.addEventListener('keyup', function () {
         localStorage.setItem('Mec', this.value);
      });

      localStorage.setItem("Name", valueInputName.value);
      localStorage.setItem("Fun", valueInputFun.value);
      localStorage.setItem("Campus", valueInputCampus.value);
      localStorage.setItem("Aluno", valueInputAluno.value);
      localStorage.setItem("Prof", valueInputProf.value);
      localStorage.setItem("Curso", valueInputCurso.value);
      localStorage.setItem("Mec", valueInputMec.value);

      const JsonStorage = {
         name: valueInputName.value,
         Fundação: valueInputFun.value,
         Campus: valueInputCampus.value,
         Aluno: valueInputAluno.value,
         Professor: valueInputProf.value,
         Curso: valueInputCurso.value,
         MEC: valueInputMec.value
      };
      const obj = JSON.stringify(JsonStorage);
      console.log(obj);

   }
}