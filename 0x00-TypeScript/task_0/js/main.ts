// interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }

// to create an object
  const student1: Student = {
    firstName: "jinyoung",
    lastName: "park",
    age: 26,
    location: "seoul",
  };

  const student2: Student = {
    firstName: "Mark",
    lastName: "Tuan",
    age: 27,
    location: "LA",
  };

  // create a list
  const studentsList: Array<Student> = [student1, student2];

  // Using Vanilla Javascript

  const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
  const table: HTMLTableElement = document.createElement('table');
  const thead: HTMLTableSectionElement = document.createElement('thead');
  const tbody: HTMLTableSectionElement = document.createElement('tbody');
  const tr: HTMLTableRowElement = document.createElement('tr');
  const th1: HTMLTableCellElement = document.createElement('td');
  const th2: HTMLTableCellElement = document.createElement('td');
  
  th1.innerHTML = 'firstName';
  th2.innerHTML = 'location';

  body.append(table);
  table.append(thead);
  table.append(tbody)
  thead.append(tr);
  tr.append(th1);
  tr.append(th2);

studentsList.forEach(element => {
  const trTb: HTMLTableRowElement = document.createElement('tr');
  tbody.append(trTb);

  let td: HTMLTableCellElement = document.createElement('td');
  td.innerHTML = element.firstName;
  trTb.append(td);

  td = document.createElement('td');
  td.innerHTML = element.location;
  trTb.append(td);
});
