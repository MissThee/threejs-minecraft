
function cubes(x, y, z, geometry ,side1Color, side2Color, side3Color, side4Color, side5Color, side6Color) {
    x = x || 0;
    y = y || 0;
    z = z || 0;

    var materials = [];
    var myFaces = [];
    myFaces.push(faces(side1Color));
    myFaces.push(faces(side2Color));
    myFaces.push(faces(side3Color));
    myFaces.push(faces(side4Color));
    myFaces.push(faces(side5Color));
    myFaces.push(faces(side6Color));
    for (var i = 0; i < 6; i++) {
        var texture = new THREE.Texture(myFaces[i]);
        texture.needsUpdate = true;
        materials.push(new THREE.MeshLambertMaterial({
            map: texture,
            
        }));

    }
    mesh = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
    mesh.position.x = x;
    mesh.position.y = y;
    mesh.position.z = z;
    return mesh;
}