document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("languageSwitcher");

    if (!button) return;


    button.addEventListener("click", function () {


        const currentFile = window.location.pathname.split("/").pop();


        const isArabic = document.documentElement.lang === "ar";


        // Arabic → English
        if (isArabic) {


            window.location.href = "../" + currentFile;


        } 
        
        // English → Arabic
        else {


            window.location.href = "ar/" + currentFile;


        }


    });


});