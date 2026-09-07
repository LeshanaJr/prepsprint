/* Text from storage, accounts and question banks is data, never executable HTML. */
(function () {
  "use strict";
  window.escapeHTML = function (value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[character]));
  };

  window.safeImagePath = function (value) {
    // Only bundled educational assets. Never accept tracking URLs or active data URLs.
    return typeof value === "string" && /^images\/(?:[a-zA-Z0-9_-]+\/)*[a-zA-Z0-9_.-]+\.(?:png|jpe?g|webp|svg)$/i.test(value)
      && !value.includes("..") ? value : "";
  };

  window.renderPassageMedia = function (question) {
    const path = safeImagePath(question.passageImage);
    if (!path) return "";
    return `<figure class="passage-figure">
      <img src="${escapeHTML(path)}" alt="${escapeHTML(question.passageImageAlt || "Study diagram; see description below")}" class="passage-image" loading="lazy" decoding="async">
      ${question.passageImageCaption ? `<figcaption>${escapeHTML(question.passageImageCaption)}</figcaption>` : ""}
      ${question.passageImageSource ? `<p class="image-credit">${escapeHTML(question.passageImageSource)}</p>` : ""}
      ${question.passageImageDescription ? `<details class="image-description"><summary>Text description and data</summary><p>${escapeHTML(question.passageImageDescription)}</p></details>` : ""}
      <p class="image-fallback" hidden>Image unavailable. Use the passage and text description to answer.</p>
    </figure>`;
  };

  document.addEventListener("error", event => {
    if (event.target.matches?.(".passage-image")) {
      event.target.hidden = true;
      const figure = event.target.closest("figure");
      const fallback = figure?.querySelector(".image-fallback");
      if (fallback) fallback.hidden = false;
      const description = figure?.querySelector("details");
      if (description) description.open = true;
    }
  }, true);
})();
