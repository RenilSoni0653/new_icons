const container = document.querySelector(".container"),
      pwShowHide = document.querySelector(".container"),
      pwFields=document.querySelectorAll(".password");

      pwShowHide.forEach(eyeIcon=>){
        eyeIcon.addeventListener("click",()=>{
            pwFields.forEach(pwFields=>{
                if(pwFields.type==="password"){
                    pwFields.type = "text";

                    pwShowHide.forEach(icon=>{
                    pwField.type    

                    })
                }else{
                    pwFields.type = "password"
                }
            })
        })
      }