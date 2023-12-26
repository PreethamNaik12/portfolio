import { useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";

import villageScene from "../assets/3d/Village.glb";
import { a } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";

const Village = ({ ...props }) => {

    console.log(props)

    const villageRef = useRef();

    const { nodes, materials } = useGLTF(villageScene);

    const scroll = useScroll()

    useFrame((state) => {
        // The offset is between 0 and 1, you can apply it to your models any way you like
        const offset = 1 - scroll.offset
        state.camera.position.set(Math.sin(offset) * +10, Math.atan(offset * Math.PI * 2) * 5, Math.cos((offset * Math.PI) / 3) * +10)
        state.camera.lookAt(0, 2, 4)
    })

    return (
        <a.group ref={villageRef} {...props}>
            <mesh
                geometry={nodes.House_02.geometry}
                material={materials.Village}
                position={[2.599, 1.889, 31]}
            />
            <mesh
                geometry={nodes.House_03.geometry}
                material={materials.Village}
                position={[20.61, 1.862, 30.813]}
            />
            <mesh
                geometry={nodes.House_04.geometry}
                material={materials.Village}
                position={[-5.562, 2.047, 13.578]}
            />
            <mesh
                geometry={nodes.House_05.geometry}
                material={materials.Village}
                position={[11.708, 2.044, 13.585]}
            />
            <mesh
                geometry={nodes.House_07.geometry}
                material={materials.Village}
                position={[-14.086, 2.746, -0.197]}
            />
            <mesh
                geometry={nodes.House_06.geometry}
                material={materials.Village}
                position={[19.554, 2.691, -0.15]}
            />
            <mesh
                geometry={nodes.Windmill.geometry}
                material={materials.Village}
                position={[10.891, 7.715, -48.293]}
            />
            <mesh
                geometry={nodes.Wood_Car.geometry}
                material={materials.Village}
                position={[3.467, 0.371, 39.252]}
            />
            <mesh
                geometry={nodes.Well.geometry}
                material={materials.Village}
                position={[5.59, 1.207, 39.294]}
            />
            <mesh
                geometry={nodes.Street_Lamp.geometry}
                material={materials.Village}
                position={[7.223, 3.217, 39.22]}
            />
            <mesh
                geometry={nodes.Tomatoes_Field.geometry}
                material={materials.Village}
                position={[11.594, 0.891, -34.25]}
            />
            <mesh
                geometry={nodes.Sunflower_Field.geometry}
                material={materials.Village}
                position={[23.729, 1.331, -34.049]}
            />
            <mesh
                geometry={nodes.Corn_Field.geometry}
                material={materials.Village}
                position={[-0.774, 1.012, -34.357]}
            />
            <mesh
                geometry={nodes.Empty_Field.geometry}
                material={materials.Village}
                position={[-15.193, 0.523, -33.848]}
            />
            <mesh
                geometry={nodes.Tractor_Red.geometry}
                material={materials.Village}
                position={[-2.505, 0.997, 39.712]}
            />
            <mesh
                geometry={nodes.Tractor_Blue.geometry}
                material={materials.Village}
                position={[-0.24, 0.996, 39.712]}
            />
            <mesh
                geometry={nodes.Tree_02.geometry}
                material={materials.Village}
                position={[-17.302, 2.897, 37.832]}
            />
            <mesh
                geometry={nodes.Tree_01.geometry}
                material={materials.Village}
                position={[-22.836, 4.109, 36.751]}
            />
            <mesh
                geometry={nodes.Tree_03.geometry}
                material={materials.Village}
                position={[28.727, 2.861, 37.776]}
            />
            <mesh
                geometry={nodes.Dry_Tree_02.geometry}
                material={materials.Village}
                position={[-17.319, 2.72, 41.258]}
            />
            <mesh
                geometry={nodes.Dry_Tree_01.geometry}
                material={materials.Village}
                position={[-20.445, 2.055, 40.99]}
            />
            <mesh
                geometry={nodes.Flower_Blue.geometry}
                material={materials.Village}
                position={[7.847, 0.116, 46.933]}
            />
            <mesh
                geometry={nodes.Flower_Purple.geometry}
                material={materials.Village}
                position={[7.965, 0.116, 46.976]}
            />
            <mesh
                geometry={nodes.Flower_Yellow.geometry}
                material={materials.Village}
                position={[8.095, 0.116, 46.957]}
            />
            <mesh
                geometry={nodes.Stone_06.geometry}
                material={materials.Village}
                position={[10.878, 0.057, 46.853]}
            />
            <mesh
                geometry={nodes.Stone_05.geometry}
                material={materials.Village}
                position={[11.42, 0.022, 46.845]}
            />
            <mesh
                geometry={nodes.Stone_04.geometry}
                material={materials.Village}
                position={[11.951, 0.017, 46.848]}
            />
            <mesh
                geometry={nodes.Stone_03.geometry}
                material={materials.Village}
                position={[12.539, 0.028, 46.868]}
            />
            <mesh
                geometry={nodes.Stone_01.geometry}
                material={materials.Village}
                position={[13.661, 0.014, 46.81]}
            />
            <mesh
                geometry={nodes.Stone_02.geometry}
                material={materials.Village}
                position={[13.142, 0.002, 46.854]}
            />
            <mesh
                geometry={nodes.Stand_Purple.geometry}
                material={materials.Village}
                position={[12.53, 1.516, 39.424]}
            />
            <mesh
                geometry={nodes.Stand_Wood.geometry}
                material={materials.Village}
                position={[15.022, 0.724, 39.434]}
            />
            <mesh
                geometry={nodes.Stand_Empty_Wood.geometry}
                material={materials.Village}
                position={[16.575, 0.582, 39.418]}
            />
            <mesh
                geometry={nodes.Stand_Orange.geometry}
                material={materials.Village}
                position={[19.633, 0.992, 39.464]}
            />
            <mesh
                geometry={nodes.Box.geometry}
                material={materials.Village}
                position={[2.371, 0.251, 46.979]}
            />
            <mesh
                geometry={nodes.Vooden_Barrel.geometry}
                material={materials.Village}
                position={[3.187, 0.407, 46.979]}
            />
            <mesh
                geometry={nodes.Chest.geometry}
                material={materials.Village}
                position={[4.372, 0.158, 46.979]}
            />
            <mesh
                geometry={nodes.Wooden_Case.geometry}
                material={materials.Village}
                position={[5.713, 0.196, 46.983]}
            />
            <mesh
                geometry={nodes.Woods.geometry}
                material={materials.Village}
                position={[-11.592, 0.199, 39.597]}
            />
            <mesh
                geometry={nodes.Wood_02.geometry}
                material={materials.Village}
                position={[-7.199, 0.468, 38.794]}
            />
            <mesh
                geometry={nodes.Billet_01.geometry}
                material={materials.Village}
                position={[-10.276, 0.364, 39.185]}
            />
            <mesh
                geometry={nodes.Billet_02.geometry}
                material={materials.Village}
                position={[-9.308, 0.362, 39.249]}
            />
            <mesh
                geometry={nodes.Billet_03.geometry}
                material={materials.Village}
                position={[-8.376, 0.52, 39.842]}
            />
            <mesh
                geometry={nodes.Tower.geometry}
                material={materials.Village}
                position={[0.449, 4.691, -48.475]}
            />
            <mesh
                geometry={nodes.Fence.geometry}
                material={materials.Village}
                position={[-13.957, 0.418, 46.961]}
            />
            <mesh
                geometry={nodes.Fence_Small.geometry}
                material={materials.Village}
                position={[-10.228, 0.422, 46.958]}
            />
            <mesh
                geometry={nodes.Fence_Crack.geometry}
                material={materials.Village}
                position={[-6.505, 0.415, 46.961]}
            />
            <mesh
                geometry={nodes.Fence_Bold.geometry}
                material={materials.Village}
                position={[-1.646, 0.459, 46.961]}
            />
            <mesh
                geometry={nodes.Bank_02.geometry}
                material={materials.Village}
                position={[16.98, 0.315, 47.224]}
            />
            <mesh
                geometry={nodes.Bank_01.geometry}
                material={materials.Village}
                position={[20.245, 0.425, 47.09]}
            />
            <mesh
                geometry={nodes.Barn_01.geometry}
                material={materials.Village}
                position={[-19.599, 1.938, -15.649]}
            />
            <mesh
                geometry={nodes.Barn_02.geometry}
                material={materials.Village}
                position={[3.93, 2.03, -15.959]}
            />
            <mesh
                geometry={nodes.Barn_03.geometry}
                material={materials.Village}
                position={[25.296, 2.822, -15.53]}
            />
            <mesh
                geometry={nodes.Bushes_01.geometry}
                material={materials.Village}
                position={[22.353, 0.265, 39.505]}
            />
            <mesh
                geometry={nodes.Bushes_02.geometry}
                material={materials.Village}
                position={[23.596, 0.282, 39.474]}
            />
            <mesh
                geometry={nodes.Bushes_03.geometry}
                material={materials.Village}
                position={[25.277, 0.47, 39.505]}
            />
            <mesh
                geometry={nodes.Water_Tank.geometry}
                material={materials.Village}
                position={[-8.848, 5.154, -49.364]}
            />
            <mesh
                geometry={nodes.Map.geometry}
                material={materials.Village}
                position={[6.372, -0.258, -122.555]}
            />
        </a.group>
    );
}

export default Village
