$(document).ready(function() {

    var jsonObject,
        topFolder,
        firstFolder,
        secondFolder,
        thirdFolder,
        fourthFile,
        topFolder_id,
        firstFolder_id,
        secondFolder_id,
        thirdFolder_id,
        fourthFile_id;

    $.getJSON('data.json', function(data) {})
    .done(function(data) {
        jsonObject = data.children;

        // RENDER NAMES OF ALL DATA
        // for (i = 0; i < jsonObject.length; i++) {
            // topFolder = jsonObject[i].name;
            // if (jsonObject[i].private === undefined) {
            //     $('#fileTree').append('<div class="topFolder"><img class="expandFolder" src="icon-sprite.png"><img class="fileTypeIcon" src="icon-sprite.png">' + topFolder + '<br>');
            // } else {
            //     $('#fileTree').append('<div class="topFolderPrivate"><img class="expandFolder" src="icon-sprite.png"><img class="fileTypeIcon" src="icon-sprite.png">' + topFolder + '</div>');
            // }
            // firstFolder = jsonObject[i].children;
            // if (firstFolder) {
            //     for (j = 0; j < firstFolder.length; j++) {
            //         if (firstFolder[j].type === 'folder') {
            //             $('#fileTree').append('<div class="firstFolder"><img class="expandFolder" src="icon-sprite.png"><img class="fileTypeIcon" src="icon-sprite.png">' + firstFolder[j].name + '<br>');
            //         } else {
            //             $('#fileTree').append('<div class="firstFile"><img class="fileTypeIcon" src="icon-sprite.png">' + firstFolder[j].name + '<br>');
            //         }
            //         secondFolder = firstFolder[j].children;
                    
                    
                    
            //         if (secondFolder) {
            //             for (k = 0; k < secondFolder.length; k++) {
            //                 if (secondFolder[k].type === 'folder') {
            //                     $('#fileTree').append('<div class="secondFolder"><img class="expandFolder" src="icon-sprite.png"><img class="fileTypeIcon" src="icon-sprite.png">' + secondFolder[k].name + '<br>');
            //                 } else {
            //                     $('#fileTree').append('<div class="secondFile"><img class="fileTypeIcon" src="icon-sprite.png">' + secondFolder[k].name + '<br>');
            //                 }
            //                 thirdFolder = secondFolder[k].children;
            //                 if (thirdFolder) {
            //                     for (m = 0; m < thirdFolder.length; m++) {
            //                         if (thirdFolder[m].type === 'folder') {
            //                             $('#fileTree').append('<div class="thirdFolder"><img class="expandFolder" src="icon-sprite.png"><img class="fileTypeIcon" src="icon-sprite.png">' + thirdFolder[m].name + '<br>');
            //                         } else {
            //                             $('#fileTree').append('<div class="thirdFile"><img class="fileTypeIcon" src="icon-sprite.png">' + thirdFolder[m].name + '<br>');
            //                         }
            //                         fourthFile = thirdFolder[m].children;
            //                         if (fourthFile) {
            //                             for (n = 0; n < fourthFile.length; n++) {
            //                                 $('#fileTree').append('<div class="fourthFile"><img class="fileTypeIcon" src="icon-sprite.png">' + fourthFile[n].name + '<br>');
            //                             }
            //                         }
            //                     }
            //                 }
            //             }
            //         }
            //     }
            // }
        // }

        // RENDER NAMES OF ALL DATA
        for (i = 0; i < jsonObject.length; i++) {
            topFolder = jsonObject[i].name;
            topFolder_id = topFolder.replace(/\s/g, "_");
            // can be rewritten to add class=private if jsonObject[i].private is defined instead of an entire append.
            if (jsonObject[i].private === undefined) {
                if (topFolder_id != 'Empty_Folder') {
                    $('#fileTree').append('<div class="topFolder" id="'+ topFolder_id +'" onclick="clicked(this);"><img class="expandFolder" src="icon-sprite.png"><img class="fileTypeIcon" src="icon-sprite.png">' + topFolder + '</div>');
                } else {
                     $('#fileTree').append('<div class="topFolder" id="'+ topFolder_id + i +'" onclick="clicked(this);""><img class="expandFolder" src="icon-sprite.png"><img class="fileTypeIcon" src="icon-sprite.png">' + topFolder + '</div>');
                }
            } else {
                $('#fileTree').append('<div class="topFolder private" id="'+ topFolder_id +'" onclick="clicked(this);><img class="expandFolder" src="icon-sprite.png"><img class="fileTypeIcon" src="icon-sprite.png">' + topFolder + '</div>');
            }
            firstFolder = jsonObject[i].children;
            if (firstFolder) {
                for (j = 0; j < firstFolder.length; j++) {
                    firstFolderName = firstFolder[j].name;
                    firstFolder_id = firstFolderName.replace(/\s/g, "_");
                    if (firstFolder[j].type === 'folder') {
                        $('#'+topFolder_id).append('<div class="firstFolder" id="first_'+ firstFolder_id +'"><img class="expandFolder" src="icon-sprite.png"><img class="fileTypeIcon" src="icon-sprite.png">' + firstFolderName + '</div>');
                    } else {
                        $('#'+topFolder_id).append('<div class="firstFile"><img class="fileTypeIcon" src="icon-sprite.png">' + firstFolderName + '</div>');
                    }
                    secondFolder = firstFolder[j].children;
                    if (secondFolder) {
                        for (k = 0; k < secondFolder.length; k++) {
                            secondFolderName = secondFolder[k].name;
                            secondFolder_id = secondFolderName.replace(/\s/g, "_");
                            if (secondFolder[k].type === 'folder') {
                                $('#first_'+firstFolder_id).append('<div class="secondFolder" id="second_'+ secondFolder_id +'"><img class="expandFolder" src="icon-sprite.png"><img class="fileTypeIcon" src="icon-sprite.png">' + secondFolderName + '</div>');
                            } else {
                                $('#first_'+firstFolder_id).append('<div class="secondFile"><img class="fileTypeIcon" src="icon-sprite.png">' + secondFolderName + '</div>');
                            }
                            thirdFolder = secondFolder[k].children;
                            if (thirdFolder) {
                                for (m = 0; m < thirdFolder.length; m++) {
                                    thirdFolderName = thirdFolder[m].name;
                                    thirdFolder_id = thirdFolderName.replace(/\s/g, "_");
                                    if (thirdFolder[m].type === 'folder') {
                                        $('#second_'+secondFolder_id).append('<div class="thirdFolder" id="third_'+ thirdFolder_id +'"><img class="expandFolder" src="icon-sprite.png"><img class="fileTypeIcon" src="icon-sprite.png">' + thirdFolderName + '</div>');
                                    } else {
                                        $('#second_'+secondFolder_id).append('<div class="thirdFile"><img class="fileTypeIcon" src="icon-sprite.png">' + thirdFolderName + '</div>');
                                    }
                                    fourthFile = thirdFolder[m].children;
                                    if (fourthFile) {
                                        for (n = 0; n < fourthFile.length; n++) {
                                            $('#third_'+thirdFolder_id).append('<div class="fourthFile"><img class="fileTypeIcon" src="icon-sprite.png">' + fourthFile[n].name + '</div>');
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    })
    .fail(function(data) {
        console.log("Error!");
    });

    function clicked(item) {
        alert($(item).attr("id"));
    }

}); // close document.ready