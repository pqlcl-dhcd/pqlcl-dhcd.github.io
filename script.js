const data = {
  news: [
    {
    date: "21/08/2026",
    title: "Mẫu XD NHCH, đề thi - QĐ.573",
    text: "Triển khai mẫu xây dựng ngân hàng câu hỏi, đề thi theo Quyết định 573.",
    link: "documents/tin%20t%E1%BB%A9c/mau-xd-nhch-de-thi-qd-573.html"
},
    {date:"11/08/2026", title:"Cập nhật thông tin hoạt động quản lý chất lượng", text:"Thông tin mới nhất về hoạt động đảm bảo và cải tiến chất lượng của Nhà trường."},
    {date:"08/08/2026", title:"Thông báo triển khai khảo sát ý kiến người học", text:"Triển khai kế hoạch khảo sát và tổng hợp phản hồi phục vụ cải tiến."},
    {date:"05/08/2026", title:"Hướng dẫn quản lý và cập nhật minh chứng", text:"Hướng dẫn đơn vị cập nhật, chuẩn hóa và lưu trữ minh chứng."}
  ],
  documents: [
    {code:"01/QĐ-ĐHCĐ", date:"05/08/2026", title:"Quy định về công tác đảm bảo chất lượng", type:"Quy định"},
    {code:"12/HD-QLCL", date:"02/08/2026", title:"Hướng dẫn thu thập và quản lý minh chứng", type:"Hướng dẫn"},
    {code:"08/TB-QLCL", date:"28/07/2026", title:"Thông báo về kế hoạch khảo sát người học", type:"Thông báo"},
    {code:"05/BC-QLCL", date:"20/07/2026", title:"Báo cáo kết quả hoạt động đảm bảo chất lượng", type:"Báo cáo"}
  ],
  evidence: 126
};

const newsList = document.querySelector("#newsList");
newsList.innerHTML = data.news.map(x => `
  <article class="card">
    <div class="card-date">${x.date}</div>
    <h3>${x.title}</h3>
    <p>${x.text}</p>
    <a class="view-all" href="#">Xem chi tiết →</a>
  </article>`).join("");

document.querySelector("#documentsList").innerHTML = data.documents.map(x => `
  <tr><td>${x.code}</td><td>${x.date}</td><td>${x.title}</td><td>${x.type}</td><td><a class="view-all" href="#">Xem →</a></td></tr>
`).join("");

document.querySelector("#statDocs").textContent = data.documents.length;
document.querySelector("#statNews").textContent = data.news.length;
document.querySelector("#statEvidence").textContent = data.evidence;

const allItems = [
  ...data.news.map(x => ({type:"Thông báo", title:x.title, text:x.text})),
  ...data.documents.map(x => ({type:x.type, title:x.title, text:x.code}))
];

function search(q){
  q = q.trim().toLowerCase();
  const section = document.querySelector("#results");
  const list = document.querySelector("#resultsList");
  if(!q){ section.style.display="none"; return; }
  const found = allItems.filter(x => `${x.type} ${x.title} ${x.text}`.toLowerCase().includes(q));
  section.style.display="block";
  list.innerHTML = found.length ? found.map(x => `<div class="result"><small>${x.type}</small><strong>${x.title}</strong><span>${x.text}</span></div>`).join("") : `<div class="result">Không tìm thấy kết quả phù hợp.</div>`;
  section.scrollIntoView({behavior:"smooth"});
}

document.querySelector("#searchBtn").addEventListener("click", () => search(document.querySelector("#searchInput").value));
document.querySelector("#searchInput").addEventListener("keydown", e => { if(e.key==="Enter") search(e.target.value); });
document.querySelectorAll("[data-filter]").forEach(b => b.addEventListener("click", () => search(b.dataset.filter)));

document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("open");
});
