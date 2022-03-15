import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import styled from "styled-components";
import "./App.css";
import Earth from "./components/earth";

function App() {
  return (
    <CanvasContainer>
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;

const CanvasContainer = styled.div`
  height: 100%;
  width: 100%;
`;
