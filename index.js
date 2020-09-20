function pull(requrl,body){
    if(window.location.origin=='http://localhost'){
          var prefix ='backend/'
      }
      else {
        var prefix = "https://echeckers.000webhostapp.com/chrony/";
    }
  return  fetch(prefix+requrl,body)
  		


}
$(".logoutbtn").click(function(e){
	e.preventDefault();
	Swal.fire({
  title: 'Are you sure you want to logout?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, Log me out!'
}).then((result) => {
  if (result.value) {
  	openload();
  	localStorage.removeItem('admintoken');
	localStorage.removeItem('usertoken');
	window.location.href="login";
    
  }
})
	
})
function closemodal(){
  Swal.fire({
    background:'transparent',
    backdrop:'transparent',
    showConfirmButton:false,
    timer:0,
  })
}
function get(e){
	return document.getElementById(e);
}
function value(e){
	return get(e).value;
}
function setitem(name,value){
	return localStorage.setItem(name,value);
}
function getitem(name){
	if(localStorage.getItem(name)==undefined||localStorage.getItem(name)==null||localStorage.getItem(name)==""){
		return false;
	}
	else {
		return localStorage.getItem(name);
	}
}
function login(){
    localStorage.removeItem('admintoken');
    window.location.href='login';
}
function getInner(e){
	return get(e).innerHTML;
}
function load(id){
	get(id).innerHTML='<i class="fa fa-spinner fa-spin"></i>';
}

function overlay(text){
	Swal.fire({
		html:text,
		showConfirmButton:false,
		showCancelButton:false,
		showCloseButton:true,
		allowOutsideClick:true,
	})


}
 function validateEmail(email) 
            {
                var re = /\S+@\S+\.\S+/;
                return re.test(email);
            }
function openload(){
		Swal.fire({
		footer:'Loading....',
		showConfirmButton:false,
		showCancelButton:false,
		showCloseButton:false,
		allowOutsideClick:false,
	})
}