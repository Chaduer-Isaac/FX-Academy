const scriptURL = 'https://script.google.com/macros/s/AKfycbz3tatKCaesVMFn75RDJ700bkEQHaiG2r_89ujC6jLceWt1c5RbhS2kXikxeof247Va/exec'
  const form = document.forms['submit-to-google-sheet']
  const message = document.getElementById("msg");
  const loader = document.getElementById("loader");

  form.addEventListener('submit', e => {
    e.preventDefault()
    loader.style.display = "block";
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        loader.style.display = "none";
      message.innerHTML = "Enrolled Successfully!"
      setTimeout(function(){
        message.innerHTML = "";
      },5000)
      form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })