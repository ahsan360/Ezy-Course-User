 
import './style.css';
 
const button = document.querySelector<HTMLButtonElement>(".btn");
const inputElements = document.querySelectorAll<HTMLInputElement>(".input");

const form = document.querySelector<HTMLFormElement>("form");
form?.addEventListener('submit', (event) => {
  event.preventDefault();  

   
  const showData = document.querySelector<HTMLDivElement>("#showData");

  const createCard = document.createElement('div');
  createCard.innerHTML = `
    <div class="card">
      <div class="card-header">
        <h2>Ezy Course User</h2>
      </div>
      <div class="card-body">
        <div class="user-info">
          <label>Name:</label>
          <span>${inputElements[0].value}</span>
        </div>
        <div class="user-info">
          <label>Age:</label>
          <span>${inputElements[1].value}</span>
        </div>
        <div class="user-info">
          <label>ID:</label>
          <span>${inputElements[2].value}</span>
        </div>
      </div>
    </div>`;
  showData?.appendChild(createCard);
});
