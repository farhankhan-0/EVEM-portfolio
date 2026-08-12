const data={
  1:{
    meta:'EVEM • ASSIGNMENT 01 • STUDENT WORK',
    title:'My Commitment to a Sustainable Future',
    file:'assets/assignments/assignment-01.pdf'
  },
  2:{
    meta:'EVEM • ASSIGNMENT 02 • STUDENT WORK',
    title:'E-Waste Mastermind',
    file:'assets/assignments/assignment-02.png'
  },
  3: {
    meta: "EVEM • ASSIGNMENT 03",
    title: "Your Assignment Title",
    file: "assets/assignments/assignment-03.pdf"
}
};

document.querySelectorAll('.assignment').forEach(card=>{
  card.addEventListener('click',()=>{
    const a=data[card.dataset.id];
    window.open(a.file,'_blank');
  });
});

document.getElementById('mode').onclick=()=>{
  document.body.classList.toggle('light');
  document.getElementById('mode').textContent =
    document.body.classList.contains('light') ? '☀' : '◐';
};
