import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { VideoTexture, DoubleSide } from "three";
import { Html } from "@react-three/drei";

export default function Video2(props) {
    const videoRef = useRef();
    const meshRef = useRef();
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(true);
    
    useFrame(() => {
        if (videoRef.current !== undefined) {
            <video ref={videoRef} src="/Static/video.mp4" />;
            meshRef.current.material.map = new VideoTexture(videoRef.current);
        }
        if (playing) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
        videoRef.current.muted = muted;
    }, [playing]);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleMute = () => {
    setMuted(!muted);
    };

  return (
    <mesh {...props} ref={meshRef}>
      <planeGeometry args={[20, 8]} />
      <meshBasicMaterial opacity={0}  side={DoubleSide} />
      <Html>
        <video
          ref={videoRef}
          src="/Static/video.mp4"
                  muted={muted}
                  loop={true}
          style={{ display: "none" }}
        />
        <div>
                  <button onDoubleClick={handlePlayPause}>
            {playing ? "Pause" : "Play"}
          </button>
          <button onDoubleClick={handleMute}>{muted ? "Unmute" : "Mute"}</button>
        </div>
      </Html>
    </mesh>
  );
}
