console.log("ok");
function employeeEdit(id){
    var formData = new FormData();
    formData.append( 'formData', input.files[0] );

    $.ajax({
        url: 'localhost:8000/panel/employees/update' + id,
        type: 'post',
        data: formData
    })
        .success(function(data) {
            if (data.success) {
                // Lazy: refresh window
                window.location.reload();
            }
        })
        .error(function() {
            // Show an error or something fancy
        });
}
