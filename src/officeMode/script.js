var icon = document.createElement("link");
icon.href = "http://www.google.com/favicon.ico";
icon.rel = "icon";
icon.type = "image/x-icon";

document.getElementsByTagName("head").item(0).appendChild(icon);

document.title = document.title[0] + " Google";