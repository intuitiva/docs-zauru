import React, {useState} from "react";
import Icon from "./Icon";

/**
 * FeedbackWidget — "¿Te fue útil esta guía?" with 👍/👎 buttons.
 * Stateless for now (logs to console); can be wired to an endpoint later.
 */
export default function FeedbackWidget() {
  const [vote, setVote] = useState(null);

  const handle = (choice) => {
    setVote(choice);
    if (typeof window !== "undefined" && window.console) {
      window.console.log("[zauru-feedback]", {useful: choice === "up", path: window.location.pathname});
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
