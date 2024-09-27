$(document).ready(function() {
    $('#task-form').on('submit', function(event) {
        event.preventDefault();

        const taskInput = $('#task-input').val(); 
        $('#task-list').append(`<li>${taskInput}</li>`); 

        $('#task-input').val(''); 
    });

    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed'); 
    });
});
