import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'; 
import Model from './Model.jsx';

const CrownV2 = (props) => {
    return(
        <div className='w-full h-full'>
            <Canvas
                camera={{fov: 80, position: [0, 0, 6]}}
            >
                <directionalLight intensity={0.7} position={[0,0,10]} color={'#B3B3B3'} />
                <ambientLight intensity={0.75} color={"#D3D3D3"}/>
                <Model setShowLoadingScreen={props.setShowLoadingScreen}/>
            </Canvas>
        </div>
    );
};

export default CrownV2;