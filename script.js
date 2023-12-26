const forms= document.querySelector(.forms), 
      pwShowHide = document.querySelectorAll(.eye-icon),
      links = document.querySelectorAll(.link);

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password")

        pwFields.forEach(password => {
            if(password.type === ""){
              password.type = "text";
              eyeIcon.classList.replace("bx-hide")
            }
        })
      
    })
})
