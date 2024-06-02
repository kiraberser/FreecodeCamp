let price = 19.5;
let cid = [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
];

const cashInput = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");

const makePurchase = () => {
  let cash = Number(cashInput.value);

  switch (true) {
    case !cash:
    case cash < price:
      alert("Customer does not have enough money to purchase the item")
      setTimeout(
        () => alert("Customer does not have enough money to purchase the item"),
        0
      );
      break;
    case cash === price:
      changeDue.textContent = "No change due - customer paid with exact cash";
      break;
    default:
      const notes = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
      let change = cash * 100 - price * 100;
      let depletedNumberOfNotes = 0;
      let changeDueTextContent = "";

      for (let i = notes.length - 1; i >= 0; i--) {
        if (cid[i][1] === 0) depletedNumberOfNotes++;

        const note = notes[i];
        const numberOfNotesToReturn = Math.trunc(change / note);
        if (!numberOfNotesToReturn) continue;

        const cashAmountOfNotesInCashDrawer = cid[i][1] * 100;
        if (!cashAmountOfNotesInCashDrawer) continue;

        const cashToReturnFromNote = Math.min(
          numberOfNotesToReturn * note,
          cashAmountOfNotesInCashDrawer
        );

        if (cashToReturnFromNote > 0) {
          const cashToSubstract = cashToReturnFromNote / 100;
          cid[i][1] -= cashToSubstract;
          if (cid[i][1] === 0) depletedNumberOfNotes++;
          changeDueTextContent += `${cid[i][0]}: $${cashToSubstract} `;
          change -= cashToReturnFromNote;
        }
      }

      if (change) {
        changeDueTextContent = "Status: INSUFFICIENT_FUNDS";
      } else if (depletedNumberOfNotes === cid.length) {
        changeDueTextContent = "Status: CLOSED " + changeDueTextContent;
      } else {
        changeDueTextContent = "Status: OPEN " + changeDueTextContent;
      }

      changeDue.textContent = changeDueTextContent;
  }
};

purchaseBtn.addEventListener("click", makePurchase);
