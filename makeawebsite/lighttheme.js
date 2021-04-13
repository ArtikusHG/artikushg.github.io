var link;
var lightTheme = JSON.parse(localStorage.getItem("lightTheme"));
function switchToLight() {
  link = document.createElement("link");
  link.rel  = "stylesheet";
  link.type = "text/css";
  link.href = "lighttheme.css";
  document.head.appendChild(link);
}
function switchTheme() {
  if (!lightTheme) switchToLight();
  else if (link) link.remove();
  localStorage.setItem("lightTheme", !lightTheme);
  lightTheme = !lightTheme;
}
if (lightTheme) switchToLight();
else if (link) link.remove();
