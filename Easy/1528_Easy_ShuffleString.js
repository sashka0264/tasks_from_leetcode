/*
You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the
character at the ith position moves to indices[i] in the shuffled string. Return the shuffled string.

Link: https://leetcode.com/problems/shuffle-string

Solution:
*/

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = (s, indices) => {
    const result = [];
    for(let i = 0; i < indices.length; i++) result[indices[i]] = s[i];
    return result.join('')
};
