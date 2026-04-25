window.subjects = window.subjects || [];

const basePath = "questions/ap-gov/";

for (const file of window.AP_GOV_UNIT_FILES) {
  const script = document.createElement("script");
  script.src = basePath + file;
  script.async = false;
  document.head.appendChild(script);
}
