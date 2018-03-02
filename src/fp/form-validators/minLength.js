
const minLength = expectedLength => givenString => (
    givenString.length >= expectedLength
);

export default minLength;