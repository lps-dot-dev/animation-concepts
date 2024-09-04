const defineCube = () => {
  W.add("cube", {
    vertices: [...''].map(a=>(a.codePointAt())/127),
    indices: [0,1,2,0,2,3,4,7,6,4,6,5,1,5,6,1,6,2,2,6,7,2,7,3,4,0,3,4,3,7,0,4,5,0,5,1]
  });
}

export { defineCube };
