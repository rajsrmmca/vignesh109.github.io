// Add your javascript here
$(function() {




  $(".changeKeyType").on('click', function(e) {
    $("#hiddenInput").val('');
    var button = $(this);
    idPrefix = (this.id).split('-')[0];
    var inputsuffix = button.text().trim();
    var toggleText = (inputsuffix == '123' ? 'abc' : '123');
    var toggleType = (inputsuffix == '123' ? 'number' : 'text');
     $("#hiddenInput").attr('type', 'number');
    $("#hiddenInput").attr('type', toggleType);
    originalVal = $("#" + idPrefix).val();
    
    $(this).text(toggleText);
    oldLength = 0;
    if ($("#hiddenInput").val() !== undefined) {
      oldLength = $("#hiddenInput").val().length;
    }
    $("#" + idPrefix).addClass("activeInput");
    $("#" + idPrefix).on('focus', function() {
      button.text('abc');
      $("#hiddenInput").attr('type', 'number');
    });
    maxLength = $("#" + idPrefix).attr("maxlength");
    $("#hiddenInput").focus();
  });
  $(".changeKeyInput").on('click focus', function() {
    $("#hiddenInput").focus().val('');
    $("#hiddenInput").attr('type', 'number');
    idPrefix = (this.id).split('-')[0];
    originalVal = $(this).val();
   
    oldLength = 0;
    if ($("#hiddenInput").val() !== undefined) {
      oldLength = $("#hiddenInput").val().length;
    }
    maxLength = $(this).attr("maxlength");
  });

  $("#hiddenInput").off().on('keyup', function(event) {
    alert(" event.which: " + event.which + " ,charCode: "+event.charCode + " event.keycode: "+event.keyCode);
  //  alert("c: " +event.charCode);
    // console.log(event);
    
    var charCode = (typeof event.which == "number") ? event.charCode : event.keyCode;
    
    // Allow non-printable keys
    if (!charCode || charCode == 8 /* Backspace */ ) {
      //alert('backspace charCode:' + charCode);
    }
    var typedChar = String.fromCharCode(charCode);
    // Allow numeric characters
    if (/\d/.test(typedChar)) {
      //alert('typedChar' + typedChar);
    }

    var actualLength = $("#" + idPrefix).val().length;
    var newVal = $(this).val();
    var newLength = newVal.length;
    if (actualLength < maxLength && oldLength < newLength) {
      originalVal += newVal[newVal.length - 1];
      $("#" + idPrefix).val(originalVal);
      oldLength = newVal.length;
    } 
    if (charCode == 8 || event.which == 8) {
      //
      //alert('found backspace' + " And pre Val :" + originalVal);
      originalVal = originalVal.slice(0, originalVal.length - 1);
      $("#" + idPrefix).val(originalVal);
      // alert('after deleting :'+originalVal);
      oldLength = newVal.length;
    }
  /*  if(event.which == 229) {
      if(actualLength-newLength ==1){
      originalVal = originalVal.slice(0, originalVal.length - 1);
      $("#" + idPrefix).val(originalVal);
      // alert('after deleting :'+originalVal);
      oldLength = newVal.length;
      }
      }  */
    charCode = $(this).val().charCodeAt($(this).val().length-1);
     // alert(charCode);
    
    //alert('current val: '+$("#" + idPrefix).val());
  });




});
