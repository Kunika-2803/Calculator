<!DOCTYPE html>
	<head>
		<title></title>
		<link rel="stylesheet" type="text/css" href="convert.css">
	</head>
<body>
	<form name="cal_design" id="cal_design">
		<table class="calculator" cellspacing="0" cellpadding="1">
			<tr>
				<td><div class="dropdown">
  				<button class="dropbtn" id="btn1">Seconds</button>
  				<div id="myDropdown" class="dropdown-content">
    				<a href="#" class="selector">Milliseconds</a>
    				<a href="#" class="selector">Seconds</a>
    				<a href="#" class="selector">Minutes</a>
				<a href="#" class="selector">Hours</a>
    				<a href="#" class="selector">Days</a>
    				<a href="#" class="selector">Weeks</a>
  				</div>
				</div>
				</td>
				<td colspan="4"><input id="display1" class="display" name="display" value="0" size="28" maxlength="25"></td>
			</tr>
			<tr>
				<td><div class="dropdown">
  				<button class="dropbtn" id="btn2">Milliseconds</button>
				</div>
				</td>
				<td colspan="4"><input id="display2" class="display" name="display" value="0" size="28" maxlength="25"></td>
			</tr>
			<tr>
				<td><input type="button" class="btnNum" name="btnNum" value="7"></td>
				<td><input type="button" class="btnNum" name="btnNum" value="8"></td>
				<td><input type="button" class="btnNum" name="btnNum" value="9"></td>
				<td rowspan="2"><input type="button" class="btnUnit" name="btnOpps" value="AC"></td>
			</tr>
			<tr>
				<td><input type="button" class="btnNum" name="btnNum" value="4"></td>
				<td><input type="button" class="btnNum" name="btnNum" value="5"></td>
				<td><input type="button" class="btnNum" name="btnNum" value="6"></td>
			</tr>
			<tr>
				<td><input type="button" class="btnNum" name="btnNum" value="1"></td>
				<td><input type="button" class="btnNum" name="btnNum" value="2"></td>
				<td><input type="button" class="btnNum" name="btnNum" value="3"></td>
				<td rowspan="2"><input type="button" class="btnUnit" name="btnOpps" value="<--"></td>
			</tr>
			<tr>
				<td><input type="button" class="btnMath" name="btnMath" value=""></td>
				<td><input type="button" class="btnNum" name="btnNum" value="0"></td>
				<td><input type="button" class="btnMath" name="btnNum" value="."></td>
			</tr>
		</table>
		
	</form>
</body>
<script src="convertor.js"></script>
</html>