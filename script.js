var numButtons = "";
    var inputToggle,sel;
    //add numbers 0-9

        numButtons += "<div class='row' style='margin-left:0px;'><div class='col-xs-4' style='text-align: center;'><button class='numKey' value='1' onclick='addValueToField(this.value)'  />" + 1 + "</button></div>"
    numButtons += "<div class='col-xs-4' style='text-align: center;'><button class='numKey' value='2' onclick='addValueToField(this.value)'  />" + 2 + "</button></div>"
    numButtons += "<div class='col-xs-4' style='text-align: center;'><button class='numKey' value='3' onclick='addValueToField(this.value)'  />" + 3 + "</button></div>"

    numButtons += "<div class='col-xs-4' style='text-align: center;'><button class='numKey' value='4' onclick='addValueToField(this.value)'  />" + 4 + "</button></div>"
    numButtons += "<div class='col-xs-4' style='text-align: center;'><button class='numKey' value='5' onclick='addValueToField(this.value)'  />" + 5 + "</button></div>"
    numButtons += "<div class='col-xs-4' style='text-align: center;'><button class='numKey' value='6' onclick='addValueToField(this.value)' />" + 6 + "</button></div>"

    numButtons += "<div class='col-xs-4' style='text-align: center;'><button class='numKey' value='7' onclick='addValueToField(this.value)'  />" + 7 + "</button></div>"
    numButtons += "<div class='col-xs-4' style='text-align: center;'><button class='numKey' value='8' onclick='addValueToField(this.value)'  />" + 8 + "</button></div>"
    numButtons += "<div class='col-xs-4' style='text-align: center;'><button class='numKey' value='9' onclick='addValueToField(this.value)'  />" + 9 + "</button></div>"
    numButtons += "<div class='col-xs-4' style='text-align: center;'><button class='numKey' value='abc' onclick='addValueToField(this.value)'  /> abc </button></div>"

    numButtons += "<div class='col-xs-4' style='text-align: center;'><button class='numKey' value='0' onclick='addValueToField(this.value)' >0</button></div><div class='col-xs-4' style='text-align: center;'> <button class='numKey' value='<' onclick='addValueToField(this.value)' ><</button></div> "
    numButtons += "<div class='col-xs-6 col-xs-offset-3' style='text-align: center;'><button class='numKey' value='GO' onclick='addValueToField(this.value)'  /> GO </button></div></div>"
    document.getElementById('switch').innerHTML = numButtons;
    function hideKeyboard(element) {
        $(element).attr('readonly', 'readonly'); // Force keyboard to hide on input field.

        setTimeout(function() {
            $(element).blur();  //actually close the keyboard
            document.activeElement.blur();
            $('input').blur(); // trigger blur event from all inputs.
            // Remove readonly attribute after keyboard is hidden.
            $(element).removeAttr('readonly');
           // $(element).focus(); //bring cursor back to the input field
        }, 100);

    }
    function addValueToField(myValue){
        console.log(inputToggle);
        //to bring up alphabet keyboard
        if(myValue=='abc')
        {
            document.getElementById(inputToggle).focus();
           // document.getElementById("trailerNumber").onfocus=null;
            document.getElementById("switch").style.display = "none";
            $(document.getElementById(inputToggle)).removeAttr('readonly');

        }
        else if(myValue=='GO')
        {
            $('.gateIn').click();
        }
        else if (myValue=='<') {
            hideKeyboard(document.getElementById(inputToggle));

                if (document.selection) {
                    //For browsers like Internet Explorer

                    document.getElementById(inputToggle).focus();
                    sel = document.selection.createRange();
                    sel.text = myValue;
                   // document.getElementById(inputToggle).focus();
                }
                else if (document.getElementById(inputToggle).selectionStart || document.getElementById(inputToggle).selectionStart == '0') {
                    //For browsers like Firefox and Webkit based
                    var startPos = document.getElementById(inputToggle).selectionStart;
                    var endPos = document.getElementById(inputToggle).selectionEnd;
                    var scrollTop = document.getElementById(inputToggle).scrollTop;
                    document.getElementById(inputToggle).value = document.getElementById(inputToggle).value.substring(0, startPos - 1) + document.getElementById(inputToggle).value.substring(endPos, document.getElementById(inputToggle).value.length);
                    document.getElementById(inputToggle).focus();
                    document.getElementById(inputToggle).selectionStart = startPos - myValue.length;
                    document.getElementById(inputToggle).selectionEnd = startPos - myValue.length;
                    document.getElementById(inputToggle).scrollTop = scrollTop;
                } else {
                    //  document.getElementById(inputToggle).value += myValue;
                    document.getElementById(inputToggle).focus();
                }
                document.getElementById("switch").style.display = "flex";


        }
        else {
            hideKeyboard(document.getElementById(inputToggle));

        if (document.selection) {
            //For browsers like Internet Explorer
            document.getElementById(inputToggle).focus();
            sel = document.selection.createRange();
            sel.text = myValue;
            document.getElementById(inputToggle).focus();
        }
        else if (document.getElementById(inputToggle).selectionStart || document.getElementById(inputToggle).selectionStart == '0') {
            //For browsers like Firefox and Webkit based
            var startPos = document.getElementById(inputToggle).selectionStart;
            var endPos = document.getElementById(inputToggle).selectionEnd;
            var scrollTop = document.getElementById(inputToggle).scrollTop;
            document.getElementById(inputToggle).value = document.getElementById(inputToggle).value.substring(0, startPos)+myValue+document.getElementById(inputToggle).value.substring(endPos,document.getElementById(inputToggle).value.length);
            document.getElementById(inputToggle).focus();
            document.getElementById(inputToggle).selectionStart = startPos + myValue.length;
            document.getElementById(inputToggle).selectionEnd = startPos + myValue.length;
            document.getElementById(inputToggle).scrollTop = scrollTop;
        } else {
            document.getElementById(inputToggle).value += myValue;
            document.getElementById(inputToggle).focus();
        }



        // document.getElementById(inputToggle).focus();
        document.getElementById("switch").style.display = "flex";
          }
        }


        document.addEventListener('mousedown', function(e) {
            e = e || window.event;
            var target = e.target || e.srcElement;

            console.log(e);
            if(target.id == 'trailerNumber' ){

                hideKeyboard(document.getElementById("trailerNumber"));

                //document.getElementById("trailerNumber").blur();
                setTimeout(function() {
                    document.getElementById("trailerNumber").focus();
                    inputToggle = 'trailerNumber';

                    document.getElementById("switch").style.display = "flex";
                },400);

            }
            else if(target.id == 'inboundNumber' ){
                document.getElementById("switch").style.display = "flex";
                document.getElementById("inboundNumber").focus();

                inputToggle='inboundNumber';
            }

            else if(target.id == 'trailerIdLabel' ){
                document.getElementById("switch").style.display = "flex";
                document.getElementById("trailerIdLabel").focus();
                inputToggle='trailerIdLabel';
            }

            else if(target.id == 'inboundSeal' ){
                document.getElementById("switch").style.display = "flex";
                document.getElementById("inboundSeal").focus();
                inputToggle='inboundSeal';
            }
            else if(target.id == 'tractor' ){
                document.getElementById("switch").style.display = "flex";
                document.getElementById("tractor").focus();
                inputToggle='tractor';
            }
            else if(target.id == 'newSeal' ){
                document.getElementById("switch").style.display = "flex";
                document.getElementById("newSeal").focus();
                inputToggle='newSeal';
            }
            else if(( target.id == "switch" || target.className == "numKey") && target.value != 'abc'){

                document.getElementById("switch").style.display = "flex";
                console.log('clicked switch');
            }
            else{
                document.getElementById("switch").style.display = "none";
                //document.getElementById("trailerNumber").blur();
            }
            console.log((document.getElementById("trailerNumber")).value.length);


    }, false);
