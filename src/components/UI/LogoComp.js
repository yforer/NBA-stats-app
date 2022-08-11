const svgDir = require.context("../../assets");

const LogoComp = (props) => {
  return <img src={svgDir(`./${props.id}.png`)}></img>;
};

export default LogoComp;
