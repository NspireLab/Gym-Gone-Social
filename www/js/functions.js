  /*function getSession() {
                alert("session: " + JSON.stringify(FB.getSession()));
            }
            */
            
document.addEventListener('deviceready', function() {
                          try {
                          FB.init({ appId: "152254864868681", nativeInterface: CDV.FB, useCachedDialogs: false });
                          document.getElementById('data').innerHTML = "";
                          } catch (e) {
                          alert(e);
                          }
                          }, false);         
              function login() {
                FB.login(
                         function(response) {
                         if (response.session) {
                         alert('logged in');
                         } else {
                         alert('not logged in');
                         }
                         },
                         { scope: "email, status_update, read_stream" }
                         );
            }
            
            function getLoginStatus() {
                FB.getLoginStatus(function(response) {
                                  if (response.status == 'connected') {
                                  alert('logged in');
                                  } else {
                                  alert('not logged in');
                                  }
                                  });
            }

            function me() {
                FB.api('/platform/posts', { limit: 3 }, function(response) {
  for (var i=0, l=response.length; i<l; i++) {
    var post = response[i];
    if (post.message) {
      alert('Message: ' + post.message);
    } else if (post.attachment && post.attachment.name) {
      alert('Attachment: ' + post.attachment.name);
    }
  }
});
			
			
			function facebookWallPost() {
			    console.log('Debug 1');
				var params = {
				    method: 'feed',
				    name: 'Facebook Dialogs',
				    link: 'https://developers.facebook.com/docs/reference/dialogs/',
				    picture: 'http://fbrell.com/f8.jpg',
				    caption: 'Reference Documentation',
				    description: 'Dialogs provide a simple, consistent interface for applications to interface with users.'
				  };
				console.log(params);
			    FB.ui(params, function(obj) { console.log(obj);});
			}
            
			function publishStoryFriend() {
				randNum = Math.floor ( Math.random() * friendIDs.length ); 

				var friendID = friendIDs[randNum];
				if (friendID == undefined){
					alert('please click the me button to get a list of friends first');
				}else{
			    	console.log("friend id: " + friendID );
			        console.log('Opening a dialog for friendID: ', friendID);
			        var params = {
			        	method: 'feed',
			            to: friendID.toString(),
			            name: 'Facebook Dialogs',
			            link: 'https://developers.facebook.com/docs/reference/dialogs/',
			            picture: 'http://fbrell.com/f8.jpg',
			            caption: 'Reference Documentation',
			            description: 'Dialogs provide a simple, consistent interface for applications to interface with users.'
			     	};
					FB.ui(params, function(obj) { console.log(obj);});
			    }
			}
            
