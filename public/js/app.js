const div = React.DOM.div;
const h1 = React.DOM.h2;
function RandomBox() {
  const colorBackground = 'hsla(' + Math.floor(Math.random() * (360)) + ', 75%, 58%, 1)';

  var fontFamily = ['Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva', 'Verdana', 'sans-serif'];

  const fontStyle = fontFamily[Math.floor(Math.random() * fontFamily.length)];

  const styleH1 = {
    color: 'white',
    textAling: 'center',
    paddingTop: '70px',
  };

  const containerStyle = {
    background: colorBackground,
    fontFamily: fontStyle,
    width: '500px',
    height: '200px',
  };
  return div({ style: containerStyle },
    h1({ style: styleH1 }, 'Random-box')
  );
}

setInterval(function() {
  ReactDOM.render(
    RandomBox(),
    document.getElementById('root')
  );
}, 2000);
