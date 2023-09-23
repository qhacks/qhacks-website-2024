// import Spline from '@splinetool/react-spline';

// export default function Crown() {
//   return (
//     <Spline scene="https://prod.spline.design/90Yi9N-dAHhFegtQ/scene.splinecode" />
//   );
// }

import Spline from '@splinetool/react-spline';
import { useEffect } from 'react';

export default function App(props) {
  useEffect(() => {
    fetch("https://prod.spline.design/02uq3OS0Uhmz07TK/scene.splinecode")
    .then(() => props.setShowLoadingScreen(false))
  })
  return (
    <Spline scene="https://prod.spline.design/02uq3OS0Uhmz07TK/scene.splinecode" />
  );
}
