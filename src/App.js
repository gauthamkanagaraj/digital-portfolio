import Wrapper from './js/Wrapper.js';
import Loader from './js/Loader.js';
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    let timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer)

  }, []);

  if(loading) {
    return <Loader />
  } else {
    return <Wrapper />
  }

}

export default App;

//public Changes - Favicon and title
//Prod Build and Deploy