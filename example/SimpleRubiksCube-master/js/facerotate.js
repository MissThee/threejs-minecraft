var dx, dy, dz;
var rotateNormal;
var rotateR;
function faceselection(selectedfirst, facefirst, selectedlast, facelast, meshes){
    var radian = Math.PI / 2;
    var result = [];
    dx = selectedfirst.position.x - selectedlast.position.x;
    dy = selectedfirst.position.y - selectedlast.position.y;
    dz = selectedfirst.position.z - selectedlast.position.z;
    //console.log(selectedfirst, selectedlast);
    //console.log(dx,dy,dz);
    // console.log(facefirst, facelast);
    if(facefirst.id == facelast.id){
        var name = facefirst.name;
        //console.log(name);
        if(name == "frontX"){
            if(Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > Math.abs(dz)){
                for(var i = 0; i < meshes.length; i ++){
                    if(meshes[i].position.z == selectedfirst.position.z) result.push(meshes[i]);
                }
                rotateNormal = new THREE.Vector3(0,0,1);
                if(dy > 0) radian = - radian;
            }else if(Math.abs(dz) > Math.abs(dx) && Math.abs(dz) > Math.abs(dy)){
                for(var i = 0; i < meshes.length; i ++){
                    if(meshes[i].position.y == selectedfirst.position.y) result.push(meshes[i]);
                }
                rotateNormal = new THREE.Vector3(0,1,0);
                if(dz < 0) radian = - radian;
            }
        }else if(name =="backX"){
            if(Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > Math.abs(dz)){
                for(var i = 0; i < meshes.length; i ++){
                    if(meshes[i].position.z == selectedfirst.position.z) result.push(meshes[i]);
                }
                rotateNormal = new THREE.Vector3(0,0,1);
                if(dy < 0) radian = - radian;
            }else if(Math.abs(dz) > Math.abs(dx) && Math.abs(dz) > Math.abs(dy)){
                for(var i = 0; i < meshes.length; i ++){
                    if(meshes[i].position.y == selectedfirst.position.y) result.push(meshes[i]);
                }
                rotateNormal = new THREE.Vector3(0,1,0);
                if(dz > 0) radian = - radian;
            }
        }else if(name == "frontY"){
            if(Math.abs(dx) > Math.abs(dz) && Math.abs(dx) > Math.abs(dy)){
                for(var i = 0; i < meshes.length; i ++){
                    if(meshes[i].position.z == selectedfirst.position.z) result.push(meshes[i]);
                }
                rotateNormal = new THREE.Vector3(0,0,1);
                if(dx < 0) radian = - radian;
            }else if(Math.abs(dz) > Math.abs(dx) && Math.abs(dz) > Math.abs(dy)){
                for(var i = 0; i < meshes.length; i ++){
                    if(meshes[i].position.x == selectedfirst.position.x) result.push(meshes[i]);
                }
                rotateNormal = new THREE.Vector3(1,0,0);
                if(dz > 0) radian = - radian;
            }
        }else if(name == "backY"){
            if(Math.abs(dx) > Math.abs(dz) && Math.abs(dx) > Math.abs(dy)){
                for(var i = 0; i < meshes.length; i ++){
                    if(meshes[i].position.z == selectedfirst.position.z) result.push(meshes[i]);
                }
                rotateNormal = new THREE.Vector3(0,0,1);
                if(dx > 0) radian = - radian;
            }else if(Math.abs(dz) > Math.abs(dx) && Math.abs(dz) > Math.abs(dy)){
                for(var i = 0; i < meshes.length; i ++){
                    if(meshes[i].position.x == selectedfirst.position.x) result.push(meshes[i]);
                }
                rotateNormal = new THREE.Vector3(1,0,0);
                if(dz < 0) radian = - radian;
            }
        }else if(name == "frontZ"){
            if(Math.abs(dx) > Math.abs(dz) && Math.abs(dx) > Math.abs(dy)){
                for(var i = 0; i < meshes.length; i ++){
                    if(meshes[i].position.y == selectedfirst.position.y) result.push(meshes[i]);
                }
                rotateNormal = new THREE.Vector3(0,1,0);
                if(dx > 0) radian = - radian;
            }else if(Math.abs(dy) > Math.abs(dz) && Math.abs(dy) > Math.abs(dx)){
                for(var i = 0; i < meshes.length; i ++){
                    if(meshes[i].position.x == selectedfirst.position.x) result.push(meshes[i]);
                }
                rotateNormal = new THREE.Vector3(1,0,0);
                if(dy < 0) radian = - radian;
            }
        }else if(name == "backZ"){
            if(Math.abs(dx) > Math.abs(dz) && Math.abs(dx) > Math.abs(dy)){
                for(var i = 0; i < meshes.length; i ++){
                    if(meshes[i].position.y == selectedfirst.position.y) result.push(meshes[i]);
                }
                rotateNormal = new THREE.Vector3(0,1,0);
                if(dx < 0) radian = - radian;
            }else if(Math.abs(dy) > Math.abs(dz) && Math.abs(dy) > Math.abs(dx)){
                for(var i = 0; i < meshes.length; i ++){
                    if(meshes[i].position.x == selectedfirst.position.x) result.push(meshes[i]);
                }
                rotateNormal = new THREE.Vector3(1,0,0);
                if(dy > 0) radian = - radian;
            }
        }
        rotateR = radian;
    }
    
    return result;
}

// Rotate an object around an arbitrary axis in world space       
function rotateAroundWorldAxis(object, axis, radians) {
    var rotWorldMatrix = new THREE.Matrix4();
    rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);
    rotWorldMatrix.multiply(object.matrix);        // pre-multiply
    object.matrix = rotWorldMatrix;
    object.rotation.setFromRotationMatrix(object.matrix);
}

function facerotate(objects, axis, time){
    var r = rotateR / time;
    var px;
    var py;
    var rz;
    var newx;
    var newy;
    if(axis.z == 1){
        for(var i = 0; i < objects.length; i ++){
            objects[i].up = axis;
            px = objects[i].position.x;
            py = objects[i].position.y;
            rz = objects[i].rotation.z;
            newx = Math.pow(px * px + py * py, 0.5) * Math.cos(r + Math.atan2(py, px));
            newy = Math.pow(px * px + py * py, 0.5) * Math.sin(r + Math.atan2(py, px));
            objects[i].position.x = newx;
            objects[i].position.y = newy;
            rotateAroundWorldAxis(objects[i], axis, r);           
        }
    }else if(axis.y == 1){
        for(var i = 0; i < objects.length; i ++){
            objects[i].up = axis;
            px = objects[i].position.x;
            py = objects[i].position.z;
            rz = objects[i].rotation.y;
            newx = Math.pow(px * px + py * py, 0.5) * Math.cos(-r + Math.atan2(py, px));
            newy = Math.pow(px * px + py * py, 0.5) * Math.sin(-r + Math.atan2(py, px));
            objects[i].position.x = newx;
            objects[i].position.z = newy;
            rotateAroundWorldAxis(objects[i], axis, r); 
        }
    }else if(axis.x == 1){
        for(var i = 0; i < objects.length; i ++){
            objects[i].up = axis;
            px = objects[i].position.z;
            py = objects[i].position.y;
            rz = objects[i].rotation.x;
            newx = Math.pow(px * px + py * py, 0.5) * Math.cos(-r + Math.atan2(py, px));
            newy = Math.pow(px * px + py * py, 0.5) * Math.sin(-r + Math.atan2(py, px));
            objects[i].position.z = newx;
            objects[i].position.y = newy;
            rotateAroundWorldAxis(objects[i], axis, r); 
        }
    } 
}
