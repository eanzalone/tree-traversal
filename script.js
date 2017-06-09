$(document).ready(function() {
    console.log("ready!");

    var jsonObject,
        topFolder,
        firstFolder,
        secondFolder,
        thirdFolder,
        fourthFile;

    $.getJSON('data.json', function(data) {
    console.log('json grabbed');
    })
    .done(function(data) {
        jsonObject = data.children;

        // RENDER NAMES OF ALL DATA
        for (i = 0; i < jsonObject.length; i++) {
            topFolder = jsonObject[i].name;
            console.log(jsonObject[i].private);
            if (jsonObject[i].private === undefined) {
                $('#fileViewer').append('<div class="topFolder"><img src="icon-sprite.png">' + topFolder + '<br>');
            } else {
                $('#fileViewer').append('<div class="topFolderPrivate"><img src="icon-sprite.png">' + topFolder + '<br>');
            }
            firstFolder = jsonObject[i].children;
            if (firstFolder) {
                for (j = 0; j < firstFolder.length; j++) {
                    if (firstFolder[j].type === 'folder') {
                        $('#fileViewer').append('<div class="firstFolder"><img src="icon-sprite.png">' + firstFolder[j].name + '<br>');
                    } else {
                        $('#fileViewer').append('<div class="firstFile"><img src="icon-sprite.png">' + firstFolder[j].name + '<br>');
                    }
                    secondFolder = firstFolder[j].children;
                    
                    
                    
                    if (secondFolder) {
                        for (k = 0; k < secondFolder.length; k++) {
                            if (secondFolder[k].type === 'folder') {
                                $('#fileViewer').append('<div class="secondFolder"><img src="icon-sprite.png">' + secondFolder[k].name + '<br>');
                            } else {
                                $('#fileViewer').append('<div class="secondFile"><img src="icon-sprite.png">' + secondFolder[k].name + '<br>');
                            }
                            thirdFolder = secondFolder[k].children;
                            if (thirdFolder) {
                                for (m = 0; m < thirdFolder.length; m++) {
                                    if (thirdFolder[m].type === 'folder') {
                                        $('#fileViewer').append('<div class="thirdFolder"><img src="icon-sprite.png">' + thirdFolder[m].name + '<br>');
                                    } else {
                                        $('#fileViewer').append('<div class="thirdFile"><img src="icon-sprite.png">' + thirdFolder[m].name + '<br>');
                                    }
                                    fourthFile = thirdFolder[m].children;
                                    if (fourthFile) {
                                        for (n = 0; n < fourthFile.length; n++) {
                                            $('#fileViewer').append('<div class="fourthFile"><img src="icon-sprite.png">' + fourthFile[n].name + '<br>');
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }





            // for (j = 0; j < jsonObject[i].length; j++) {
            //     console.log('childtest loop');
                // console.log(topFolder,': ',jsonObject[j].children[j].children)
            // }

            // $('.topFolder').append('<div class="childFile">' + jsonObject[i].children + '<br>');
        }

        // render jsonObject
        // $('#fileViewer').append('OUTSIDE FOR LOOP');





    })
    .fail(function(data) {
        console.log("Error!");
    });

}); // close document.ready