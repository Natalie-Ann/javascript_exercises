/*
A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.
To be a valid triangle, the sum of the angles must be exactly 180 degrees, 
and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and returns one 
of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about 
floating point errors. You may also assume that the arguments are in degrees.

Input: three numbers
Output: string

Explicits:  - Invalid triangles = angle less than or equal to 0, sum of angles = 180
            -  Right triangle = one angle is 90
            - Obtuse triange = one angle greater than 90
            - Acute triangle = 3 angles are less than 90
            - all inputs are integers/in degrees
Implicits:  

Data Structure: numbers --> conditional statements --> string

Algorithms:
- Start function with 3 number parameters (angle1, angle2, angle3)
- Check if valid triangle
  - if one of the angles is <= 0, invalid
  - if sum of angles !== 189, invalid
- If is a triangle
  - Check for type of triangle
    - if one anlge === 90, right
    - if 3 angles are < 90 acute
    - else it's obutse?
*/

function triangle(angle1, angle2, angle3) {
  if ((angle1 + angle2 + angle3 !== 180) || (angle1 <= 0) || (angle2 <= 0) || (angle3 <= 0)) return 'invalid';
  if (angle1 === 90 || angle2 === 90 || angle3 === 90) return 'right';
  if (angle1 > 90 || angle2 > 90 || angle3 > 90) return 'obtuse';
  return 'acute';
}


console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"