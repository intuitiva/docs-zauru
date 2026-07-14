import React, {useState} from "react";
import Icon from "./Icon";

/**
 * FeedbackWidget — "¿Te fue útil esta guía?" with 👍/👎 buttons.
 * Sends a "Feedback" custom event to Plausible (goal: "Feedback")
 * with a `useful` prop ("yes" / "no") for up/down breakdown.
 */
export default function FeedbackWidget() {
  const [vote, setVote] = useState(null);

  const handle = (choice) => {
    setVote(choice);
    if (typeof window !== "undefined" && typeof window.plausible === "function") {
      window.plausible("Feedback", {
        props: { useful: choice === "up" ? "yes" : "no" },
      });
    }
  };

  return (
    <div className="zauru-feedback">
      <p className="zauru-feedback__question">¿Le fue útil esta guía?</p>
      <button
        type="button"
        className={`zauru-feedback__btn${vote === "up" ? " is-selected" : ""}`}
        onClick={() => handle("up")}
        aria-label="Sí, me fue útil"
        aria-pressed={vote === "up"}>
        <Icon name="thumbs-up" />
        Sí
      </button>
      <button
        type="button"
        className={`zauru-feedback__btn${vote === "down" ? " is-selected" : ""}`}
        onClick={() => handle("down")}
        aria-label="No, no me fue útil"
        aria-pressed={vote === "down"}>
        <Icon name="thumbs-down" />
        No
      </button>
      {vote ? (
        <span className="zauru-feedback__thanks">
          ¡Gracias por su comentario!
        </span>
      ) : null}
    </div>
  );
}
