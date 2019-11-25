import * as THREE from 'three'
import {NURBSSurface} from './NURBSSurface.js'
import alphaTexture from '../../../../assets/textures/neon_gradient.png';

export default scene => {    
    const group = new THREE.Group();
    const subjectGeometry = deformGeometry();
    const subjectMaterial = new THREE.MeshStandardMaterial({ color: "#000", transparent: true, side: THREE.DoubleSide, alphaTest: 0.5 });
    subjectMaterial.alphaMap = new THREE.TextureLoader().load(alphaTexture);
    subjectMaterial.alphaMap.magFilter = THREE.NearestFilter;
    subjectMaterial.alphaMap.wrapS = THREE.RepeatWrapping;
    subjectMaterial.alphaMap.wrapT = THREE.RepeatWrapping;
    subjectMaterial.alphaMap.repeat.x = 1;
    subjectMaterial.alphaMap.repeat.y = 1;
    var object = new THREE.Mesh( subjectGeometry, subjectMaterial );
    group.add( object );
   // group.add(subjectWireframe);
    scene.add(group);

    group.rotation.z = Math.PI/4;

    const speed = 0.2;
    const textureOffsetSpeed = 0.2;

    function deformGeometry() {
        var nsControlPoints = [
            [
                new THREE.Vector4 ( -20, -20, 10, 10 ),
                new THREE.Vector4 ( -20, -10, -20, 10 ),
                new THREE.Vector4 ( -20, 10, 25, 10 ),
                new THREE.Vector4 ( -20, 20, -10, 10 )
            ],
            [
                new THREE.Vector4 ( 0, -20, 0, 10 ),
                new THREE.Vector4 ( 0, -10, -10, 5 ),
                new THREE.Vector4 ( 0, 10, 15, 5 ),
                new THREE.Vector4 ( 0, 20, 0, 10 )
            ],
            [
                new THREE.Vector4 ( 20, -20, -10, 10 ),
                new THREE.Vector4 ( 20, -10, 20, 10 ),
                new THREE.Vector4 ( 20, 10, -25, 10 ),
                new THREE.Vector4 ( 20, 20, 10, 10 )
            ]
        ];

        var degree1 = 2;
        var degree2 = 3;
        var knots1 = [ 0, 0, 0, 1, 1, 1 ];
        var knots2 = [ 0, 0, 0, 0, 1, 1, 1, 1 ];
        var nurbsSurface = new NURBSSurface( degree1, degree2, knots1, knots2, nsControlPoints );
    
        function getSurfacePoint( u, v, target ) {
    
            return nurbsSurface.getPoint( u, v, target );
    
        }
    
        var geometry = new THREE.ParametricBufferGeometry( getSurfacePoint, 20, 20 );

        return geometry;
    }

    function update(time) {
        const angle = time*speed;

        group.rotation.y = angle;
        subjectMaterial.alphaMap.offset.y = 0.55 + time * textureOffsetSpeed;
    }

    return {
        update
    }
}