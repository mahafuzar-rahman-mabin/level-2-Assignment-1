const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier !== undefined) {
    return value * multiplier;
  }
  return value * 2;
};
multiplyValue(10, 5);

const processInput = (value: string | number | boolean): string | number => {
  if (typeof value === "string") {
    return value.trim().toLocaleLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return value ? "Active" : "Inactive";
  }
};
processInput("  TypeScript  ");

const formatCoordinate = (
  Coordinate: readonly [number, number, string],
): string => {
  const [latitude, longitude, locationName] = Coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};
formatCoordinate([23.81, 90.41, "Dhaka"]);

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};
concatenateArrays(["a", "b"], ["c", "d"]);

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const courses: Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  const popularCourses: Course[] = [];
  for (const course of courses) {
    if (course.students >= minStudents && course.isPublished === true) {
      popularCourses.push(course);
    }
  }
  return popularCourses;
};
getPopularCourses(courses, 80);

interface user {
  id: number;
  name: string;
  role: string;
}

const users: user[] = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  const result: T[K][] = [];
  for (const item of items) {
    result.push(item[key]);
  }

  return result;
};

pluckValues(users, "name");

class Employee {
  protected name: string;
  private baseSalary: number;
  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;
  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const manager = new Manager("Alice", 50000, "Engineering");

manager.getDetails();
manager.getRoleInfo();

const validateAgeAsync = async (age: number): Promise<string> => {
  if (age < 18) {
    throw new Error("Access Denied: Must be 18 or older");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return "Access Granted";
};

await validateAgeAsync(20);
await validateAgeAsync(15);
