async function load(){
let c=await supabaseClient.from('clients').select('*',{count:'exact',head:true});
let s=await supabaseClient.from('users').select('*',{count:'exact',head:true}).eq('role','staff');
let p=await supabaseClient.from('projects').select('*',{count:'exact',head:true});
document.getElementById('clients').innerText=c.count||0;
document.getElementById('staff').innerText=s.count||0;
document.getElementById('projects').innerText=p.count||0;
} load();