function loadUnitFiles() {
  const files = window.questionManifest || [];

  return Promise.all(
    files.map((file) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = file;
        script.onload = resolve;
        script.onerror = () => reject(new Error(`Failed to load ${file}`));
        document.body.appendChild(script);
      });
    })
  );
}
