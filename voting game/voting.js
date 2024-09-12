// Voting logic
document.addEventListener('DOMContentLoaded', (event) => {
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');
  
    const score1 = document.getElementById('s1').querySelector('h4');
    const score2 = document.getElementById('s2').querySelector('h4');
    const score3 = document.getElementById('s3').querySelector('h4');
    const score4 = document.getElementById('s4').querySelector('h4');
  
    let votes1 = 0;
    let votes2 = 0;
    let votes3 = 0;
    let votes4 = 0;
  
    function updateScore(scoreElement, votes) {
      scoreElement.textContent = votes;
    }
  
    // Event listeners for voting buttons
    btn1.addEventListener('click', () => {
      votes1++;
      updateScore(score1, votes1);
    });
  
    btn2.addEventListener('click', () => {
      votes2++;
      updateScore(score2, votes2);
    });
  
    btn3.addEventListener('click', () => {
      votes3++;
      updateScore(score3, votes3);
    });
  
    btn4.addEventListener('click', () => {
      votes4++;
      updateScore(score4, votes4);
    });
  
    const finishButton = document.querySelector('.finish button');
    finishButton.addEventListener('click', () => {
      alert(`Final Scores:\nBJP: ${votes1}\nCongress: ${votes2}\nBRS: ${votes3}\nJANASENA: ${votes4}`);
    });
  });
  