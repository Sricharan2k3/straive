export default function json2html(data) {

  const headers = [...new Set(data.flatMap(Object.keys))];


  let html = `<table data-user="namasricharan@gmail.com">\n`;
  html += `  <thead>\n    <tr>`;
  headers.forEach(header => {
    html += `<th>${header}</th>`;
  });
  html += `</tr>\n  </thead>\n  <tbody>\n`;


  data.forEach(item => {
    html += `    <tr>`;
    headers.forEach(header => {
      html += `<td>${item[header] !== undefined ? item[header] : ''}</td>`;
    });
    html += `</tr>\n`;
  });

  html += `  </tbody>\n</table>`;
  return html;
}
