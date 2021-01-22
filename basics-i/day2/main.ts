/* Primitive data types
 * - Cannot be modified once created
 */

let word = 'JavaScript'
//  word[0] = 'Y'  // Error

/* Non-Primitimve Data Types
 * - Mutable
 * - Cannot be compared by value because they are reference types and thus compared by reference instead of value
 */

let nums = [1, 2, 3]
nums[0] = 10

console.log(nums)

let nums2 = [1, 2, 3]
let nums3 = [1, 2, 3]

console.log(nums2 == nums3)  // Returns false

const pi = Math.PI

console.log(pi)
console.log(Math.round(pi))
console.log(Math.round(9.5))
console.log(Math.floor(pi))
console.log(Math.ceil(pi))
console.log(Math.min(1, 3, 3, 4, 5))
console.log(Math.max(1, 3, 3, 4, 5))

let randNum = Math.random()
console.log(randNum)