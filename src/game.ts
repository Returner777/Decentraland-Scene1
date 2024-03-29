const scene = new Entity()
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
scene.addComponentOrReplace(transform)
engine.addEntity(scene)

const floorBaseGrass_01 = new Entity()
floorBaseGrass_01.setParent(scene)
const gltfShape = new GLTFShape('models/FloorBaseGrass_01/FloorBaseGrass_01.glb')
floorBaseGrass_01.addComponentOrReplace(gltfShape)
const transform_2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_01.addComponentOrReplace(transform_2)
engine.addEntity(floorBaseGrass_01)

const floorBaseGrass_01_2 = new Entity()
floorBaseGrass_01_2.setParent(scene)
floorBaseGrass_01_2.addComponentOrReplace(gltfShape)
const transform_3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_01_2.addComponentOrReplace(transform_3)
engine.addEntity(floorBaseGrass_01_2)

const floorBaseGrass_01_3 = new Entity()
floorBaseGrass_01_3.setParent(scene)
floorBaseGrass_01_3.addComponentOrReplace(gltfShape)
const transform_4 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_01_3.addComponentOrReplace(transform_4)
engine.addEntity(floorBaseGrass_01_3)

const floorBaseGrass_01_4 = new Entity()
floorBaseGrass_01_4.setParent(scene)
floorBaseGrass_01_4.addComponentOrReplace(gltfShape)
const transform_5 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_01_4.addComponentOrReplace(transform_5)
engine.addEntity(floorBaseGrass_01_4)

const brothel = new Entity()
brothel.setParent(scene)
const gltfShape_2 = new GLTFShape('models/brothel.glb')
brothel.addComponentOrReplace(gltfShape_2)
const transform_6 = new Transform({
  position: new Vector3(12.5, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.13217256906162334, 0.135395086824726, -0.26273387924169683)
})
brothel.addComponentOrReplace(transform_6)
engine.addEntity(brothel)

const fraldo = new Entity()
fraldo.setParent(scene)
const gltfShape_3 = new GLTFShape('models/fraldo.glb')
fraldo.addComponentOrReplace(gltfShape_3)
const transform_7 = new Transform({
  position: new Vector3(13, 0, 6.5),
  rotation: new Quaternion(0, -0.8314696123025452, 0, 0.5555702330196023),
  scale: new Vector3(3, 2, 2.5)
})
fraldo.addComponentOrReplace(transform_7)
engine.addEntity(fraldo)

const kavc = new Entity()
kavc.setParent(scene)
const gltfShape_4 = new GLTFShape('models/kavc.glb')
kavc.addComponentOrReplace(gltfShape_4)
const transform_8 = new Transform({
  position: new Vector3(16.5, 0.5, 19.5),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(0.5, 0.5, 0.5)
})
kavc.addComponentOrReplace(transform_8)
engine.addEntity(kavc)

const krogla = new Entity()
krogla.setParent(scene)
const gltfShape_5 = new GLTFShape('models/krogla.glb')
krogla.addComponentOrReplace(gltfShape_5)
const transform_9 = new Transform({
  position: new Vector3(7.5, 2.5, 21.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
krogla.addComponentOrReplace(transform_9)
engine.addEntity(krogla)

const lojtra = new Entity()
lojtra.setParent(scene)
const gltfShape_6 = new GLTFShape('models/lojtra.glb')
lojtra.addComponentOrReplace(gltfShape_6)
const transform_10 = new Transform({
  position: new Vector3(14.5, 5, 23),
  rotation: new Quaternion(0.06930858459954571, 0.7037018687631912, -0.06930858459954573, 0.7037018687631913),
  scale: new Vector3(1, -1, 1)
})
lojtra.addComponentOrReplace(transform_10)
engine.addEntity(lojtra)

const lojtrab = new Entity()
lojtrab.setParent(scene)
const gltfShape_7 = new GLTFShape('models/lojtrab.glb')
lojtrab.addComponentOrReplace(gltfShape_7)
const transform_11 = new Transform({
  position: new Vector3(11.5, 5, 21),
  rotation: new Quaternion(0, 0.9999999999999998, 0, 5.551115123125783e-17),
  scale: new Vector3(1, 1, 1)
})
lojtrab.addComponentOrReplace(transform_11)
engine.addEntity(lojtrab)

const plesisce = new Entity()
plesisce.setParent(scene)
const gltfShape_8 = new GLTFShape('models/plesisce.glb')
plesisce.addComponentOrReplace(gltfShape_8)
const transform_12 = new Transform({
  position: new Vector3(9, 0, 18),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plesisce.addComponentOrReplace(transform_12)
engine.addEntity(plesisce)

const reflektor = new Entity()
reflektor.setParent(scene)
const gltfShape_9 = new GLTFShape('models/reflektor.glb')
reflektor.addComponentOrReplace(gltfShape_9)
const transform_13 = new Transform({
  position: new Vector3(28, 3.5, 2.5),
  rotation: new Quaternion(0, -0.38268343236508967, 0, 0.9238795325112867),
  scale: new Vector3(0.25, 0.25, 0.25)
})
reflektor.addComponentOrReplace(transform_13)
engine.addEntity(reflektor)

const vodnablazina = new Entity()
vodnablazina.setParent(scene)
const gltfShape_10 = new GLTFShape('models/vodnablazina.glb')
vodnablazina.addComponentOrReplace(gltfShape_10)
const transform_14 = new Transform({
  position: new Vector3(10, 5.25, 20),
  rotation: new Quaternion(0.7071067811865471, 0, 0, 0.7071067811865479),
  scale: new Vector3(-0.7247448713915885, -0.7247448713915885, 0.2)
})
vodnablazina.addComponentOrReplace(transform_14)
engine.addEntity(vodnablazina)

const vrata = new Entity()
vrata.setParent(scene)
const gltfShape_11 = new GLTFShape('models/vrata.glb')
vrata.addComponentOrReplace(gltfShape_11)
const transform_15 = new Transform({
  position: new Vector3(8, 1.9, 12),
  rotation: new Quaternion(0, 0.9999999999999999, 0, 9.71445146547012e-17),
  scale: new Vector3(-0.6, 0.55, 1)
})
vrata.addComponentOrReplace(transform_15)
engine.addEntity(vrata)

const vrata_2 = new Entity()
vrata_2.setParent(scene)
vrata_2.addComponentOrReplace(gltfShape_11)
const transform_16 = new Transform({
  position: new Vector3(17, 6.5, 16.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5, 0.5, 1)
})
vrata_2.addComponentOrReplace(transform_16)
engine.addEntity(vrata_2)

const reflektor_2 = new Entity()
reflektor_2.setParent(scene)
reflektor_2.addComponentOrReplace(gltfShape_9)
const transform_17 = new Transform({
  position: new Vector3(29.5, 3.5, 28.5),
  rotation: new Quaternion(0, 0.9238795325112865, 0, -0.3826834323650896),
  scale: new Vector3(0.25, 0.25, 0.25)
})
reflektor_2.addComponentOrReplace(transform_17)
engine.addEntity(reflektor_2)

const reflektor_3 = new Entity()
reflektor_3.setParent(scene)
reflektor_3.addComponentOrReplace(gltfShape_9)
const transform_18 = new Transform({
  position: new Vector3(2.5, 3.5, 28.5),
  rotation: new Quaternion(0, 0.9238795325112866, 0, 0.3826834323650897),
  scale: new Vector3(0.25, 0.25, 0.25)
})
reflektor_3.addComponentOrReplace(transform_18)
engine.addEntity(reflektor_3)

const reflektor_4 = new Entity()
reflektor_4.setParent(scene)
reflektor_4.addComponentOrReplace(gltfShape_10)
const transform_19 = new Transform({
  position: new Vector3(2.5, 3.5, 2),
  rotation: new Quaternion(0, 0.3826834323650897, 0, 0.9238795325112867),
  scale: new Vector3(0.25, 0.25, 0.25)
})
reflektor_4.addComponentOrReplace(transform_19)
engine.addEntity(reflektor_4)

//const skrinja = new Entity()
//reflektor.setParent(scene)
//const gltfShape_9 = new GLTFShape('models/skrinja.glb')
//skrinja.addComponentOrReplace(gltfShape_11)
//const transform_13 = new Transform({
  //position: new Vector3(28, 3.5, 2.5),
  //rotation: new Quaternion(0, -0.38268343236508967, 0, 0.9238795325112867),
  //scale: new Vector3(2,4,2)