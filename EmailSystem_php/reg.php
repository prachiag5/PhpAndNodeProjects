<?php
error_reporting('E_ALL');
$id = $_REQUEST['id'];
$pwd = $_REQUEST['pwd'];
$name = $_REQUEST['name'];
$age = $_REQUEST['age'];

if(isset($_REQUEST['register']))
{
	if(empty($id) || empty($name) || empty($pwd))
	{
		$error = "Please enter all mandatory fields.";
	}
	else
	{
		if(file_exists("users/$id"))
		{
			$error ="This User Id already exist please try another one.";
		}
		else
		{
			mkdir("users/$id");
			mkdir("users/$id/inbox");
			mkdir("users/$id/sent");
			mkdir("users/$id/draft");
			mkdir("users/$id/trash");
			$fo = fopen("users/$id/$pwd","w");
			fwrite($fo,$id.",".$name.",".$age);
			header("location:welcome.php");
		}
	}
}

?>

<form name="form1" method="post" action="">
  <table width="350" border="25" align="center" cellpadding="4" cellspacing="4" bordercolor="#9900CC" bgcolor="#FFCCFF">
    <tr>
      <td>ID</td>
      <td><label>
      <input name="id" type="text" id="id">
	  <font color="#FF0000"> * </font>
      </label></td>
    </tr>
    <tr>
      <td>NAME</td>
      <td>
	  	<input name="name" type="text" id="name">
		<font color="#FF0000"> * </font>
	  </td>
    </tr>
    <tr>
      <td>PASSWORD</td>
      <td>
	  	<input name="pwd" type="text" id="pwd">
	  	<font color="#FF0000"> * </font>
	  </td>
    </tr>
    <tr>
      <td>AGE</td>
      <td>
        <select name="age" id="age">
		<?php
			$userAge = range(18,100);
			foreach($userAge as $v)
			{
				echo "<option value='$v'> $v </option>";
			}
		?>
        </select>
      </td>
    </tr>
    <tr>
      <td colspan="2"><label>
        <input name="register" type="submit" id="register" value="REGISTER">
      </label></td>
    </tr>
    <tr>
      <td colspan="2"><font color="#BB1006" size="+2"><?php echo $error; ?></font></td>
    </tr>
  </table>
</form>
