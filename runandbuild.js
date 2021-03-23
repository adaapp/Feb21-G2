const sqlite3 = require('sqlite3').verbose();

function connect(){
  var db = new sqlite3.Database('db/database.sqlite', (err) =>{
    if (err){
      return console.error(err.message);
    }
    console.log('Connected to Database')
  })
  return db;
}

function init(db) {
  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS Staff(
      StaffID INTEGER NOT NULL PRIMARY KEY,
      FullName VARCHAR(80), 
      JobRole VARCHAR(50), 
      Question TEXT, 
      Answer VARCHAR(40),
      Device VARCHAR(30));`, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Creating table staff')
      }
    });
    db.run(`insert into Staff(
      FullName,
      JobRole,
      Question,
      Answer,
      Device
      ) VALUES 
      ("Vikas","Office Manager","What was your home town?","Cardiff","Laptop");`, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Inserting data into staff table')
      }
    });
    db.run(`CREATE TABLE IF NOT EXISTS Member(
      MemberID INTEGER NOT NULL PRIMARY KEY,
      FullName VARCHAR(80), 
      Disability VARCHAR(120), 
      Question TEXT, 
      Answer VARCHAR(50),
      Device VARCHAR(30));`, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Creating table Members')
      }
    });
    db.run(`insert into Member(FullName, Disability, Question, Answer, Device) VALUES
    ("Isla","Autism","What was your first pets name?","Twinkle Toes","Mobile");`, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Inserting data into members table')
      }
    });
    db.run(`CREATE TABLE IF NOT EXISTS Staff_Member(
      MemberID INTEGER NOT NULL,
      StaffID INTEGER NOT NULL,
      FOREIGN KEY (MemberID) REFERENCES Member(MemberID),
      FOREIGN KEY (StaffID) REFERENCES Staff(StaffID),
      PRIMARY KEY(MemberID, StaffID)
      );`, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Creating the staff_members table')
      }
    });
    db.run(`INSERT INTO Staff_Member(MemberID, StaffID) VALUES (1, 1);`, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Inserting data into staff_members table')
      }
    });
    db.run(`CREATE TABLE IF NOT EXISTS Resource(
      ResourceID INTEGER NOT NULL PRIMARY KEY,
      Link TEXT NOT NULL,
      Type VARCHAR(50),
      Interest VARCHAR(50)
      );`, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Creating the resources table')
      }
    });
    db.run(`insert into Resource(Link, Type, Interest) VALUES
      ("https://www.youtube.com/watch?v=hSaXBVYVcQg","Video","Art");`, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Inserting into the resources table')
      }
    });
  })
}

module.exports = { connect, init }