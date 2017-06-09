console.log("js hooked up");

$.getJSON(
     "./data.json",function foo(result) {
       $.each(result[1].data.children,
        function (i, post) {
          $("#fileViewer").append( '<br> HTML <br>' + post.data );       
        }
      )
    }
 )