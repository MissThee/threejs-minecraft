var sides = [[0, 1, 2, 3, 4, 5, 6, 7, 8],
    [18, 19, 20, 21, 22, 23, 24, 25, 26],
    [0, 3, 6, 9, 12, 15, 18, 21, 24],
    [2, 5, 8, 11, 14, 17, 20, 23, 26],
    [0, 1, 2, 9, 10, 11, 18, 19, 20],
    [6, 7, 8, 15, 16, 17, 24, 25, 26]
];

function computeSides(whichside) {
    var object = new THREE.Mesh();
    for (var i = 0; i < sides[whichside].length; i++) {
        object.add(meshes[sides[whichside][i]].clone());
        scene.remove(meshes[sides[whichside][i]]);
    }

    return object;
}