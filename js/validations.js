window.addEventListener('load', function(){

    var theForm = document.querySelector('#theFormulario');
    var theEmail = document.querySelector('#email');
    var theYearsOld = document.querySelector('#yearsOld');
    var theDescription = document.querySelector('#description');

    theForm.addEventListener('submit', function(event){
        event.preventDefault();

        if(theEmail.value == ''){
            event.preventDefault();
        }

        if(theYearsOld.value == ''){
            event.preventDefault();
        }

        if(description.value == ''){
            event.preventDefault();
        }

    });

});
