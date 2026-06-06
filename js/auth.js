async function login() {

 const email =
 document.getElementById("email").value;

 const password =
 document.getElementById("password").value;

 const { data, error } =
 await supabaseClient
 .from("users")
 .select("*")
 .eq("email", email)
 .eq("password", password)
 .single();

 if(error || !data){
   alert("Invalid Email or Password");
   return;
 }

 localStorage.setItem(
   "user",
   JSON.stringify(data)
 );

 if(data.role === "admin"){
   window.location.href = "admin.html";
 }

 if(data.role === "staff"){
   window.location.href = "staff.html";
 }

 if(data.role === "client"){
   window.location.href = "client.html";
 }
}