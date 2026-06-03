const resumeBtn = document.getElementById("resumeBtn");

resumeBtn.addEventListener("click", () => {

  const link = document.createElement("a");

  link.href = "Sameed_Shaikh_Resume.pdf";
  link.download = "Sameed_Shaikh_Resume.pdf";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

});