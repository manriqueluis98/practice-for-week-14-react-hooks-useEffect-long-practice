import { useState, useEffect } from "react";
import Message from "./components/Message";
import PictureDisplay from "./components/PictureDisplay";

function App() {
  const [size, setSize] = useState('m');
  const [featherCount, setFeatherCount] = useState(0);
  const [featherColors, setFeatherColors] = useState([]);
  const [isRed, setIsRed] = useState(false);
  const [isOrange, setIsOrange] = useState(false);
  const [isBrown, setIsBrown] = useState(false);
  const [isLightBrown, setIsLightBrown] = useState(false);
  const [isYellow, setIsYellow] = useState(false);

  const [sizeClass, setSizeClass] = useState('')


  useEffect(() => {
    console.log('Message', size);

    let cname = '';
    switch (size) {
        case 'm':
            cname = 'medium';
            break;
        case 'l':
            cname = 'large';
            break;
        case 'xl':
            cname = 'xlarge';
            break;
        default:
            cname = 'small';
            break;
    }
    //console.log(cname);

    setSizeClass(cname);

  }, [size])


  useEffect(() => {
    const colors = []
    if(isRed) colors.push('red')
    if(isOrange) colors.push('orange')
    if(isBrown) colors.push('brown')
    if(isLightBrown) colors.push('light-brown')
    if(isYellow) colors.push('yellow')

    setFeatherColors(colors)
  }, [isRed, isOrange, isBrown, isLightBrown, isYellow]);

  return (
    <>
      <h1>Turkey Creator</h1>
      <h3 className="button-controls">Set the features of your turkey</h3>

      {/* User controls */}
      <div className="button-controls">
        Size:
        <button onClick={() => setSize('s')} disabled={size === 's' ? true : false}>Small</button>
        <button onClick={() => setSize('m')} disabled={size === 'm' ? true : false}>Medium</button>
        <button onClick={() => setSize('l')} disabled={size === 'l' ? true : false}>Large</button>
        <button onClick={() => setSize('xl')} disabled={size === 'xl' ? true : false}>X-Large</button>
      </div>
      <div className="button-controls">
        Feather Count:
        <input
          type="number"
          onChange={(e) => setFeatherCount(e.currentTarget.value)}
          defaultValue={0}
          min={0}
          max={10}
        />
      </div>
      <div className="button-controls">
        Feather Color(s):
        <label><input
          type="checkbox"
          onChange={(e) => setIsRed(e.currentTarget.checked)}
        />Red</label>
        <label><input
          type="checkbox"
          onChange={(e) => setIsOrange(e.currentTarget.checked)}
        />Orange</label>
        <label><input
          type="checkbox"
          onChange={(e) => setIsBrown(e.currentTarget.checked)}
        />Brown</label>
        <label><input
          type="checkbox"
          onChange={(e) => setIsLightBrown(e.currentTarget.checked)}
        />Light Brown</label>
        <label><input
          type="checkbox"
          onChange={(e) => setIsYellow(e.currentTarget.checked)}
        />Golden Yellow</label>
      </div>

      {/* Generated display based on user selections above */}
      <h3 className="button-controls">Enjoy your turkey</h3>
      <PictureDisplay
        sizeClass={sizeClass}
        featherCount={featherCount}
        featherColors={featherColors}
      />
      <Message sizeClass={sizeClass} featherCount={featherCount} />
    </>
  );
}

export default App;