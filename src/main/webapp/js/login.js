//----------------------------------------------------------------
// shopping cart
//
function login() {
    this.userDetails;
    this.money = 100;
 this.id; 
 this.name;
 this.imageUrl;
 this.email;
  
}



login.prototype.submitLogin = function(googleUser){
	  var profile = googleUser.getBasicProfile();
	  this.id= profile.getId();
	  this.name=profile.getName();
	  this.imageUrl=profile.getImageUrl();
	  this.email=profile.getEmail();
};


