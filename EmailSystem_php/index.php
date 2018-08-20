<?php
error_reporting(0);
$id = $_REQUEST['id'];
$pwd = $_REQUEST['pwd'];
if(isset($_REQUEST['login']))
{
	if(empty($id) || empty($pwd))
	{
		$error = "Please enter all informations.";
	}
	else
	{
		if(file_exists("users/$id") && file_exists("users/$id/$pwd"))
		{
			header("location:userProfile.php");
		}
		else
		{
			$error = "Id or Password is incorrect. Or<br> You have not created your account yet. ";
		}
	}
}
?>

<form name="form1" method="post" action="">
  <table width="450" border="50" align="right" cellpadding="3" cellspacing="3" bordercolor="#666666" bgcolor="#F9E391">
    <tr>
      <td>ID</td>
      <td><label>
        <input name="id" type="text" id="id">
      </label></td>
    </tr>
    <tr>
      <td>PASSWORD</td>
      <td><label>
      <input name="pwd" type="password" id="pwd">
      </label></td>
    </tr>
    <tr>
      <td colspan="2"><label>
        <input name="login" type="submit" id="login" value="     LOGIN     ">
        <a href="reg.php">SIGNUP</a></label></td>
    </tr>
    <tr>
      <td colspan="2"><font color="#BB1006" size="+2"><?php echo $error; ?></font></td>
    </tr>
  </table>
</form>
