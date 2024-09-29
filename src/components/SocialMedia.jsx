import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Aphrodite from "./Aphrodite";
import styled from "styled-components";
import Mac from "./Mac";
import Linkedin from "./Linkedin";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 200px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const SocialMedia = () => {
  return (
    <>
        <Canvas>
        <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6}>
            {/* <Aphrodite /> */}
            <Linkedin />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
            </Canvas>
        <Desc>
            Loren ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </Desc>
    </>
    )
}

export default SocialMedia