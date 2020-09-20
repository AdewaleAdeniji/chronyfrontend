$(".freeleft").click(function(e){
	e.preventDefault();
	Swal.fire({
		text:'You\'re currently on free trial whjich  allows 50 messages per month,You need to upgrade to premium service to enjoy unlimited messages',
		showConfirmButton:true,
		allowOutsideClick:true,
		showCloseButton:true,
		confirmButtonText:'Upgrade Now',
		footer:'Upgrade to premium service for 5$/month',
	})
	.then((result)=>{
		if(result.value){
			upgrade();
		}
	})
})
function upgrade(){
  
}
function get(e){
	return document.getElementById(e);
}
function value(e){

	return get(e).value;
}
function pulls(url,body){
	 if(window.location.origin=='http://localhost'){
          var prefix ='../backend/api/'
      }
      else {
        var prefix = "https://echeckers.000webhostapp.com/api/";
    }
  return fetch(prefix+url,body);
}

function pull(url,body){
	pulls(url,body)
	.then(response=>response.json())
	.then((data)=>{
		return data;
	})
}


