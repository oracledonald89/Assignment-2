const student = { name: "mike", score: 50 };

Object.freeze(student);

student.score = 90;
console.log("After changing score:", student);

student.grade = "A";
console.log("After adding grade:", student);

const grades = [1, 2, 3];
Object.freeze(grades);

try {
  grades.push(4);
} catch (error) {
  console.log("Array error:", error.message);
}

console.log("Grades:", grades);

try {
  student = { name: "Bola", score: 70 };
} catch (error) {
  console.log("Reassignment error:", error.message);
}
