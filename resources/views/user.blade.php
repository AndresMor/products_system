<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Shop</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<style> .navbar{margin-bottom: 20px;} </style>
</head>
<body>
<div class="container" style="padding:20px;">
	<h1 style="text-align:center;">
		Pick products
	</h1>
	{{-- <div class="collapse navbar-collapse" id="navbarSupportedContent"> --}}
		<ul class="navbar-nav ml-auto">
		<li class="nav-item dropdown">
			<a id="navbarDropdown" class="nav-link dropdown-toggle float-right" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
				{{ Auth::user()->name }} <span class="caret"></span>
			</a>

			<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
				<a class="dropdown-item" href="{{ route('logout') }}"
				onclick="event.preventDefault();
								document.getElementById('logout-form').submit();">
					{{ __('Logout') }}
				</a>

				<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
					@csrf
				</form>
			</div>
		</li>	
		</ul>
	{{-- </div> --}}
	<hr>

<div id="user-view"></div>
<script src="/js/app.js"></script>

</div>
</body>
</html>
