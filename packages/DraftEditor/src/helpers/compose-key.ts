interface BlazeComponent {
  id: string;
  type: string;
  name: string;
}

const composeKey = (component: BlazeComponent) => {
  if (!component) return '';
  const { id, type, name } = component;
  return [id, type, name].join('-');
};

export default composeKey;
