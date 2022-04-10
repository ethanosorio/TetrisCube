function generateShapes(){
    var shape1 = []; // merge array
    const material1 = new THREE.MeshLambertMaterial( {color: 0xff0000});
    var newBox1 = new THREE.BoxBufferGeometry(1,1,3); // buffer geometry
        newBox1.translate(0,0,0); // set position 
        shape1.push(newBox1); // add to merge array
    var newBox2 = new THREE.BoxBufferGeometry(1,2,1); // 2nd buffer geometry
        newBox2.translate(-1,0.5,-1); // set position
        shape1.push(newBox2); // add to merge array
    var singleGeometry = THREE.BufferGeometryUtils.mergeBufferGeometries(shape1);
    const object1 = new THREE.Mesh(singleGeometry, material1); 
    object1.position.y = 2;
    object1.position.z = -3;
    scene.add(object1);
    objects.push(object1);

    var shape2 = []; // merge array
    const material2 = new THREE.MeshLambertMaterial( {color: 0x00ff00});
    var newBox1 = new THREE.BoxBufferGeometry(1,1,3); // buffer geometry
        newBox1.translate(0,0,0); // set position 
        shape2.push(newBox1); // add to merge array
    var newBox2 = new THREE.BoxBufferGeometry(1,1,1); // 2nd buffer geometry
        newBox2.translate(0,1,0); // set position
        shape2.push(newBox2); // add to merge array
    var singleGeometry = THREE.BufferGeometryUtils.mergeBufferGeometries(shape2);
    const object2 = new THREE.Mesh(singleGeometry, material2); 
    object2.position.x = 2;
    object2.position.z = -3;
    scene.add(object2);
    objects.push(object2);

    var shape3 = []; // merge array
    const material3 = new THREE.MeshLambertMaterial( {color: 0x0000ff});
    var newBox1 = new THREE.BoxBufferGeometry(1,3,1); // buffer geometry
        newBox1.translate(0,0,0); // set position 
        shape3.push(newBox1); // add to merge array
    var newBox2 = new THREE.BoxBufferGeometry(1,1,1); // 2nd buffer geometry
        newBox2.translate(-1,1,0); // set position
        shape3.push(newBox2); // add to merge array
    var singleGeometry = THREE.BufferGeometryUtils.mergeBufferGeometries(shape3);
    const object3 = new THREE.Mesh(singleGeometry, material3); 
    object3.position.y = -1;
    object3.position.z = 4;
    scene.add(object3);
    objects.push(object3);

    var shape4 = []; // merge array
    const material4 = new THREE.MeshLambertMaterial( {color: 0xff00ff});
    var newBox1 = new THREE.BoxBufferGeometry(1,2,1); // buffer geometry
        newBox1.translate(0,0,0); // set position 
        shape4.push(newBox1); // add to merge array
    var newBox2 = new THREE.BoxBufferGeometry(1,2,1); // 2nd buffer geometry
        newBox2.translate(-1,1,0); // set position
        shape4.push(newBox2); // add to merge array
    var singleGeometry = THREE.BufferGeometryUtils.mergeBufferGeometries(shape4);
    const object4 = new THREE.Mesh(singleGeometry, material4); 
    object4.position.y = -3;
    scene.add(object4);
    objects.push(object4);

    var shape5 = []; // merge array
    const material5 = new THREE.MeshLambertMaterial( {color: 0x00ffff});
    var newBox1 = new THREE.BoxBufferGeometry(1,1,2); // buffer geometry
        newBox1.translate(0,0,0); // set position 
        shape5.push(newBox1); // add to merge array
    var newBox2 = new THREE.BoxBufferGeometry(1,1,1); // buffer geometry
        newBox2.translate(0,-1,-0.5); // set position 
        shape5.push(newBox2); // add to merge array
    var singleGeometry = THREE.BufferGeometryUtils.mergeBufferGeometries(shape5);
    const object5 = new THREE.Mesh(singleGeometry, material5); 
    object5.position.x = -3;
    object5.position.y = 3;
    object5.position.z = -1;
    scene.add(object5);
    objects.push(object5);

    var shape6 = []; // merge array
    const material6 = new THREE.MeshLambertMaterial( {color: 0xffff00});
    var newBox1 = new THREE.BoxBufferGeometry(2,1,1); // buffer geometry
        newBox1.translate(0,0,0); // set position 
        shape6.push(newBox1); // add to merge array
    var newBox2 = new THREE.BoxBufferGeometry(1,1,2); // 2nd buffer geometry
        newBox2.translate(0.5,-1,-0.5); // set position
        shape6.push(newBox2); // add to merge array
    var singleGeometry = THREE.BufferGeometryUtils.mergeBufferGeometries(shape6);
    const object6 = new THREE.Mesh(singleGeometry, material6);
    object6.position.x = -4;
    object6.position.z = 1;
    scene.add(object6);
    objects.push(object6);

    var shape7 = []; //merge array
    const material7 = new THREE.MeshLambertMaterial( {color: 0xffa500});
    var newBox1 = new THREE.BoxBufferGeometry(1,2,1); // buffer geometry
        newBox1.translate(0,0,0); // set position 
        shape7.push(newBox1); // add to merge array
    var newBox2 = new THREE.BoxBufferGeometry(1,1,1); // 2nd buffer geometry
        newBox2.translate(1,0.5,0); // set position
        shape7.push(newBox2); // add to merge array
    var singleGeometry = THREE.BufferGeometryUtils.mergeBufferGeometries(shape7);
    const object7 = new THREE.Mesh(singleGeometry, material7);
    object7.position.x = 4;
    scene.add(object7);
    objects.push(object7);
}