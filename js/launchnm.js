$(document).ready(function() {
    $('form:not(form#search)').each(function() {
        $(this).validate({
            submitHandler: function(form) {
                var clikedForm = $(form);
                var fID = "#" + clikedForm.attr('id')
                if(fID=="#subscribe"){
                    var jData = {"email":jQuery("#fdata").val(),"subsType":101}
                    document.getElementById("subsbut").disabled = true;
                }else if(fID=="#deskhr1") {
                    var jData = {"email": jQuery("#moData1").val(), "subsType": 102}
                    document.getElementById("regbut1").disabled = true;
                }else if(fID=="#mobonly1") {
                    var jData = {"email": jQuery("#moData2").val(), "subsType": 102}
                    document.getElementById("regbut2").disabled = true;
                }else if(fID=="#deskhr2"){
                    var jData = {"email":jQuery("#devdata1").val(),"subsType":103}
                    document.getElementById("devbut1").disabled = true;
                }else if(fID=="#mobonly2"){
                    var jData = {"email":jQuery("#devdata2").val(),"subsType":103}
                    document.getElementById("devbut2").disabled = true;
                }
                $.ajax(console.log(jQuery("#devdata").val(),jData), {
                    url: "http://159.122.169.245:5000/api/v1/subscription?apiKey=sLLf33UNNgBRBqmOsXBVgBtubT1ynREKdHWH7OYiOxmo6zFkvMbEVlLmbaMwI6wR",
                    type: "POST",
                    dataType: "JSON",
                    contentType: "application/json",
                    data: JSON.stringify(jData),
                    success: function (response) {
                        if(response["result"]=="OK"){
console.log(fID);

                            $('#fdatac-error').text(response["msg"]);


                        }


                        else{
                             if (fID == '#subscribe') {
                                $('#fdatac-error').text(response["msg"]);
                                document.getElementById("subsbut").disabled = false;


                            }

                        }
                    }
                });

            },
            rules: {
                field: {
                    required: true,
                    email: true
                }
            }
        });
    });
});