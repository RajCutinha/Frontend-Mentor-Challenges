const adviceID = document.getElementById("advice_id") as HTMLSpanElement;
const adviceElement = document.getElementById("advice") as HTMLHeadingElement;
const adviceDice = document.getElementById("advice_dice") as HTMLButtonElement;

adviceDice.addEventListener("click", (): void => {
  console.log("Running");
  getAdvice();
});

function getAdvice(): void {
  fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
    .then((res: Response) => res.json())
    .then((json) => {
      const { advice, id }: { advice: string; id: number } = json.slip;

      adviceElement.innerText = advice;
      adviceID.innerText = "#" + id.toString();
    })
    .catch((e: Error) => console.log(e));
}

((): void => getAdvice())();
