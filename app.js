/*console.log('hello javascript and node js');
//popup way
alert('hello javascript');
confirm('hello confirm method');
prompt('hello user load before page loading.....');

//documentary
document.write('hello javascript document');
document.body.innerHTML="hello javascript";
document.body.innerText="hello inner Text";*/

/*var username="Sharly";
var str="sharly";
var str1="manu";
var str3=`naina`;
var str4= new String("sharly");
3
console.log(typeof str);
console.log(typeof str1);
console.log(typeof str3);
console.log(typeof str4.valueOf);
console.log(typeof username);

var EmpData = [{
    name: 'anu',
    age: 20,
    salary: 20000,
    company: 'testyantra',
    designation: 'nodejs developer'
},
{
    name: 'anu',
    age: 20,
    salary: 20000,
    company: 'testyantra',
    designation: 'nodejs developer'
}
];
console.log(EmpData);*/
//EmpData.name="sharly"
//console.log(typeof EmpData);
//console.log(EmpData ["name"]);
//console.log(EmpData ["age"]);
//console.log(EmpData.designation);
//console.log(EmpData.salary);

/*var EmpData= {
    empName: 'sharly',
    empAge: '23',
    empSalary: 200000,
    empDesignation: 'nodejs developer',
    empLocation:'Banglore',
    empEducation: 'Btech',
    empDoj: new Date(2015/05/4)
}

document.write(
    <h1>my name is ${this.empName}</h1>
    <ul>
        <li>my age is ${this.empAge}</li>
        <li>im earning ${this.empSalary}</li>
        <li>my designation is ${this.empDesignation}</li>
        <li>im from ${this.empLocation}</li>
        <li>completed my ${this.empEducation}</li>
    </ul>
)*/

function loadTemplate1(){
    var template1=document.getElementById("template1");
    console.log(template1);
    template1.innerHTML=`
    <html>
    <head>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
<style>
.row.heading h2 {
color: #fff;
font-size: 52.52px;
line-height: 95px;
font-weight: 400;
text-align: center;
margin: 0 0 40px;
padding-bottom: 20px;
text-transform: uppercase;
}
ul{
margin:0;
padding:0;
list-style:none;
}
.heading.heading-icon {
display: block;
}
.padding-lg {
display: block;
padding-top: 60px;
padding-bottom: 60px;
}
.practice-area.padding-lg {
padding-bottom: 55px;
padding-top: 55px;
}
.practice-area .inner{ 
 border:1px solid #999999; 
 text-align:center; 
 margin-bottom:28px; 
 padding:40px 25px;
}
.our-webcoderskull .cnt-block:hover {
box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
border: 0;
}
.practice-area .inner h3{ 
color:#3c3c3c; 
font-size:24px; 
font-weight:500;
font-family: 'Poppins', sans-serif;
padding: 10px 0;
}
.practice-area .inner p{ 
font-size:14px; 
line-height:22px; 
font-weight:400;
}
.practice-area .inner img{
display:inline-block;
}


.our-webcoderskull{
background: url("http://www.webcoderskull.com/img/right-sider-banner.png") no-repeat center top / cover;

}
.our-webcoderskull .cnt-block{ 
float:left; 
width:22%; 
background:#fff; 
padding:30px 20px; 
text-align:center; 
border:2px solid #d5d5d5;
margin: 0 0 28px;
}
.our-webcoderskull .cnt-block figure{
width:148px; 
height:148px; 
border-radius:100%; 
display:inline-block;
margin-bottom: 15px;
}
.our-webcoderskull .cnt-block img{ 
width:148px; 
height:148px; 
border-radius:100%; 
}
.our-webcoderskull .cnt-block h3{ 
color:#2a2a2a; 
font-size:20px; 
font-weight:500; 
padding:6px 0;
text-transform:uppercase;
}
.our-webcoderskull .cnt-block h3 a{
text-decoration:none;
color:#2a2a2a;
}
.our-webcoderskull .cnt-block h3 a:hover{
color:#337ab7;
}
.our-webcoderskull .cnt-block p{ 
color:#2a2a2a; 
font-size:13px; 
line-height:20px; 
font-weight:400;
}
.our-webcoderskull .cnt-block .follow-us{
margin:20px 0 0;
}
.our-webcoderskull .cnt-block .follow-us li{ 
display:inline-block; 
width:auto; 
margin:0 5px;
}
.our-webcoderskull .cnt-block .follow-us li .fa{ 
font-size:24px; 
color:#767676;
}
.our-webcoderskull .cnt-block .follow-us li .fa:hover{ 
color:#025a8e;
}

</style>
    </head>
    <body>
    <section class="our-webcoderskull padding-lg">
<div class="container">
<div class="row heading heading-icon">
    <h2>Our Team</h2>
</div>
<ul class="row">
  <li class="col-12 col-md-6 col-lg-3">
      <div class="cnt-block equal-hight" style="height: 349px;">
        <figure><img src="http://www.webcoderskull.com/img/team4.png" class="img-responsive" alt=""></figure>
        <h3><a href="http://www.webcoderskull.com/">Web coder skull</a></h3>
        <p>Freelance Web Developer</p>
        <ul class="follow-us clearfix">
          <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
        </ul>
      </div>
  </li>
  <li class="col-12 col-md-6 col-lg-3">
      <div class="cnt-block equal-hight" style="height: 349px;">
        <figure><img src="http://www.webcoderskull.com/img/team1.png" class="img-responsive" alt=""></figure>
        <h3><a href="#">Kappua </a></h3>
        <p>Freelance Web Developer</p>
        <ul class="follow-us clearfix">
          <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
        </ul>
      </div>
  </li>
  <li class="col-12 col-md-6 col-lg-3">
      <div class="cnt-block equal-hight" style="height: 349px;">
        <figure><img src="http://www.webcoderskull.com/img/team4.png" class="img-responsive" alt=""></figure>
        <h3><a href="http://www.webcoderskull.com/">Manish </a></h3>
        <p>Freelance Web Developer</p>
        <ul class="follow-us clearfix">
          <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
        </ul>
      </div>
   </li>
  <li class="col-12 col-md-6 col-lg-3">
      <div class="cnt-block equal-hight" style="height: 349px;">
        <figure><img src="http://www.webcoderskull.com/img/team2.png" class="img-responsive" alt=""></figure>
        <h3><a href="http://www.webcoderskull.com/">Atul </a></h3>
        <p>Freelance Web Developer</p>
        <ul class="follow-us clearfix">
          <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
        </ul>
      </div>
  </li>
</ul>
</div>
</section>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</body>
</html>`
   ;
}
function loadTemplate2(){
    var template1=document.getElementById("template2");
    console.log(template2);
    template2.innerHTML=`
    <html>
    <head>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <style>
    .search-sec{
        padding: 2rem;
    }
    .search-slt{
        display: block;
        width: 100%;
        font-size: 0.875rem;
        line-height: 1.5;
        color: #55595c;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        height: calc(3rem + 2px) !important;
        border-radius:0;
    }
    .wrn-btn{
        width: 100%;
        font-size: 16px;
        font-weight: 400;
        text-transform: capitalize;
        height: calc(3rem + 2px) !important;
        border-radius:0;
    }
    @media (min-width: 992px){
        .search-sec{
            position: relative;
            top: -114px;
            background: rgba(26, 70, 104, 0.51);
        }
    }
    
    @media (max-width: 992px){
        .search-sec{
            background: #1A4668;
        }
    }
    </style>
    </head>
    <body>
    <div class="container">
    <div class="row pt-1 pb-1">
        <div class="col-lg-12">
            <h4 class="text-center">Carousel with Three input search</h4>
            <h6 class="text-center">awesome responsive image slider with search bar</h6>
            <center>for more <a style="text-align:center;" href="https://www.myprogrammingtutorials.com/unordered-list-into-multiple-columns.html">css tutorials</a> visit here.</center>
        </div>
    </div>
</div>
<section>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://pbs.twimg.com/media/EGHYvttU4AAYKb7?format=jpg&name=large" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="https://pbs.twimg.com/media/EGHYvtkUcAAuc8T?format=jpg&name=large" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="https://pbs.twimg.com/media/EGHYvtjU0AAO8w1?format=jpg&name=large" class="d-block w-100" alt="...">
            </div>
            <!--https://upload.wikimedia.org/wikipedia/commons/8/8d/Yarra_Night_Panorama%2C_Melbourne_-_Feb_2005.jpg-->
        </div>
        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</section>
<section class="search-sec">
    <div class="container">
        <form action="#" method="post" novalidate="novalidate">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <input type="text" class="form-control search-slt" placeholder="Enter Pickup City">
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <input type="text" class="form-control search-slt" placeholder="Enter Drop City">
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <select class="form-control search-slt" id="exampleFormControlSelect1">
                                <option>Select Vehicle</option>
                                <option>Example one</option>
                                <option>Example one</option>
                                <option>Example one</option>
                                <option>Example one</option>
                                <option>Example one</option>
                                <option>Example one</option>
                            </select>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <button type="button" class="btn btn-danger wrn-btn">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</section>
    </body>
    </html>
    `
    ;
}
function loadTemplate3(){
    var template1=document.getElementById("template3");
    console.log("template3");
    template3.innerHTML=`
    <html>
    <head>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
    <style>
    body,
    html {
        margin: 0;
        padding: 0;
        height: 100%;
        background: #60a3bc !important;
    }
    .user_card {
        height: 400px;
        width: 350px;
        margin-top: auto;
        margin-bottom: auto;
        background: #f39c12;
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border-radius: 5px;

    }
    .brand_logo_container {
        position: absolute;
        height: 170px;
        width: 170px;
        top: -75px;
        border-radius: 50%;
        background: #60a3bc;
        padding: 10px;
        text-align: center;
    }
    .brand_logo {
        height: 150px;
        width: 150px;
        border-radius: 50%;
        border: 2px solid white;
    }
    .form_container {
        margin-top: 100px;
    }
    .login_btn {
        width: 100%;
        background: #c0392b !important;
        color: white !important;
    }
    .login_btn:focus {
        box-shadow: none !important;
        outline: 0px !important;
    }
    .login_container {
        padding: 0 2rem;
    }
    .input-group-text {
        background: #c0392b !important;
        color: white !important;
        border: 0 !important;
        border-radius: 0.25rem 0 0 0.25rem !important;
    }
    .input_user,
    .input_pass:focus {
        box-shadow: none !important;
        outline: 0px !important;
    }
    .custom-checkbox .custom-control-input:checked~.custom-control-label::before {
        background-color: #c0392b !important;
    }
    </style>
    </head>
    <body>
    <div class="container h-100">
		<div class="d-flex justify-content-center h-100">
			<div class="user_card">
				<div class="d-flex justify-content-center">
					<div class="brand_logo_container">
						<img src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png" class="brand_logo" alt="Logo">
					</div>
				</div>
				<div class="d-flex justify-content-center form_container">
					<form>
						<div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-user"></i></span>
							</div>
							<input type="text" name="" class="form-control input_user" value="" placeholder="username">
						</div>
						<div class="input-group mb-2">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
							<input type="password" name="" class="form-control input_pass" value="" placeholder="password">
						</div>
						<div class="form-group">
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="customControlInline">
								<label class="custom-control-label" for="customControlInline">Remember me</label>
							</div>
						</div>
							<div class="d-flex justify-content-center mt-3 login_container">
				 	<button type="button" name="button" class="btn login_btn">Login</button>
				   </div>
					</form>
				</div>
		
				<div class="mt-4">
					<div class="d-flex justify-content-center links">
						Don't have an account? <a href="#" class="ml-2">Sign Up</a>
					</div>
					<div class="d-flex justify-content-center links">
						<a href="#">Forgot your password?</a>
					</div>
				</div>
			</div>
		</div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    </body>
    </html>
    `
    ;
}
function loadTemplate4(){
    var template1=document.getElementById("template4");
    console.log("template4");
    template4.innerHTML=`
    <html>
    <head>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<style>
h3.h3{text-align:center;margin:1em;text-transform:capitalize;font-size:1.7em;}

/********************* shopping Demo-1 **********************/
.product-grid{font-family:Raleway,sans-serif;text-align:center;padding:0 0 72px;border:1px solid rgba(0,0,0,.1);overflow:hidden;position:relative;z-index:1}
.product-grid .product-image{position:relative;transition:all .3s ease 0s}
.product-grid .product-image a{display:block}
.product-grid .product-image img{width:100%;height:auto}
.product-grid .pic-1{opacity:1;transition:all .3s ease-out 0s}
.product-grid:hover .pic-1{opacity:1}
.product-grid .pic-2{opacity:0;position:absolute;top:0;left:0;transition:all .3s ease-out 0s}
.product-grid:hover .pic-2{opacity:1}
.product-grid .social{width:150px;padding:0;margin:0;list-style:none;opacity:0;transform:translateY(-50%) translateX(-50%);position:absolute;top:60%;left:50%;z-index:1;transition:all .3s ease 0s}
.product-grid:hover .social{opacity:1;top:50%}
.product-grid .social li{display:inline-block}
.product-grid .social li a{color:#fff;background-color:#333;font-size:16px;line-height:40px;text-align:center;height:40px;width:40px;margin:0 2px;display:block;position:relative;transition:all .3s ease-in-out}
.product-grid .social li a:hover{color:#fff;background-color:#ef5777}
.product-grid .social li a:after,.product-grid .social li a:before{content:attr(data-tip);color:#fff;background-color:#000;font-size:12px;letter-spacing:1px;line-height:20px;padding:1px 5px;white-space:nowrap;opacity:0;transform:translateX(-50%);position:absolute;left:50%;top:-30px}
.product-grid .social li a:after{content:'';height:15px;width:15px;border-radius:0;transform:translateX(-50%) rotate(45deg);top:-20px;z-index:-1}
.product-grid .social li a:hover:after,.product-grid .social li a:hover:before{opacity:1}
.product-grid .product-discount-label,.product-grid .product-new-label{color:#fff;background-color:#ef5777;font-size:12px;text-transform:uppercase;padding:2px 7px;display:block;position:absolute;top:10px;left:0}
.product-grid .product-discount-label{background-color:#333;left:auto;right:0}
.product-grid .rating{color:#FFD200;font-size:12px;padding:12px 0 0;margin:0;list-style:none;position:relative;z-index:-1}
.product-grid .rating li.disable{color:rgba(0,0,0,.2)}
.product-grid .product-content{background-color:#fff;text-align:center;padding:12px 0;margin:0 auto;position:absolute;left:0;right:0;bottom:-27px;z-index:1;transition:all .3s}
.product-grid:hover .product-content{bottom:0}
.product-grid .title{font-size:13px;font-weight:400;letter-spacing:.5px;text-transform:capitalize;margin:0 0 10px;transition:all .3s ease 0s}
.product-grid .title a{color:#828282}
.product-grid .title a:hover,.product-grid:hover .title a{color:#ef5777}
.product-grid .price{color:#333;font-size:17px;font-family:Montserrat,sans-serif;font-weight:700;letter-spacing:.6px;margin-bottom:8px;text-align:center;transition:all .3s}
.product-grid .price span{color:#999;font-size:13px;font-weight:400;text-decoration:line-through;margin-left:3px;display:inline-block}
.product-grid .add-to-cart{color:#000;font-size:13px;font-weight:600}
@media only screen and (max-width:990px){.product-grid{margin-bottom:30px}
}

/********************* Shopping Demo-2 **********************/
.demo{padding:45px 0}
.product-grid2{font-family:'Open Sans',sans-serif;position:relative}
.product-grid2 .product-image2{overflow:hidden;position:relative}
.product-grid2 .product-image2 a{display:block}
.product-grid2 .product-image2 img{width:100%;height:auto}
.product-image2 .pic-1{opacity:1;transition:all .5s}
.product-grid2:hover .product-image2 .pic-1{opacity:0}
.product-image2 .pic-2{width:100%;height:100%;opacity:0;position:absolute;top:0;left:0;transition:all .5s}
.product-grid2:hover .product-image2 .pic-2{opacity:1}
.product-grid2 .social{padding:0;margin:0;position:absolute;bottom:50px;right:25px;z-index:1}
.product-grid2 .social li{margin:0 0 10px;display:block;transform:translateX(100px);transition:all .5s}
.product-grid2:hover .social li{transform:translateX(0)}
.product-grid2:hover .social li:nth-child(2){transition-delay:.15s}
.product-grid2:hover .social li:nth-child(3){transition-delay:.25s}
.product-grid2 .social li a{color:#505050;background-color:#fff;font-size:17px;line-height:45px;text-align:center;height:45px;width:45px;border-radius:50%;display:block;transition:all .3s ease 0s}
.product-grid2 .social li a:hover{color:#fff;background-color:#3498db;box-shadow:0 0 10px rgba(0,0,0,.5)}
.product-grid2 .social li a:after,.product-grid2 .social li a:before{content:attr(data-tip);color:#fff;background-color:#000;font-size:12px;line-height:22px;border-radius:3px;padding:0 5px;white-space:nowrap;opacity:0;transform:translateX(-50%);position:absolute;left:50%;top:-30px}
.product-grid2 .social li a:after{content:'';height:15px;width:15px;border-radius:0;transform:translateX(-50%) rotate(45deg);top:-22px;z-index:-1}
.product-grid2 .social li a:hover:after,.product-grid2 .social li a:hover:before{opacity:1}
.product-grid2 .add-to-cart{color:#fff;background-color:#404040;font-size:15px;text-align:center;width:100%;padding:10px 0;display:block;position:absolute;left:0;bottom:-100%;transition:all .3s}
.product-grid2 .add-to-cart:hover{background-color:#3498db;text-decoration:none}
.product-grid2:hover .add-to-cart{bottom:0}
.product-grid2 .product-new-label{background-color:#3498db;color:#fff;font-size:17px;padding:5px 10px;position:absolute;right:0;top:0;transition:all .3s}
.product-grid2:hover .product-new-label{opacity:0}
.product-grid2 .product-content{padding:20px 10px;text-align:center}
.product-grid2 .title{font-size:17px;margin:0 0 7px}
.product-grid2 .title a{color:#303030}
.product-grid2 .title a:hover{color:#3498db}
.product-grid2 .price{color:#303030;font-size:15px}
@media screen and (max-width:990px){.product-grid2{margin-bottom:30px}
}

/********************* Shopping Demo-3 **********************/
.product-grid3{font-family:Roboto,sans-serif;text-align:center;position:relative;z-index:1}
.product-grid3:before{content:"";height:81%;width:100%;background:#fff;border:1px solid rgba(0,0,0,.1);opacity:0;position:absolute;top:0;left:0;z-index:-1;transition:all .5s ease 0s}
.product-grid3:hover:before{opacity:1;height:100%}
.product-grid3 .product-image3{position:relative}
.product-grid3 .product-image3 a{display:block}
.product-grid3 .product-image3 img{width:100%;height:auto}
.product-grid3 .pic-1{opacity:1;transition:all .5s ease-out 0s}
.product-grid3:hover .pic-1{opacity:0}
.product-grid3 .pic-2{position:absolute;top:0;left:0;opacity:0;transition:all .5s ease-out 0s}
.product-grid3:hover .pic-2{opacity:1}
.product-grid3 .social{width:120px;padding:0;margin:0 auto;list-style:none;opacity:0;position:absolute;right:0;left:0;bottom:-23px;transform:scale(0);transition:all .3s ease 0s}
.product-grid3:hover .social{opacity:1;transform:scale(1)}
.product-grid3:hover .product-discount-label,.product-grid3:hover .product-new-label,.product-grid3:hover .title{opacity:0}
.product-grid3 .social li{display:inline-block}
.product-grid3 .social li a{color:#e67e22;background:#fff;font-size:18px;line-height:50px;width:50px;height:50px;border:1px solid rgba(0,0,0,.1);border-radius:50%;margin:0 2px;display:block;transition:all .3s ease 0s}
.product-grid3 .social li a:hover{background:#e67e22;color:#fff}
.product-grid3 .product-discount-label,.product-grid3 .product-new-label{background-color:#e67e22;color:#fff;font-size:17px;padding:2px 10px;position:absolute;right:10px;top:10px;transition:all .3s}
.product-grid3 .product-content{z-index:-1;padding:15px;text-align:left}
.product-grid3 .title{font-size:14px;text-transform:capitalize;margin:0 0 7px;transition:all .3s ease 0s}
.product-grid3 .title a{color:#414141}
.product-grid3 .price{color:#000;font-size:16px;letter-spacing:1px;font-weight:600;margin-right:2px;display:inline-block}
.product-grid3 .price span{color:#909090;font-size:14px;font-weight:500;letter-spacing:0;text-decoration:line-through;text-align:left;display:inline-block;margin-top:-2px}
.product-grid3 .rating{padding:0;margin:-22px 0 0;list-style:none;text-align:right;display:block}
.product-grid3 .rating li{color:#ffd200;font-size:13px;display:inline-block}
.product-grid3 .rating li.disable{color:#dcdcdc}
@media only screen and (max-width:1200px){.product-grid3 .rating{margin:0}
}
@media only screen and (max-width:990px){.product-grid3{margin-bottom:30px}
.product-grid3 .rating{margin:-22px 0 0}
}
@media only screen and (max-width:359px){.product-grid3 .rating{margin:0}
}

/********************* Shopping Demo-4 **********************/
.product-grid4,.product-grid4 .product-image4{position:relative}
.product-grid4{font-family:Poppins,sans-serif;text-align:center;border-radius:5px;overflow:hidden;z-index:1;transition:all .3s ease 0s}
.product-grid4:hover{box-shadow:0 0 10px rgba(0,0,0,.2)}
.product-grid4 .product-image4 a{display:block}
.product-grid4 .product-image4 img{width:100%;height:auto}
.product-grid4 .pic-1{opacity:1;transition:all .5s ease-out 0s}
.product-grid4:hover .pic-1{opacity:0}
.product-grid4 .pic-2{position:absolute;top:0;left:0;opacity:0;transition:all .5s ease-out 0s}
.product-grid4:hover .pic-2{opacity:1}
.product-grid4 .social{width:180px;padding:0;margin:0 auto;list-style:none;position:absolute;right:0;left:0;top:50%;transform:translateY(-50%);transition:all .3s ease 0s}
.product-grid4 .social li{display:inline-block;opacity:0;transition:all .7s}
.product-grid4 .social li:nth-child(1){transition-delay:.15s}
.product-grid4 .social li:nth-child(2){transition-delay:.3s}
.product-grid4 .social li:nth-child(3){transition-delay:.45s}
.product-grid4:hover .social li{opacity:1}
.product-grid4 .social li a{color:#222;background:#fff;font-size:17px;line-height:36px;width:40px;height:36px;border-radius:2px;margin:0 5px;display:block;transition:all .3s ease 0s}
.product-grid4 .social li a:hover{color:#fff;background:#16a085}
.product-grid4 .social li a:after,.product-grid4 .social li a:before{content:attr(data-tip);color:#fff;background-color:#000;font-size:12px;line-height:20px;border-radius:3px;padding:0 5px;white-space:nowrap;opacity:0;transform:translateX(-50%);position:absolute;left:50%;top:-30px}
.product-grid4 .social li a:after{content:'';height:15px;width:15px;border-radius:0;transform:translateX(-50%) rotate(45deg);top:-22px;z-index:-1}
.product-grid4 .social li a:hover:after,.product-grid4 .social li a:hover:before{opacity:1}
.product-grid4 .product-discount-label,.product-grid4 .product-new-label{color:#fff;background-color:#16a085;font-size:13px;font-weight:800;text-transform:uppercase;line-height:45px;height:45px;width:45px;border-radius:50%;position:absolute;left:10px;top:15px;transition:all .3s}
.product-grid4 .product-discount-label{left:auto;right:10px;background-color:#d7292a}
.product-grid4:hover .product-new-label{opacity:0}
.product-grid4 .product-content{padding:25px}
.product-grid4 .title{font-size:15px;font-weight:400;text-transform:capitalize;margin:0 0 7px;transition:all .3s ease 0s}
.product-grid4 .title a{color:#222}
.product-grid4 .title a:hover{color:#16a085}
.product-grid4 .price{color:#16a085;font-size:17px;font-weight:700;margin:0 2px 15px 0;display:block}
.product-grid4 .price span{color:#909090;font-size:13px;font-weight:400;letter-spacing:0;text-decoration:line-through;text-align:left;vertical-align:middle;display:inline-block}
.product-grid4 .add-to-cart{border:1px solid #e5e5e5;display:inline-block;padding:10px 20px;color:#888;font-weight:600;font-size:14px;border-radius:4px;transition:all .3s}
.product-grid4:hover .add-to-cart{border:1px solid transparent;background:#16a085;color:#fff}
.product-grid4 .add-to-cart:hover{background-color:#505050;box-shadow:0 0 10px rgba(0,0,0,.5)}
@media only screen and (max-width:990px){.product-grid4{margin-bottom:30px}
}

/********************* Shopping Demo-5 **********************/
.product-image5 .pic-1,.product-image5 .pic-2{backface-visibility:hidden;transition:all .5s ease 0s}
.product-grid5{font-family:Poppins,sans-serif;position:relative}
.product-grid5 .product-image5{overflow:hidden;position:relative}
.product-grid5 .product-image5 a{display:block}
.product-grid5 .product-image5 img{width:100%;height:auto}
.product-image5 .pic-1{opacity:1}
.product-grid5:hover .product-image5 .pic-1{opacity:0}
.product-image5 .pic-2{width:100%;height:100%;opacity:0;position:absolute;top:0;left:0}
.product-grid5:hover .product-image5 .pic-2{opacity:1}
.product-grid5 .social{padding:0;margin:0;position:absolute;top:10px;right:10px}
.product-grid5 .social li{display:block;margin:0 0 10px;transition:all .5s}
.product-grid5 .social li:nth-child(2){opacity:0;transform:translateY(-50px)}
.product-grid5:hover .social li:nth-child(2){opacity:1;transform:translateY(0)}
.product-grid5 .social li:nth-child(3){opacity:0;transform:translateY(-50px)}
.product-grid5:hover .social li:nth-child(3){opacity:1;transform:translateY(0);transition-delay:.2s}
.product-grid5 .social li a{color:#888;background:#fff;font-size:14px;text-align:center;line-height:40px;height:40px;width:40px;border-radius:50%;display:block;transition:.5s ease 0s}
.product-grid5 .social li a:hover{color:#fff;background:#1e3799}
.product-grid5 .select-options{color:#777;background-color:#fff;font-size:13px;font-weight:400;text-align:center;text-transform:uppercase;padding:15px 5px;margin:0 auto;opacity:0;display:block;position:absolute;width:92%;left:0;bottom:-100px;right:0;transition:.5s ease 0s}
.product-grid5 .select-options:hover{color:#fff;background-color:#1e3799;text-decoration:none}
.product-grid5:hover .select-options{opacity:1;bottom:10px}
.product-grid5 .product-content{padding:20px 10px}
.product-grid5 .title{font-size:15px;font-weight:600;text-transform:capitalize;margin:0 0 10px;transition:all .3s ease 0s}
.product-grid5 .title a{color:#222}
.product-grid5 .title a:hover{color:#1e3799}
.product-grid5 .price{color:#222;font-size:13px;font-weight:500;letter-spacing:1px}
@media only screen and (max-width:990px){.product-grid5{margin-bottom:30px}
}

/********************* Shopping Demo-6 **********************/
.product-grid6,.product-grid6 .product-image6{overflow:hidden}
.product-grid6{font-family:'Open Sans',sans-serif;text-align:center;position:relative;transition:all .5s ease 0s}
.product-grid6:hover{box-shadow:0 0 10px rgba(0,0,0,.3)}
.product-grid6 .product-image6 a{display:block}
.product-grid6 .product-image6 img{width:100%;height:auto;transition:all .5s ease 0s}
.product-grid6:hover .product-image6 img{transform:scale(1.1)}
.product-grid6 .product-content{padding:12px 12px 15px;transition:all .5s ease 0s}
.product-grid6:hover .product-content{opacity:0}
.product-grid6 .title{font-size:20px;font-weight:600;text-transform:capitalize;margin:0 0 10px;transition:all .3s ease 0s}
.product-grid6 .title a{color:#000}
.product-grid6 .title a:hover{color:#2e86de}
.product-grid6 .price{font-size:18px;font-weight:600;color:#2e86de}
.product-grid6 .price span{color:#999;font-size:15px;font-weight:400;text-decoration:line-through;margin-left:7px;display:inline-block}
.product-grid6 .social{background-color:#fff;width:100%;padding:0;margin:0;list-style:none;opacity:0;transform:translateX(-50%);position:absolute;bottom:-50%;left:50%;z-index:1;transition:all .5s ease 0s}
.product-grid6:hover .social{opacity:1;bottom:20px}
.product-grid6 .social li{display:inline-block}
.product-grid6 .social li a{color:#909090;font-size:16px;line-height:45px;text-align:center;height:45px;width:45px;margin:0 7px;border:1px solid #909090;border-radius:50px;display:block;position:relative;transition:all .3s ease-in-out}
.product-grid6 .social li a:hover{color:#fff;background-color:#2e86de;width:80px}
.product-grid6 .social li a:after,.product-grid6 .social li a:before{content:attr(data-tip);color:#fff;background-color:#2e86de;font-size:12px;letter-spacing:1px;line-height:20px;padding:1px 5px;border-radius:5px;white-space:nowrap;opacity:0;transform:translateX(-50%);position:absolute;left:50%;top:-30px}
.product-grid6 .social li a:after{content:'';height:15px;width:15px;border-radius:0;transform:translateX(-50%) rotate(45deg);top:-20px;z-index:-1}
.product-grid6 .social li a:hover:after,.product-grid6 .social li a:hover:before{opacity:1}
@media only screen and (max-width:990px){.product-grid6{margin-bottom:30px}
}

/********************* Shopping Demo-7 **********************/
.product-grid7{font-family:'Roboto Slab',serif;position:relative;z-index:1}
.product-grid7 .product-image7{border:1px solid rgba(0,0,0,.1);overflow:hidden;perspective:1500px;position:relative;transition:all .3s ease 0s}
.product-grid7 .product-image7 a{display:block}
.product-grid7 .product-image7 img{width:100%;height:auto}
.product-grid7 .pic-1{opacity:1;transition:all .5s ease-out 0s}
.product-grid7 .pic-2{opacity:0;transform:rotateY(-90deg);position:absolute;top:0;left:0;transition:all .5s ease-out 0s}
.product-grid7:hover .pic-2{opacity:1;transform:rotateY(0)}
.product-grid7 .social{padding:0;margin:0;list-style:none;position:absolute;bottom:3px;left:-20%;z-index:1;transition:all .5s ease 0s}
.product-grid7:hover .social{left:17px}
.product-grid7 .social li a{color:#fff;background-color:#333;font-size:16px;line-height:40px;text-align:center;height:40px;width:40px;margin:15px 0;border-radius:50%;display:block;transition:all .5s ease-in-out}
.product-grid7 .social li a:hover{color:#fff;background-color:#78e08f}
.product-grid7 .product-new-label{color:#fff;background-color:#333;padding:5px 10px;border-radius:5px;display:block;position:absolute;top:10px;left:10px}
.product-grid7 .product-content{text-align:center;padding:20px 0 0}
.product-grid7 .title{font-size:15px;font-weight:600;text-transform:capitalize;margin:0 0 10px;transition:all .3s ease 0s}
.product-grid7 .title a{color:#333}
.product-grid7 .title a:hover{color:#78e08f}
.product-grid7 .rating{color:#78e08f;font-size:12px;padding:0;margin:0 0 10px;list-style:none}
.product-grid7 .price{color:#333;font-size:20px;font-family:Lora,serif;font-weight:700;margin-bottom:8px;text-align:center;transition:all .3s}
.product-grid7 .price span{color:#999;font-size:14px;font-weight:700;text-decoration:line-through;margin-left:7px;display:inline-block}
@media only screen and (max-width:990px){.product-grid7{margin-bottom:30px}
}

/********************* Shopping Demo-8 **********************/
.product-grid8{font-family:Poppins,sans-serif;position:relative;z-index:1}
.product-grid8 .product-image8{border:1px solid #e4e9ef;position:relative;transition:all .3s ease 0s}
.product-grid8:hover .product-image8{box-shadow:0 0 10px rgba(0,0,0,.15)}
.product-grid8 .product-image8 a{display:block}
.product-grid8 .product-image8 img{width:100%;height:auto}
.product-grid8 .pic-1{opacity:1;transition:all .5s ease-out 0s}
.product-grid8:hover .pic-1{opacity:0}
.product-grid8 .pic-2{opacity:0;position:absolute;top:0;left:0;transition:all .5s ease-out 0s}
.product-grid8:hover .pic-2{opacity:1}
.product-grid8 .social{padding:0;margin:0;list-style:none;position:absolute;bottom:13px;right:13px;z-index:1}
.product-grid8 .social li{opacity:0;transform:translateY(3px);transition:all .5s ease 0s}
.product-grid8:hover .social li{margin:0 0 10px;opacity:1;transform:translateY(0)}
.product-grid8:hover .social li:nth-child(1){transition-delay:.1s}
.product-grid8:hover .social li:nth-child(2){transition-delay:.2s}
.product-grid8:hover .social li:nth-child(3){transition-delay:.4s}
.product-grid8 .social li a{color:grey;font-size:17px;line-height:40px;text-align:center;height:40px;width:40px;border:1px solid grey;display:block;transition:all .5s ease-in-out}
.product-grid8 .social li a:hover{color:#000;border-color:#000}
.product-grid8 .product-discount-label{display:block;padding:4px 15px 4px 30px;color:#fff;background-color:#0081c2;position:absolute;top:10px;right:0;-webkit-clip-path:polygon(34% 0,100% 0,100% 100%,0 100%);clip-path:polygon(34% 0,100% 0,100% 100%,0 100%)}
.product-grid8 .product-content{padding:20px 0 0}
.product-grid8 .price{color:#000;font-size:19px;font-weight:400;margin-bottom:8px;text-align:left;transition:all .3s}
.product-grid8 .price span{color:#999;font-size:14px;font-weight:500;text-decoration:line-through;margin-left:7px;display:inline-block}
.product-grid8 .product-shipping{color:rgba(0,0,0,.5);font-size:15px;padding-left:35px;margin:0 0 15px;display:block;position:relative}
.product-grid8 .product-shipping:before{content:'';height:1px;width:25px;background-color:rgba(0,0,0,.5);transform:translateY(-50%);position:absolute;top:50%;left:0}
.product-grid8 .title{font-size:16px;font-weight:400;text-transform:capitalize;margin:0 0 30px;transition:all .3s ease 0s}
.product-grid8 .title a{color:#000}
.product-grid8 .title a:hover{color:#0081c2}
.product-grid8 .all-deals{display:block;color:#fff;background-color:#2e353b;font-size:15px;letter-spacing:1px;text-align:center;text-transform:uppercase;padding:22px 5px;transition:all .5s ease 0s}
.product-grid8 .all-deals .icon{margin-left:7px}
.product-grid8 .all-deals:hover{background-color:#0081c2}
@media only screen and (max-width:990px){.product-grid8{margin-bottom:30px}
}

/********************* Shopping Demo-9 **********************/
.product-grid9,.product-grid9 .product-image9{position:relative}
.product-grid9{font-family:Poppins,sans-serif;z-index:1}
.product-grid9 .product-image9 a{display:block}
.product-grid9 .product-image9 img{width:100%;height:auto}
.product-grid9 .pic-1{opacity:1;transition:all .5s ease-out 0s}
.product-grid9:hover .pic-1{opacity:0}
.product-grid9 .pic-2{position:absolute;top:0;left:0;opacity:0;transition:all .5s ease-out 0s}
.product-grid9:hover .pic-2{opacity:1}
.product-grid9 .product-full-view{color:#505050;background-color:#fff;font-size:16px;height:45px;width:45px;padding:18px;border-radius:100px 0 0;display:block;opacity:0;position:absolute;right:0;bottom:0;transition:all .3s ease 0s}
.product-grid9 .product-full-view:hover{color:#c0392b}
.product-grid9:hover .product-full-view{opacity:1}
.product-grid9 .product-content{padding:12px 12px 0;overflow:hidden;position:relative}
.product-content .rating{padding:0;margin:0 0 7px;list-style:none}
.product-grid9 .rating li{font-size:12px;color:#ffd200;transition:all .3s ease 0s}
.product-grid9 .rating li.disable{color:rgba(0,0,0,.2)}
.product-grid9 .title{font-size:16px;font-weight:400;text-transform:capitalize;margin:0 0 3px;transition:all .3s ease 0s}
.product-grid9 .title a{color:rgba(0,0,0,.5)}
.product-grid9 .title a:hover{color:#c0392b}
.product-grid9 .price{color:#000;font-size:17px;margin:0;display:block;transition:all .5s ease 0s}
.product-grid9:hover .price{opacity:0}
.product-grid9 .add-to-cart{display:block;color:#c0392b;font-weight:600;font-size:14px;opacity:0;position:absolute;left:10px;bottom:-20px;transition:all .5s ease 0s}
.product-grid9:hover .add-to-cart{opacity:1;bottom:0}
@media only screen and (max-width:990px){.product-grid9{margin-bottom:30px}
}

</style>
    </head>
    <body>
    <div class="container">
    <h3 class="h3">shopping Demo-1 </h3>
    <div class="row">
        <div class="col-md-3 col-sm-6">
            <div class="product-grid">
                <div class="product-image">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-1.jpg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-2.jpg">
                    </a>
                    <ul class="social">
                        <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                        <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <span class="product-new-label">Sale</span>
                    <span class="product-discount-label">20%</span>
                </div>
                <ul class="rating">
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star disable"></li>
                </ul>
                <div class="product-content">
                    <h3 class="title"><a href="#">Women's Blouse</a></h3>
                    <div class="price">$16.00
                        <span>$20.00</span>
                    </div>
                    <a class="add-to-cart" href="">+ Add To Cart</a>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="product-grid">
                <div class="product-image">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-3.jpg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-4.jpg">
                    </a>
                    <ul class="social">
                        <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                        <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <span class="product-new-label">Sale</span>
                    <span class="product-discount-label">50%</span>
                </div>
                <ul class="rating">
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                </ul>
                <div class="product-content">
                    <h3 class="title"><a href="#">Men's Plain Tshirt</a></h3>
                    <div class="price">$5.00
                        <span>$10.00</span>
                    </div>
                    <a class="add-to-cart" href="">+ Add To Cart</a>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="product-grid">
                <div class="product-image">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-5.jpg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-6.jpg">
                    </a>
                    <ul class="social">
                        <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                        <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <span class="product-new-label">Sale</span>
                    <span class="product-discount-label">50%</span>
                </div>
                <ul class="rating">
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                </ul>
                <div class="product-content">
                    <h3 class="title"><a href="#">Men's Plain Tshirt</a></h3>
                    <div class="price">$5.00
                        <span>$10.00</span>
                    </div>
                    <a class="add-to-cart" href="">+ Add To Cart</a>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="product-grid">
                <div class="product-image">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-7.jpg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-8.jpg">
                    </a>
                    <ul class="social">
                        <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                        <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <span class="product-new-label">Sale</span>
                    <span class="product-discount-label">50%</span>
                </div>
                <ul class="rating">
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                </ul>
                <div class="product-content">
                    <h3 class="title"><a href="#">Men's Plain Tshirt</a></h3>
                    <div class="price">$5.00
                        <span>$10.00</span>
                    </div>
                    <a class="add-to-cart" href="">+ Add To Cart</a>
                </div>
            </div>
        </div>
    </div>
</div>
<hr>


<div class="container">
    <h3 class="h3">shopping Demo-2 </h3>
    <div class="row">
        <div class="col-md-3 col-sm-6">
            <div class="product-grid2">
                <div class="product-image2">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-1.jpeg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-2.jpeg">
                    </a>
                    <ul class="social">
                        <li><a href="#" data-tip="Quick View"><i class="fa fa-eye"></i></a></li>
                        <li><a href="#" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="#" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <a class="add-to-cart" href="">Add to cart</a>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">Women's Designer Top</a></h3>
                    <span class="price">$599.99</span>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="product-grid2">
              <div class="product-image2">
                  <a href="#">
                      <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-3.jpeg">
                      <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-4.jpeg">
                  </a>
                  <ul class="social">
                      <li><a href="#" data-tip="Quick View"><i class="fa fa-eye"></i></a></li>
                      <li><a href="#" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                      <li><a href="#" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                  </ul>
                  <a class="add-to-cart" href="">Add to cart</a>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">Women's Yellow Top</a></h3>
                    <span class="price">$699.99</span>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="product-grid2">
                <div class="product-image2">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-5.jpeg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-6.jpeg">
                    </a>
                    <ul class="social">
                        <li><a href="#" data-tip="Quick View"><i class="fa fa-eye"></i></a></li>
                        <li><a href="#" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="#" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <a class="add-to-cart" href="">Add to cart</a>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">Women's Designer Top</a></h3>
                    <span class="price">$599.99</span>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="product-grid2">
                <div class="product-image2">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-7.jpeg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-8.jpeg">
                    </a>
                    <ul class="social">
                        <li><a href="#" data-tip="Quick View"><i class="fa fa-eye"></i></a></li>
                        <li><a href="#" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="#" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <a class="add-to-cart" href="">Add to cart</a>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">Women's Designer Top</a></h3>
                    <span class="price">$599.99</span>
                </div>
            </div>
        </div>
    </div>
</div>
<hr>

<div class="container">
    <h3 class="h3">shopping Demo-3 </h3>
    <div class="row">
        <div class="col-md-3 col-sm-6">
            <div class="product-grid3">
                <div class="product-image3">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-1.jpg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-2.jpg">
                    </a>
                    <ul class="social">
                        <li><a href="#"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <span class="product-new-label">New</span>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">Men's Blazer</a></h3>
                    <div class="price">
                        $63.50
                        <span>$75.00</span>
                    </div>
                    <ul class="rating">
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star disable"></li>
                        <li class="fa fa-star disable"></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="product-grid3">
                <div class="product-image3">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-3.jpg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-4.jpg">
                    </a>
                    <ul class="social">
                        <li><a href="#"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">Women's Designer Top</a></h3>
                    <div class="price">
                        $43.50
                    </div>
                    <ul class="rating">
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="product-grid3">
                <div class="product-image3">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-5.jpg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-6.jpg">
                    </a>
                    <ul class="social">
                        <li><a href="#"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <span class="product-new-label">New</span>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">Men's Blazer</a></h3>
                    <div class="price">
                        $63.50
                        <span>$75.00</span>
                    </div>
                    <ul class="rating">
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star disable"></li>
                        <li class="fa fa-star disable"></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="product-grid3">
                <div class="product-image3">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-7.jpg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-8.jpg">
                    </a>
                    <ul class="social">
                        <li><a href="#"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <span class="product-new-label">New</span>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">Men's Blazer</a></h3>
                    <div class="price">
                        $63.50
                        <span>$75.00</span>
                    </div>
                    <ul class="rating">
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star disable"></li>
                        <li class="fa fa-star disable"></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<hr>

<div class="container">
    <h3 class="h3">shopping Demo-4 </h3>
    <div class="row">
        <div class="col-md-3 col-sm-6">
            <div class="product-grid4">
                <div class="product-image4">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-1.jpg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-2.jpg">
                    </a>
                    <ul class="social">
                        <li><a href="#" data-tip="Quick View"><i class="fa fa-eye"></i></a></li>
                        <li><a href="#" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="#" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <span class="product-new-label">New</span>
                    <span class="product-discount-label">-10%</span>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">Women's Black Top</a></h3>
                    <div class="price">
                        $14.40
                        <span>$16.00</span>
                    </div>
                    <a class="add-to-cart" href="">ADD TO CART</a>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="product-grid4">
                <div class="product-image4">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-3.jpg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-4.jpg">
                    </a>
                    <ul class="social">
                        <li><a href="#" data-tip="Quick View"><i class="fa fa-eye"></i></a></li>
                        <li><a href="#" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="#" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <span class="product-discount-label">-12%</span>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">Men's Blue Shirt</a></h3>
                    <div class="price">
                        $17.60
                        <span>$20.00</span>
                    </div>
                    <a class="add-to-cart" href="">ADD TO CART</a>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="product-grid4">
                <div class="product-image4">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-5.jpg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-6.jpg">
                    </a>
                    <ul class="social">
                        <li><a href="#" data-tip="Quick View"><i class="fa fa-eye"></i></a></li>
                        <li><a href="#" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="#" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <span class="product-new-label">New</span>
                    <span class="product-discount-label">-10%</span>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">Women's Black Top</a></h3>
                    <div class="price">
                        $14.40
                        <span>$16.00</span>
                    </div>
                    <a class="add-to-cart" href="">ADD TO CART</a>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="product-grid4">
                <div class="product-image4">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-7.jpg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-8.jpg">
                    </a>
                    <ul class="social">
                        <li><a href="#" data-tip="Quick View"><i class="fa fa-eye"></i></a></li>
                        <li><a href="#" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="#" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <span class="product-new-label">New</span>
                    <span class="product-discount-label">-10%</span>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">Women's Black Top</a></h3>
                    <div class="price">
                        $14.40
                        <span>$16.00</span>
                    </div>
                    <a class="add-to-cart" href="">ADD TO CART</a>
                </div>
            </div>
        </div>
    </div>
</div>
<hr>

<div class="container">
    <h3 class="h3">shopping Demo-5 </h3>
    <div class="row">
        <div class="col-md-3 col-sm-6">
            <div class="product-grid5">
                <div class="product-image5">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo11/images/img-1.jpg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo11/images/img-2.jpg">
                    </a>
                    <ul class="social">
                        <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                        <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <a href="#" class="select-options"><i class="fa fa-arrow-right"></i> Select Options</a>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">Men's Sweat Shirt</a></h3>
                    <div class="price">$11.00 - $15.00</div>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="product-grid5">
                <div class="product-image5">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo11/images/img-3.jpg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo11/images/img-4.jpg">
                    </a>
                    <ul class="social">
                        <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                        <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <a href="#" class="select-options"><i class="fa fa-arrow-right"></i> Select Options</a>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">Women's Shirt</a></h3>
                    <div class="price">$10.00 - $12.00</div>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="product-grid5">
                <div class="product-image5">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo11/images/img-5.jpg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo11/images/img-6.jpg">
                    </a>
                    <ul class="social">
                        <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                        <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <a href="#" class="select-options"><i class="fa fa-arrow-right"></i> Select Options</a>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">Men's Sweat Shirt</a></h3>
                    <div class="price">$11.00 - $15.00</div>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="product-grid5">
                <div class="product-image5">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo11/images/img-7.jpg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo11/images/img-8.jpg">
                    </a>
                    <ul class="social">
                        <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                        <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <a href="#" class="select-options"><i class="fa fa-arrow-right"></i> Select Options</a>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">Men's Sweat Shirt</a></h3>
                    <div class="price">$11.00 - $15.00</div>
                </div>
            </div>
        </div>
    </div>
</div>
<hr>

<div class="container">
    <h3 class="h3">shopping Demo-6 </h3>
    <div class="row">
        <div class="col-md-3 col-sm-6">
            <div class="product-grid6">
                <div class="product-image6">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo10/images/img-1.jpg">
                    </a>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">Men's Shirt</a></h3>
                    <div class="price">$11.00
                        <span>$14.00</span>
                    </div>
                </div>
                <ul class="social">
                    <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                    <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                    <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="product-grid6">
                <div class="product-image6">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo10/images/img-2.jpg">
                    </a>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">Women's Red Top</a></h3>
                    <div class="price">$8.00
                        <span>$12.00</span>
                    </div>
                </div>
                <ul class="social">
                    <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                    <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                    <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="product-grid6">
                <div class="product-image6">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo10/images/img-3.jpg">
                    </a>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">Men's Shirt</a></h3>
                    <div class="price">$11.00
                        <span>$14.00</span>
                    </div>
                </div>
                <ul class="social">
                    <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                    <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                    <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="product-grid6">
                <div class="product-image6">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo10/images/img-4.jpg">
                    </a>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">Men's Shirt</a></h3>
                    <div class="price">$11.00
                        <span>$14.00</span>
                    </div>
                </div>
                <ul class="social">
                    <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                    <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                    <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
<hr>

<div class="container">
    <h3 class="h3">shopping Demo-7 </h3>
    <div class="row">
        <div class="col-md-3 col-sm-6">
            <div class="product-grid7">
                <div class="product-image7">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo8/images/img-1.jpg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo8/images/img-2.jpg">
                    </a>
                    <ul class="social">
                        <li><a href="" class="fa fa-search"></a></li>
                        <li><a href="" class="fa fa-shopping-bag"></a></li>
                        <li><a href="" class="fa fa-shopping-cart"></a></li>
                    </ul>
                    <span class="product-new-label">New</span>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">Men's Blazer</a></h3>
                    <ul class="rating">
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                    </ul>
                    <div class="price">$15.00
                        <span>$20.00</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="product-grid7">
                <div class="product-image7">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo8/images/img-3.jpg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo8/images/img-4.jpg">
                    </a>
                    <ul class="social">
                        <li><a href="" class="fa fa-search"></a></li>
                        <li><a href="" class="fa fa-shopping-bag"></a></li>
                        <li><a href="" class="fa fa-shopping-cart"></a></li>
                    </ul>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">Women's White Shirt</a></h3>
                    <ul class="rating">
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                    </ul>
                    <div class="price">$15.00</div>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="product-grid7">
                <div class="product-image7">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo8/images/img-5.jpg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo8/images/img-6.jpg">
                    </a>
                    <ul class="social">
                        <li><a href="" class="fa fa-search"></a></li>
                        <li><a href="" class="fa fa-shopping-bag"></a></li>
                        <li><a href="" class="fa fa-shopping-cart"></a></li>
                    </ul>
                    <span class="product-new-label">New</span>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">Men's Blazer</a></h3>
                    <ul class="rating">
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                    </ul>
                    <div class="price">$15.00
                        <span>$20.00</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="product-grid7">
                <div class="product-image7">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo8/images/img-7.jpg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo8/images/img-8.jpg">
                    </a>
                    <ul class="social">
                        <li><a href="" class="fa fa-search"></a></li>
                        <li><a href="" class="fa fa-shopping-bag"></a></li>
                        <li><a href="" class="fa fa-shopping-cart"></a></li>
                    </ul>
                    <span class="product-new-label">New</span>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">Men's Blazer</a></h3>
                    <ul class="rating">
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                    </ul> 
                    <div class="price">$15.00
                        <span>$20.00</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<hr>

<div class="container">
    <h3 class="h3">shopping Demo-8 </h3>
    <div class="row">
        <div class="col-md-4 col-sm-6">
            <div class="product-grid8">
                <div class="product-image8">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo7/images/img-1.jpg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo7/images/img-2.jpg">
                    </a>
                    <ul class="social">
                        <li><a href="" class="fa fa-search"></a></li>
                        <li><a href="" class="fa fa-shopping-bag"></a></li>
                        <li><a href="" class="fa fa-shopping-cart"></a></li>
                    </ul>
                    <span class="product-discount-label">-20%</span>
                </div>
                <div class="product-content">
                    <div class="price">£ 8.00
                        <span>£ 10.00</span>
                    </div>
                    <span class="product-shipping">Free Shipping</span>
                    <h3 class="title"><a href="#">Women's Plain Top</a></h3>
                    <a class="all-deals" href="">See all deals <i class="fa fa-angle-right icon"></i></a>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-6">
            <div class="product-grid8">
                <div class="product-image8">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo7/images/img-3.jpg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo7/images/img-4.jpg">
                    </a>
                    <ul class="social">
                        <li><a href="" class="fa fa-search"></a></li>
                        <li><a href="" class="fa fa-shopping-bag"></a></li>
                        <li><a href="" class="fa fa-shopping-cart"></a></li>
                    </ul>
                    <span class="product-discount-label">-30%</span>
                </div>
                <div class="product-content">
                    <div class="price">£ 7.00
                        <span>£ 10.00</span>
                    </div>
                    <span class="product-shipping">Free Shipping</span>
                    <h3 class="title"><a href="#">Women's Designer Top</a></h3>
                    <a class="all-deals" href="">See all deals <i class="fa fa-angle-right icon"></i></a>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-6">
            <div class="product-grid8">
                <div class="product-image8">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo7/images/img-5.jpg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo7/images/img-6.jpg">
                    </a>
                    <ul class="social">
                        <li><a href="" class="fa fa-search"></a></li>
                        <li><a href="" class="fa fa-shopping-bag"></a></li>
                        <li><a href="" class="fa fa-shopping-cart"></a></li>
                    </ul>
                    <span class="product-discount-label">-20%</span>
                </div>
                <div class="product-content">
                    <div class="price">£ 8.00
                        <span>£ 10.00</span>
                    </div>
                    <span class="product-shipping">Free Shipping</span>
                    <h3 class="title"><a href="#">Women's Plain Top</a></h3>
                    <a class="all-deals" href="">See all deals <i class="fa fa-angle-right icon"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
<hr>

<div class="container">
    <h3 class="h3">shopping Demo-9 </h3>
    <div class="row">
        <div class="col-md-3 col-sm-6">
            <div class="product-grid9">
                <div class="product-image9">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo6/images/img-1.jpg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo6/images/img-2.jpg">
                    </a>
                    <a href="#" class="fa fa-search product-full-view"></a>
                </div>
                <div class="product-content">
                    <ul class="rating">
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                    </ul>
                    <h3 class="title"><a href="#">Women's Top</a></h3>
                    <div class="price"> $12.60 - $40.53</div>
                    <a class="add-to-cart" href="">VIEW PRODUCTS</a>
                </div>
            </div>
        </div> 
        <div class="col-md-3 col-sm-6">
            <div class="product-grid9">
                <div class="product-image9">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo6/images/img-3.jpg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo6/images/img-4.jpg">
                    </a>
                    <a href="#" class="fa fa-search product-full-view"></a>
                </div>
                <div class="product-content">
                    <ul class="rating">
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star disable"></li>
                        <li class="fa fa-star disable"></li>
                    </ul>
                    <h3 class="title"><a href="#">Men's Shirt</a></h3>
                    <div class="price"> $10.20 </div>
                    <a class="add-to-cart" href="">READ MORE</a>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="product-grid9">
                <div class="product-image9">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo6/images/img-5.jpg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo6/images/img-6.jpg">
                    </a>
                    <a href="#" class="fa fa-search product-full-view"></a>
                </div>
                <div class="product-content">
                    <ul class="rating">
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                    </ul>
                    <h3 class="title"><a href="#">Women's Top</a></h3>
                    <div class="price"> $12.60 - $40.53</div>
                    <a class="add-to-cart" href="">VIEW PRODUCTS</a>
                </div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6">
            <div class="product-grid9">
                <div class="product-image9">
                    <a href="#">
                        <img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo6/images/img-7.jpg">
                        <img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo6/images/img-8.jpg">
                    </a>
                    <a href="#" class="fa fa-search product-full-view"></a>
                </div>
                <div class="product-content">
                    <ul class="rating">
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                    </ul>
                    <h3 class="title"><a href="#">Women's Top</a></h3>
                    <div class="price"> $12.60 - $40.53</div>
                    <a class="add-to-cart" href="">VIEW PRODUCTS</a>
                </div>
            </div>
        </div>
    </div>
</div>
<hr>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    </body>
    </html>
    `
    ;
}