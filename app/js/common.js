// function helloConsole() {
//     var staticText = 'Made with ❤️ by Demiweb';
//     var staticUrl = '> https://demiweb.pro/';
//     var hello = [`\n %c ${staticText} %c ${staticUrl} %c %c \n\n`, 'border: 1px solid #000;color: #fff; background: #3d2579; padding:5px 0;', 'color: #fff; background: #ffd800; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];

//     if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
//         window.console.log(`${staticText} - ${staticUrl}`);
//     } else if (navigator.userAgent.indexOf("Chrome") != -1) {
//         var title = '%c';

//         for (var i = 0; i < 12; i++) {
//             title += ' ';
//         }

//         window.console.log.apply(console, hello);
//         window.console.log(title, 'font: 36px/100% sans-serif; background-repeat: no-repeat; background-size: 100%; background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDYwMS4xNDQ3MSAxMzkuNjk5MiIKICAgaGVpZ2h0PSIxMzkiCiAgIHdpZHRoPSI2MDEiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg2LjQyMzU1LC04My41MTk0NDQpIgogICAgIGlkPSJsYXllcjEiPgogICAgPGcKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsLTI2NC4zMSwtMjIxLjYzMTM5KSIKICAgICAgIGlkPSJnODg4Ij4KICAgICAgPGcKICAgICAgICAgaWQ9Imc4MjkiPgoJPHBhdGgKICAgZD0ibSA2NDcuOTQ5LDE0NjkuMzk3IHYgLTMxNS4xNyBoIDIzNy43MjcgdiA2MS42ODMgaCAtMTY4Ljg0IHYgNjMuOTM0IGggMTQ4LjU3OSB2IDYxLjY4MyBoIC0xNDguNTggdiA2Ni4xODcgaCAxNzEuMDkxIHYgNjEuNjg0IEggNjQ3Ljk0OSBaIgogICBpZD0icGF0aDgxNSIgLz4KCgk8cGF0aAogICBkPSJtIDk0OS42MDksMTQ2OS4zOTcgdiAtMzE1LjE3IGggNzQuNzQgbCA4Mi44NDQsMTMzLjI3MSA4Mi44NDQsLTEzMy4yNzEgaCA3NC43NDEgdiAzMTUuMTcgaCAtNjguODg3IHYgLTIwNS43NjIgbCAtODguNjk4LDEzNC42MjMgaCAtMS44MDEgbCAtODcuNzk3LC0xMzMuMjcxIHYgMjA0LjQxIHoiCiAgIGlkPSJwYXRoODE3IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTM0My41NjgsMTQ2OS4zOTcgdiAtMzE1LjE3IGggNjkuMzM4IHYgMzE1LjE3IHoiCiAgIGlkPSJwYXRoODE5IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTU3NC45OTMsMTQ3MS42NDcgLTEwNy42MDcsLTMxNy40MiBoIDc0LjI4OCBsIDY1LjI4NiwyMTMuNDE0IDcwLjY4OCwtMjE0LjMxNSBoIDU5LjQzMiBsIDcwLjY4OCwyMTQuMzE1IDY1LjI4MiwtMjEzLjQxNCBoIDcyLjQ5MyBsIC0xMDcuNjEsMzE3LjQyIGggLTYwLjMzIGwgLTcxLjEzOCwtMjA2LjIxMSAtNzEuMTQsMjA2LjIxMSB6IgogICBpZD0icGF0aDgyMSIgLz4KCgk8cGF0aAogICBkPSJtIDE5OTYuODY2LDE0NjkuMzk3IHYgLTMxNS4xNyBoIDIzNy43MjYgdiA2MS42ODMgaCAtMTY4Ljg0IHYgNjMuOTM0IGggMTQ4LjU3OCB2IDYxLjY4MyBoIC0xNDguNTc4IHYgNjYuMTg3IGggMTcxLjA5MiB2IDYxLjY4NCBoIC0yMzkuOTc4IHoiCiAgIGlkPSJwYXRoODIzIiAvPgoKCTxwYXRoCiAgIGQ9Im0gMjI5OC41MjYsMTQ2OS4zOTcgdiAtMzE1LjE3IGggMTQ2LjMyOCBjIDM2LjMxNiwwIDYzLjc4MSw5LjMwOCA4Mi4zOTYsMjcuOTE1IDE0LjQwNywxNC40MDcgMjEuNjExLDMyLjU3MSAyMS42MTEsNTQuNDc5IDAsMjkuNzE2IC0xMy44MSw1Mi4zODEgLTQxLjQyMyw2Ny45ODUgMTkuNTA4LDcuNTA3IDM0LjIxOSwxNy4zMzUgNDQuMTIyLDI5LjQ5MSA5LjkwNiwxMi4xNTYgMTQuODU3LDI4LjQ0MyAxNC44NTcsNDguODUyIDAsMjguMjE3IC0xMC41MDksNDkuNjgyIC0zMS41MTYsNjQuMzgzIC0yMS4wMTUsMTQuNzExIC00OS44MjksMjIuMDY0IC04Ni40NDYsMjIuMDY0IGggLTE0OS45MjkgeiBtIDY3LjUzOCwtMTg3Ljc1MSBoIDYzLjkzNCBjIDMzLjMxNiwwIDQ5Ljk3NywtMTEuNDA0IDQ5Ljk3NywtMzQuMjE4IDAsLTEwLjUwNCAtMy45MDYsLTE4LjUzMSAtMTEuNzA5LC0yNC4wODggLTcuODA3LC01LjU1MSAtMTkuMDY0LC04LjMzIC0zMy43NjYsLTguMzMgaCAtNjguNDM2IHogbSAwLDEyNi45NjggaCA4Mi4zOTMgYyAzMi43MTQsMCA0OS4wNzYsLTExLjcwNyA0OS4wNzYsLTM1LjExOSAwLC0yMi44MDggLTE3LjEwOSwtMzQuMjE5IC01MS4zMjcsLTM0LjIxOSBoIC04MC4xNDIgeiIKICAgaWQ9InBhdGg4MjUiIC8+CgoJPHBhdGgKICAgZD0ibSA1MzkuNDQyLDExOTkuMDI2IGMgLTMxLjIyMiwtMjkuODYzIC03MS40NDEsLTQ0Ljc5OCAtMTIwLjY2NiwtNDQuNzk4IEggMjk1Ljg2MiB2IDE5MC43NjUgaCA2OS4zMzYgdiAtMTI4LjE4MiBoIDUzLjU3OCBjIDI4LjIxLDAgNTEuMTAzLDguODU3IDY4LjY2MiwyNi41NjQgMTcuNTYsMTcuNzE1IDI2LjMzOSw0MC41MjMgMjYuMzM5LDY4LjQzNyAwLDI4LjIxOCAtOC43MDksNTEuMTAyIC0yNi4xMTMsNjguNjYyIC0xNy40MTIsMTcuNTU5IC00MC4zNzUsMjYuMzM4IC02OC44ODgsMjYuMzM4IGggLTUzLjU3OCB2IC0wLjY1NCBoIC02OS4zMzYgdiA2My4yNCBoIDEyMi45MTUgYyA0OC45MjIsMCA4OS4wNzEsLTE1LjAwOCAxMjAuNDQsLTQ1LjAyNSAzMS4zNjIsLTMwLjAxMiA0Ny4wNTEsLTY3LjUzNiA0Ny4wNTEsLTExMi41NjEgMCwtNDUuMzE5IC0xNS42MTIsLTgyLjkxNiAtNDYuODI2LC0xMTIuNzg2IHoiCiAgIGlkPSJwYXRoODI3IiAvPgoKPC9nPgogICAgICA8ZwogICAgICAgICBpZD0iZzg1NyI+Cgk8cGF0aAogICBkPSJtIDI5NC4zNzQsMTY3OC44MSB2IC0xNDYuNTkgaCAxMC44OSB2IDE0Ni41OSB6IgogICBpZD0icGF0aDgzMSIgLz4KCgk8cGF0aAogICBkPSJtIDM4Ny45NzksMTY3OC44MSB2IC0xNDYuNTkgaCAxMC4yNjMgbCAxMDEuMTQ2LDEyNy41MzUgViAxNTMyLjIyIGggMTAuNDcxIHYgMTQ2LjU5IGggLTguMTY3IEwgMzk4LjQ1LDE1NDguNTU2IHYgMTMwLjI1NCB6IgogICBpZD0icGF0aDgzMyIgLz4KCgk8cGF0aAogICBkPSJNIDYzMS43MzYsMTY3OC44MSBWIDE1NDIuMjczIEggNTgwLjY0IHYgLTEwLjA1MyBoIDExMy4wODQgdiAxMC4wNTMgaCAtNTEuMDk3IHYgMTM2LjUzNyB6IgogICBpZD0icGF0aDgzNSIgLz4KCgk8cGF0aAogICBkPSJtIDc2NC41MDUsMTY3OC44MSB2IC0xNDYuNTkgaCAxMDQuMjg5IHYgMTAuMDUzIGggLTkzLjM5OSB2IDU3LjU5IGggODMuOTc2IHYgMTAuMDUxIGggLTgzLjk3NiB2IDU4Ljg0NiBoIDk0LjQ0NiB2IDEwLjA1MSBIIDc2NC41MDUgWiIKICAgaWQ9InBhdGg4MzciIC8+CgoJPHBhdGgKICAgZD0ibSA5NDIuNTA2LDE2NzguODEgdiAtMTQ2LjU5IGggNjEuNTY4IGMgMTcuODY5LDAgMzEuNjIyLDQuODE4IDQxLjI1NSwxNC40NTEgNy4zOTgsNy40MDIgMTEuMDk4LDE2LjYxNSAxMS4wOTgsMjcuNjQzIDAsMTEuODY3IC0zLjkxLDIxLjM1OSAtMTEuNzI3LDI4LjQ4IC03LjgyLDcuMTE5IC0xOC4yMTksMTEuNTkgLTMxLjIwMiwxMy40MDIgbCA0OC4zNzUsNjIuNjEzIGggLTEzLjgyMSBsIC00Ni43LC02MC43MyBoIC00Ny45NTYgdiA2MC43MyBoIC0xMC44OSB6IG0gMTAuODksLTcwLjU3MyBoIDQ5LjQyMSBjIDEyLjU2NSwwIDIyLjgyNywtMy4wMzUgMzAuNzg1LC05LjEwNyA3Ljk1OCwtNi4wNzQgMTEuOTM3LC0xNC4zNDYgMTEuOTM3LC0yNC44MTYgMCwtOS45MSAtMy43MDIsLTE3LjcyOSAtMTEuMSwtMjMuNDU1IC03LjQwMiwtNS43MjMgLTE3LjczMiwtOC41ODYgLTMwLjk5MywtOC41ODYgaCAtNTAuMDUgeiIKICAgaWQ9InBhdGg4MzkiIC8+CgoJPHBhdGgKICAgZD0ibSAxMTMxLjYwNiwxNjc4LjgxIHYgLTE0Ni41OSBoIDEwLjI2MiBsIDEwMS4xNDYsMTI3LjUzNSBWIDE1MzIuMjIgaCAxMC40NyB2IDE0Ni41OSBoIC04LjE2NyBsIC0xMDMuMjQxLC0xMzAuMjU0IHYgMTMwLjI1NCB6IgogICBpZD0icGF0aDg0MSIgLz4KCgk8cGF0aAogICBkPSJtIDEzMjIuMTcyLDE2NzguODEgNjguMjcsLTE0Ny42MzUgaCAxMC40NzEgbCA2OC4yNywxNDcuNjM1IGggLTExLjkzOCBsIC0xOC42MzYsLTQxLjA0NSBoIC04Ni40ODkgbCAtMTguNjM5LDQxLjA0NSB6IG0gMzQuNTU0LC01MC44ODUgaCA3Ny4yNzUgbCAtMzguNTM0LC04NC44MTQgeiIKICAgaWQ9InBhdGg4NDMiIC8+CgoJPHBhdGgKICAgZD0ibSAxNTc4LjQ5NSwxNjc4LjgxIHYgLTEzNi41MzcgaCAtNTEuMDk5IHYgLTEwLjA1MyBoIDExMy4wODUgdiAxMC4wNTMgaCAtNTEuMDk3IHYgMTM2LjUzNyB6IgogICBpZD0icGF0aDg0NSIgLz4KCgk8cGF0aAogICBkPSJtIDE3MTIuNzI4LDE2NzguODEgdiAtMTQ2LjU5IGggMTAuODkxIHYgMTQ2LjU5IHoiCiAgIGlkPSJwYXRoODQ3IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTkyNi41NCwxNjU4LjkxNSBjIC0xMy44MjYsMTQuOTQxIC0zMS41NTYsMjIuNDA4IC01My4xOTIsMjIuNDA4IC0yMS42NDMsMCAtMzkuMzAxLC03LjQzNCAtNTIuOTgzLC0yMi4zMDMgLTEzLjY4NCwtMTQuODY3IC0yMC41MjIsLTMyLjcwMSAtMjAuNTIyLC01My41MDQgMCwtMjAuNjYyIDYuOTEsLTM4LjQ2MSAyMC43MzEsLTUzLjQwMiAxMy44MiwtMTQuOTM4IDMxLjU1MSwtMjIuNDA2IDUzLjE5MywtMjIuNDA2IDIxLjYzNywwIDM5LjI5Niw3LjQzNCA1Mi45NzksMjIuMzAzIDEzLjY4MywxNC44NjkgMjAuNTI1LDMyLjcwMyAyMC41MjUsNTMuNTA2IDAsMjAuNjYyIC02LjkxMiwzOC40NjIgLTIwLjczMSw1My4zOTggeiBtIC05Ny40ODMsLTYuNzAxIGMgMTEuOTM2LDEyLjg0OCAyNi44MzYsMTkuMjcgNDQuNzEsMTkuMjcgMTcuODY4LDAgMzIuNywtNi4zNTIgNDQuNTAxLC0xOS4wNTkgMTEuNzk0LC0xMi43MDMgMTcuNjk0LC0yOC4zNCAxNy42OTQsLTQ2LjkwOCAwLC0xOC4yODkgLTUuOTY5LC0zMy44NTQgLTE3LjkwNCwtNDYuNjk5IC0xMS45MzgsLTEyLjg0NCAtMjYuODQyLC0xOS4yNjggLTQ0LjcxLC0xOS4yNjggLTE3Ljg3NSwwIC0zMi43MDcsNi4zNTUgLTQ0LjUwMiwxOS4wNTcgLTExLjc5OSwxMi43MDUgLTE3LjY5MywyOC4zNDQgLTE3LjY5Myw0Ni45MSAtMTBlLTQsMTguMjkxIDUuOTY1LDMzLjg1NSAxNy45MDQsNDYuNjk3IHoiCiAgIGlkPSJwYXRoODQ5IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMjAyMi4wMjgsMTY3OC44MSB2IC0xNDYuNTkgaCAxMC4yNjEgbCAxMDEuMTQ2LDEyNy41MzUgViAxNTMyLjIyIGggMTAuNDcxIHYgMTQ2LjU5IGggLTguMTY3IGwgLTEwMy4yNCwtMTMwLjI1NCB2IDEzMC4yNTQgeiIKICAgaWQ9InBhdGg4NTEiIC8+CgoJPHBhdGgKICAgZD0ibSAyMjEyLjU5MywxNjc4LjgxIDY4LjI3LC0xNDcuNjM1IGggMTAuNDcgbCA2OC4yNywxNDcuNjM1IGggLTExLjkzNSBsIC0xOC42MzksLTQxLjA0NSBoIC04Ni40ODggbCAtMTguNjM5LDQxLjA0NSB6IG0gMzQuNTU2LC01MC44ODUgaCA3Ny4yNzEgbCAtMzguNTMzLC04NC44MTQgeiIKICAgaWQ9InBhdGg4NTMiIC8+CgoJPHBhdGgKICAgZD0ibSAyNDI4LjI5LDE2NzguODEgdiAtMTQ2LjU5IGggMTAuODkxIHYgMTM2LjUzOSBoIDg2LjA2NSB2IDEwLjA1MSB6IgogICBpZD0icGF0aDg1NSIgLz4KCjwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=);');
//     } else {
//         var title = 'demiweb';
//         var banner = `\n%c${title.split('').join('%c %c')}%c\n`;
//         var styler = [];

//         var symbol = [
//             'font: 32px/1.5 Helvetica, Arial, sans-serif',
//             'text-transform: uppercase',
//             'color: #fff',
//             'background-color: #ffd800',
//             'padding: 4px 14px',
//         ].join(';');

//         title.split('').forEach(() => {
//             styler.push(symbol);
//             styler.push('');
//         });

//         window.console.log(`${staticText} - ${staticUrl}`);
//         window.console.log(banner, ...styler);
//     }
// }

// helloConsole();

// дата
const NOVA_POSHTA_KEY = "1740421d25eb8f97770e5d4692da3d42";
const HERE_API_KEY = "yjn3OfbBYlHprFcBYhHKsJbQ-plOYKHnKUq0FRHdY54"; //https://developer.here.com/documentation/routing-api/api-reference-swagger.html

const svgFlag = '<svg width="16" height="16" x="0px" y="0px"\n' +
    '\t viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">\n' +
    '<polyline style="fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;" points="6,28 6,5 26,5 26,19 6,19 "/>\n' +
    '<rect x="22" y="5" width="4" height="4"/>\n' +
    '<rect x="19" y="15" width="3" height="4"/>\n' +
    '<rect x="19" y="9" width="3" height="3"/>\n' +
    '<rect x="13" y="15" width="3" height="4"/>\n' +
    '<rect x="13" y="9" width="3" height="3"/>\n' +
    '<rect x="6" y="15" width="4" height="4"/>\n' +
    '<rect x="6" y="9" width="4" height="3"/>\n' +
    '<rect x="22" y="12" width="4" height="3"/>\n' +
    '<rect x="16" y="12" width="3" height="3"/>\n' +
    '<rect x="10" y="12" width="3" height="3"/>\n' +
    '<rect x="16" y="5" width="3" height="4"/>\n' +
    '<rect x="10" y="5" width="3" height="4"/>\n' +
    '</svg>'
const buttonGo = document.getElementById("button-go");
const numTon = document.getElementById("num-ton");
const distanceKm = document.getElementById("distance");
const resultCash = document.getElementById("result");
const road = document.getElementById("road");
const addPoint = document.getElementById('add-point');
const selectTon = document.getElementById('select-ton');
const roadHours = document.getElementById('road-hours');
const speed = 70; //км.ч
let polyline;
let markers = [];

// добавление пункта
addPoint.addEventListener("click", (e) => {
    e.preventDefault();
    const clonePoint = document.querySelector(".js-point").cloneNode(true);
    const removeBlock = document.createElement("div");
    removeBlock.classList.add("remove-point");
    removeBlock.innerHTML = "Видалити точку";
    removeBlock.addEventListener("click", () => {
        addPoint.closest('.point').style.display = "block";
        resetMapAndCalc();
        clonePoint.remove()
    });
    clonePoint.classList.remove("start-point");
    clonePoint.classList.add("stop-point");
    clonePoint.appendChild(removeBlock);
    clonePoint.querySelector("p").innerHTML = "Адреса зупинки";
    clonePoint.querySelector("input").value = "";
    pointInit(clonePoint)
    document.querySelector(".start").appendChild(clonePoint);
});
//---------------------------------

//закрытие автокомплита
document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains('input-road')) return
    const autocomplete = document.querySelectorAll('.autocomplete');
    autocomplete.forEach((list) => list.classList.remove('autocomplete-visible'));
})
//------------------

//map streets init


//----------------

Array.from(document.querySelectorAll(".js-point"))//события поиска подстановки значений в инпут
    .forEach(point => pointInit(point));

buttonGo.addEventListener("click", calculate); // расчет

function fetchAddress(city, list) {
    fetch("https://api.novaposhta.ua/v2.0/json/", {
        method: "POST",
        body: JSON.stringify({
            apiKey: NOVA_POSHTA_KEY,
            modelName: "Address",
            calledMethod: "getSettlements",
            methodProperties: {
                FindByString: `${city}`,
                Limit: "20",
            },
        }),
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            list.innerHTML = "";
            setAddress(data.data, list);
            if (list.innerHTML === "") list.innerHTML = `<li class="autocomplete__point"><b>Не знайдено</b></li>`
            list.closest('.autocomplete').classList.add('autocomplete-visible');
        });
}

function searchAddress(e, list) {
    if (e.target.value.length > 2) {
        fetchAddress(e.target.value, list);
    }
}

const setAddress = (data, list) => {
    return data.map((city) => {
        renderAddress({
            city: city.Description,
            region: city.AreaDescription,
            village: city.SettlementTypeDescription,
            lat: city.Latitude,
            lon: city.Longitude,
        }, list);
    });
};

function renderAddress(currentData, list) {
    const json = JSON.stringify(currentData);
    list.innerHTML += `<li class="autocomplete__point" data-json='${json}' onclick="selectAddressItem(this)">
      <span><strong>${currentData.city} </strong>${currentData.region} ${currentData.village}</span> 
  </li>`
}

function selectAddressItem(li) {
    const dataItem = JSON.parse(li.dataset.json);
    const point = li.closest('.point');
    point.querySelector('input').value = `${dataItem.city}, ${dataItem.region}, ${dataItem.village}`
    point.dataset.point = li.dataset.json;
}

function pointInit(point) {
    const input = point.querySelector("input");
    const list = point.querySelector(".list");
    const autocomplete = point.querySelector(".autocomplete");
    const clear = point.querySelector(".clear");
    if (!input) return
    input.addEventListener('input', (e) => {
        if (!input.value.length) reset();
        searchAddress(e, list)
    });
    input.addEventListener('focus', () => {
        if (input.value.length) autocomplete.classList.add('autocomplete-visible')
    })
    if (clear) {
        clear.addEventListener("click", () => reset())
    }

    function reset() {
        input.value = "";
        list.innerHTML = "";
        autocomplete.classList.remove('autocomplete-visible');
        point.removeAttribute('data-point');
        resetMapAndCalc();
    }
}

function c2to10(km) {
    let result = 0
    switch (true) {
        case km <= 60:
            result = km * 200 - 1000;
            break;
        case (km >= 61 && km <= 100):
            result = km * 130 - 2000;
            break;
        case (km >= 101 && km <= 150):
            result = km * 100 - 1500;
            break;
        case (km >= 151 && km <= 250):
            result = km * 80 - 2000;
            break;
        case (km >= 251 && km <= 300):
            result = km * 75 - 2000;
            break;
        case (km >= 301 && km <= 450):
            result = km * 65 - 4000;
            break;
        case (km >= 451 && km <= 600):
            result = km * 60 - 4000;
            break;
        default:
            result = km * 58 - 5000;
    }
    return result;
}

function c10to22(km) {
    let result = 0
    switch (true) {
        case km <= 60:
            result = km * 200;
            break;
        case (km >= 61 && km <= 100):
            result = km * 130;
            break;
        case (km >= 101 && km <= 150):
            result = km * 100;
            break;
        case (km >= 151 && km <= 250):
            result = km * 80;
            break;
        case (km >= 251 && km <= 300):
            result = km * 75;
            break;
        case (km >= 301 && km <= 450):
            result = km * 65;
            break;
        case (km >= 451 && km <= 600):
            result = km * 60;
            break;
        default:
            result = km * 58;
    }
    return result;
}

function c22to24(km) {
    let result = 0
    switch (true) {
        case km <= 60:
            result = km * 200 + 3000;
            break;
        case (km >= 61 && km <= 100):
            result = km * 130 + 3000;
            break;
        case (km >= 101 && km <= 150):
            result = km * 100 + 4000;
            break;
        case (km >= 151 && km <= 250):
            result = km * 80 + 4000;
            break;
        case (km >= 251 && km <= 300):
            result = km * 75 + 4000;
            break;
        case (km >= 301 && km <= 450):
            result = km * 65 + 4000;
            break;
        case (km >= 451 && km <= 600):
            result = km * 60 + 6000;
            break;
        default:
            result = km * 58 + 8000;
    }
    return result;
}

function setCalc(km, ton) {
    if (ton >= 2 && ton <= 10) return c2to10(km);
    if (ton >= 10.1 && ton <= 22) return c10to22(km);
    if (ton >= 22.1 && ton <= 24) return c22to24(km);
}

function roadHoursCalc(km) {
    const hours = Math.trunc(km / speed);
    const minute = Math.trunc(km % speed);
    return `≈ ${hours} г ${minute} хв в дорозі`
}

let map = L.map("map-cont", {
    center: [49.298715689383414, 31.573825822797485],
    zoom: 6.4,
    scrollWheelZoom: true
});
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

function calculate(e) {
    e.preventDefault();
    let ton = +selectTon.value;
    ton = ton.toFixed(1);
    let km = 0;
    let result = 0;
    const roadUser = [];
    const points = document.querySelectorAll('.js-point');
    points.forEach((point) => {
        if (point.dataset.point) {
            const data = JSON.parse(point.dataset.point);
            roadUser.push(data)
        }
    });
    if (roadUser.length < 2) return
    resetMapAndCalc();
    const origin = `${roadUser[0].lat},${roadUser[0].lon}`;
    const destination = `${roadUser[roadUser.length - 1].lat},${roadUser[roadUser.length - 1].lon}`;
    let waipoints = [];



    // map.flyTo([49.298715689383414, 31.573825822797485], 6.4);


    // $([document.documentElement, document.body]).animate({
    //   scrollTop: $(".delivery-result").offset().top
    // }, 500);
    if (roadUser.length > 2) {
        waipoints = roadUser.slice(1, roadUser.length - 1).map(w => `&via=${w.lat},${w.lon}`);
    }

    fetch(`https://router.hereapi.com/v8/routes?origin=${origin}&destination=${destination}${waipoints.join('')}&return=polyline,summary&transportMode=truck&exclude[countries]=MDA,ROU&apikey=${HERE_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            let decodePoints = [];
            data.routes.forEach(rout => {
                rout.sections.forEach(section => {
                    km += section.summary.length;
                    decodePoints = [...decodePoints, ...decode(section.polyline).polyline];
                });
            });
            polyline = new L.polyline(decodePoints, {color: '#0d99ff'});
            map.addLayer(polyline);
            map.fitBounds(polyline.getBounds());

            km = km / 1000;
            result = setCalc(km, ton);
            numTon.innerHTML = ton;
            distanceKm.innerHTML = km.toFixed(1);
            resultCash.innerHTML = result.toFixed(1);
            roadHours.innerHTML = roadHoursCalc(km);
            roadUser.forEach((city, i) => {
                const icon = L.divIcon({
                    iconSize: [40, 40],
                    iconUrl: "../img/place2.svg",
                    className: `custom-pane`,
                    html: roadUser.length - 1 === i ? svgFlag : i + 1,
                });
                const marker = L.marker([+city.lat, +city.lon], {
                    icon: icon,
                });
                marker.addTo(map);
                markers.push(marker);
                road.innerHTML += `<p>${city.city}</p>`;
            });
        });

    document.querySelector('.delivery-result').classList.add('visible');
    let scrollDiv = document.querySelector('.delivery-result').offsetTop;

    window.scrollTo({ top: scrollDiv-140, behavior: 'smooth'});

}

function resetMapAndCalc() {
    numTon.innerHTML = 0;
    distanceKm.innerHTML = 0;
    resultCash.innerHTML = 0;
    road.innerHTML = "";
    roadHours.innerHTML = "";
    if (polyline) {
        map.removeLayer(polyline);
    }
    if (markers.length) {
        markers.forEach(m => map.removeLayer(m))
        markers = [];
    }
}

function validTon(input) {
    const min = +input.getAttribute('min') || 2;
    const max = +input.getAttribute('max') || 24;
    const value = Number(+input.value).toFixed(1);
    input.value = value;
    if (value < min) input.value = min;
    if (value > max) input.value = max;
}