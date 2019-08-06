const template = opts => {
	return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>SSR Demo</title>
    </head>
    <body>
      <div id="root">${opts.body}</div>
    </body>
    <script>
      window.__initialState = ${opts.initialState}
    </script>
    <script src='/assets/client.bundle.js'></script>
  </html>
  `;
};

export default template;
