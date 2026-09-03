const skills=[
{name:"Python",cat:"Programming",level:88},{name:"Java",cat:"Programming",level:76},
{name:"HTML & CSS",cat:"Web Development",level:84},{name:"JavaScript",cat:"Web Development",level:72},
{name:"MySQL",cat:"Database",level:74},{name:"Communication",cat:"Soft Skills",level:68}
];
function renderSkills(){const el=document.getElementById("skillList");el.innerHTML=skills.map((s,i)=>`<div class="skill-card"><div class="course-icon">${s.name.slice(0,2).toUpperCase()}</div><div><b>${s.name}</b><small>${s.cat}</small></div><div class="level"><div class="progress"><i style="width:${s.level}%"></i></div></div><strong>${s.level}%</strong><button class="text-btn" onclick="showToast('Skill ${s.name} selected for update')">Edit</button></div>`).join("")}
function scrollToId(id){document.getElementById(id).scrollIntoView({behavior:"smooth"})}
function showToast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove("show"),2200)}
function openModal(id){document.getElementById(id).classList.remove("hidden")}
function closeModal(id){document.getElementById(id).classList.add("hidden")}
function addSkill(){const n=document.getElementById("newSkill").value.trim();if(!n){showToast("Enter a skill name");return}skills.push({name:n,cat:document.getElementById("newCategory").value,level:+document.getElementById("newLevel").value});renderSkills();closeModal("skillModal");document.getElementById("newSkill").value="";showToast("Skill added successfully")}
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();const id=a.getAttribute("href").slice(1);document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"));document.getElementById(id).classList.remove("hidden");document.getElementById("pageTitle").textContent=document.getElementById(id).querySelector("h2")?.textContent||"Student Skill Dashboard";document.querySelectorAll("nav a").forEach(x=>x.classList.remove("active"));a.classList.add("active");window.scrollTo(0,0)}));
document.getElementById("themeBtn").onclick=()=>document.body.classList.toggle("dark");
document.getElementById("skillModal").addEventListener("click",e=>{if(e.target.id==="skillModal")closeModal("skillModal")});
renderSkills();
