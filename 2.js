// Pada sebuah form, terdapat 2 buah field yaitu: Username dan Password. Buatlah method/function untuk memvalidasi field-field tersebut, dengan requirement sebagai berikut:
// ●   	Disarankan menggunakan REGEX
// Format Username:  Username harus diawali huruf kecil, tidak boleh menggunakan special character kecuali ‘_’, minimal 5 karakter dan maksimal 12 karakter
// ●   	Format Password: merupakan 7 digit karakter dengan kombinasi 1 simbol, 1 angka dan 5 huruf besar.
// Clue:
// Peserta hanya diminta membuat function validasi, tidak boleh membuat form HTML.
// Examples:
// -       usernameValidity(“friska_putri”)
// 	return true
// -       usernameValidity(“Friska-putri”)
// 	return false
// -       passwordValidity(“1WORLD!”)
// 	return true
usernameValidity("friska_putri");
usernameValidity("Friska-putri");
function usernameValidity(usernameValidity) {
  const pattern = new RegExp("^[a-z_]{5,12}");
  console.log(pattern.test(usernameValidity));
}
passwordValidity("1WORLD!");
function passwordValidity(passwordValidity) {
  if (passwordValidity.length == 7) {
    const pattern = new RegExp("[0-9]{1}[A-Z]{5}");
    console.log(pattern.test(passwordValidity));
  }
}
