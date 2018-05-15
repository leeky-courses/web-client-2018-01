function Person(first, last, gender, country) {
  this.first = first;
  this.last = last;
  this.gender = gender;
  this.country = country;
  this.age = 20;
}

Person.prototype.fullName = function() {
  return this.first + " " + this.last;
}

Person.prototype.school = "KMU";
