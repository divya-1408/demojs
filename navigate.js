document.querySelector(".menu-circle").onclick = () => {
  alert("Menu clicked!");
};
const cards = document.querySelectorAll(".card");

const columns = 3; // same as grid columns

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){

      const index = [...cards].indexOf(entry.target);

      const row = Math.floor(index / columns);
      const col = index % columns;

      // column-wise delay
      const delay = (col * 2 + row) * 150;

      setTimeout(()=>{
        entry.target.classList.add("show");
      }, delay);

    }
  });
},{ threshold:0.2 });

cards.forEach(card => observer.observe(card));
