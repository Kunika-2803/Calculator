<!DOCTYPE html>
	<head>
		<title></title>
		<link rel="stylesheet" type="text/css" href="bmi.css">
	</head>
<body>
	<form name="cal_design" id="cal_design">
		<table class="calculator" cellspacing="0" cellpadding="1">
			<tr>
				<td><div class="dropdown">
  				<button class="dropbtn" id="btn1">Weight</br><p id="valueBtn">(Kilograms)</p></button>
  				<div id="myDropdown" class="dropdown-content">
    				<a href="#" class="selector">Kilograms</a>
    				<a href="#" class="selector">Pounds</a>
  				</div>
				</div>
				</td>
				<td colspan="4"><input id="display1" class="display" name="display" value="0" size="28" maxlength="25"></td>
			</tr>
			<tr>
				<td><div class="dropdown">
  				<button class="dropbtn" id="btn2">Height</br><p id="valueBtn2">(Centimeters)</p></button>
  				<div id="myDropdown2" class="dropdown-content">
    				<a href="#" class="selector1">Centimeters</a>
    				<a href="#" class="selector1">Meters</a>
				<a href="#" class="selector1">feet</a>
    				<a href="#" class="selector1">Inches</a>
  				</div>
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
				<td><input type="button" class="btnMath" name="btnMath" value="GO" id="go"></td>
				<td><input type="button" class="btnNum" name="btnNum" value="0"></td>
				<td><input type="button" class="btnMath" name="btnNum" value="."></td>
			</tr>
		</table>
	</form>
 	<div class="result">
  	<h3 id="result"></h3>
	</div>
</div>
</body>
<script src="bmi.js"></script>
</html>