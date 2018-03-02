/**
 * Perform a right-to-left function composition, 
 * filter out any non functions from the list
 *
 * @param {...(*|Function)} composeable list of functions to compose
 *
 * @returns {*} final return value
 */

const forgivingCompose = (...fns) => firstArgument => (
    fns.filter( fn => typeof fn === 'function' )
        .reverse()
        .reduce(
             (a, b) => b.call(this, a), firstArgument
        )
);

export default forgivingCompose;