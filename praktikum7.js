function isiProvinsi(){
  const provinsi = document.getElementById("provinsi").value; 
  console.log(provinsi);

  if (provinsi=="DKI Jakarta"){
      var array = ["Jakarta Pusat", "Jakarta Utara", "Jakarta Selatan", "Jakarta Barat", "Jakarta Timur"]
  }
  else if (provinsi=="Banten"){
      var array = ["Tangerang", "Tangerang Selatan", "Serang", "Cilegon", "Lebak"]
  }
  else if (provinsi=="Jawa Timur"){
      var array = ["Surabaya", "Probolinggo", "Pasuruan", "Mojokerto", "Malang"]
  }
  else if (provinsi=="Jawa Barat"){
      var array = ["Tasikmalaya", "Sukabumi", "Depok", "Cirebon", "Cimahi"]
  }
  var string = ""
  for (let index=0; index < array.length; index++){
    string  = string + "<option>" + array[index] + "</option>";
  }

  let namakota = (document.getElementById("kota").innerHTML = string);
}
function isiKota(){
    const provinsi = document.getElementById("provinsi").value;
    const kota = document.getElementById("kota").value;
    var hasil = document.getElementById("hasil");
    hasil.innerText = "Pada Provinsi " + provinsi + " ada Kota " + kota + ".";
}