import AFRAME from 'aframe';

import 'aframe-gltf-part-component';
import 'aframe-extras';

import Mover from './components/Mover';
import QuickTurn from './components/QuickTurn';
import CCBasicMaterial from './components/CCBasicMaterial';
import GLTFCamera from './components/GLTFCamera';
import GeoInspector from './components/GeoInspector';
import FBXLoader from './components/FBXLoader';
import AnimationPlayer from './components/AnimationPlayer';

import TestSystem from './systems/TestSystem';
import SoundSystem from './systems/SoundSystem';

const THREE = AFRAME.THREE;

// Register all shaders


// Register all systems
AFRAME.registerSystem('test-system', TestSystem);
AFRAME.registerSystem('sound-system', SoundSystem);

// Register all components
AFRAME.registerComponent('gltf-camera', GLTFCamera);
AFRAME.registerComponent('mover', Mover);
AFRAME.registerComponent('quick-turn', QuickTurn);
AFRAME.registerComponent('geo-inspect', GeoInspector);
AFRAME.registerComponent('ccbasic-material', CCBasicMaterial);
AFRAME.registerComponent('fbx', FBXLoader);
AFRAME.registerComponent('animation-player', AnimationPlayer);
