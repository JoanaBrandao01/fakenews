//adicionar um evento de clique a um botão e executar um arquivo de script quando esse botão é clicado
//"document.getElementById"-seleciona um elemento da página em html pelo seu id
// "addEventListener"-adciona um evento ao botão, que no caso é o click
document.getElementById("btn").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, { file: "content.js" });
  });
});
