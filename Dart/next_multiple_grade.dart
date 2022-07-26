import 'dart:io';

void main() {
  var grades = int.parse(stdin.readLineSync()!);

  var next_mul = grades + (5 - grades % 5);
  var result = next_mul - grades;

  if (result < 3 && grades >= 38) {
    print(next_mul);
  } else if (grades < 38) {
    print(grades);
  } else {
    print(grades);
  }
}
