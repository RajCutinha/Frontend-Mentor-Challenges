const adviceID = document.getElementById("advice_id") as HTMLSpanElement;
const adviceElement = document.getElementById("advice") as HTMLHeadingElement;

((): void => {
  console.log("running");

  fetch("https://api.adviceslip.com/advice")
    .then((res: Response) => res.json())
    .then((json) => {
      const { advice, id }: { advice: string; id: number } = json.slip;

      adviceElement.innerText = advice;
      adviceID.innerText = "#" + id.toString();
    })
    .catch((e: Error) => console.log(e));
})();

export {};
