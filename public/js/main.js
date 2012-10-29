$(document).ready(function() {
  $('#files').change(handleFileSelect);
  //This is so that filebutton works well
  $('input[id=files]').change(function() {
     $('#mibfile').val($(this).val());
  }); 
});

function handleFileSelect(evt) {
    var files = evt.target.files, // FileList object
    file = files[0],
    read =  new FileReader();

    read.onload = (function(theFile) {
        return function(e) {
            var mib = mibtojson.parse(e.target.result);
            $("#list").text(mib);
            console.log(e.target.result);
        };
    }(file));
    read.readAsText(file);
}

function toGetAPI(){
    var hostquery = $("#host").val(),
    communityquery = $("#community").val(),
    //oidquery = '.1.3.6.1.2.1.1.3.0';
    oidquery = $("#oid").val();

    //TODO use jquery to find all selected oids
    //TODO add support for multiple oids

    $.get('/api/',{host:hostquery,community:communityquery,oid:oidquery}, function(data){
        $("#oiddetails").text(data);
    });
}