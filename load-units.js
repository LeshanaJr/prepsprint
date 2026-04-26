function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

async function loadUnitFiles() {
  if (!window.UNIT_MANIFEST) {
    throw new Error("UNIT_MANIFEST is not defined.");
  }

  const subjects = Object.keys(window.UNIT_MANIFEST);

  for (const subject of subjects) {
    const files = window.UNIT_MANIFEST[subject];

    for (const file of files) {
      await loadScript(file);
    }
  }
}
