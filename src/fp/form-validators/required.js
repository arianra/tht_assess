
const isRequired = x => (
    x != null && String(x).trim().length > 0
);

export default isRequired;