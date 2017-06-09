$(document).ready(function() {
    console.log("ready!");

    var jsonObject,
        topFile,
        firstChild,
        secondChild,
        thirdChild;

    $.getJSON('data.json', function(data) {
    console.log('json grabbed');
    })
    .done(function(data) {
        jsonObject = data.children;
        // console.log(jsonObject);


        // console.log(jsonObject.length);

        for (i = 0; i < jsonObject.length; i++) {
            topFile = jsonObject[i].name;
            firstChild = jsonObject[i].children;

            $('#fileViewer').append('<div class="topFile">' + topFile + '<br>');

            if (firstChild) {
                for (j = 0; j < firstChild.length; j++) {
                    // console.log(topFile, firstChild[j].name);
                    $('#fileViewer').append('<div class="firstChild">' + firstChild[j].name + '<br>');
                    secondChild = firstChild[j].children;
                    if (secondChild) {
                        for (k = 0; k < secondChild.length; k++) {
                            // console.log(secondChild[k]);
                            // console.log(firstChild, secondChild[k].name);
                            $('#fileViewer').append('<div class="secondChild">' + secondChild[k].name + '<br>');
                            thirdChild = secondChild[k].children;
                            if (thirdChild) {
                                for (m = 0; m < thirdChild.length; m++) {
                                    console.log('thirdChild Exists');
                                    // $('#fileViewer').append('<div class="thirdChild">' + thirdChild[m].name + '<br>');
                                }
                            } else {
                                console.log(secondChild, 'no children');
                            }
                        }
                    } else {
                        // console.log(firstChild, 'no children');
                    }
                }
            } else {
                // console.log(topFile, 'no children');
            }





            // for (j = 0; j < jsonObject[i].length; j++) {
            //     console.log('childtest loop');
                // console.log(topFile,': ',jsonObject[j].children[j].children)
            // }

            // $('.topFile').append('<div class="childFile">' + jsonObject[i].children + '<br>');
        }


        // render jsonObject
        // $('#fileViewer').append('OUTSIDE FOR LOOP');





    })
    .fail(function(data) {
        console.log("Error!");
    });

}); // close document.ready