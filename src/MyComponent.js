const MyComponent = props =>{
  return <div>안녕하세요, 제이름은{props.name}입니다.</div>
};

MyComponent.defaultProps ={
  name:'기본이름'
}

export default MyComponent;