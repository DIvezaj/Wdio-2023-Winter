// const Members = require("./Members");

// class house extends Members {}

class House {
    static houseIdCounter = 0;
  
    houseInfo = {
      Name: "-",
      HouseId: 0,
      City: "-",
      CurrentStatus: 'locked',
      TotalMembers: 0,
    };
  
    constructor(Name, cityName, houseMembers) {
      // Create if, else if
  
      this.houseInfo.City = cityName;
      this.houseInfo.TotalMembers = houseMembers;
      this.houseInfo.Name = Name;
      this.houseInfo.CurrentStatus = this.houseInfo.CurrentStatus;
      this.houseInfo.HouseId = ++House.houseIdCounter;
      // console.log(`\nYour allowed to use, current status is ${this.houseInfo.CurrentStatus}!`
      // );
      console.log(`\nYour new house Id is ${this.houseInfo.HouseId}`);
    }
  
    lock() {
      if (this.houseInfo.CurrentStatus === 'locked') {
        console.log("House is already locked");
      } else if (this.houseInfo.CurrentStatus === 'unlocked') {
        this.houseInfo.CurrentStatus = 'locked';
        console.log("House is now locked");
      }
    }
  
    unlock() {
      if (this.houseInfo.CurrentStatus === 'unlocked') {
        console.log("House is already unlocked");
      } else if (this.houseInfo.CurrentStatus === 'locked') {
        this.houseInfo.CurrentStatus = 'unlocked';
        console.log("The house is unlocked");
      } 
  
    }
  
    showHouseDetails() {
      console.log(`House Details\n`);
      console.log(`Name : ${this.houseInfo.Name}`);
      console.log(`City : ${this.houseInfo.City}`);
      console.log(`Current Status : ${this.houseInfo.CurrentStatus}`);
      console.log(`Total Members: ${this.houseInfo.TotalMembers}`);
      console.log(`House Id : ${this.houseInfo.HouseId}`);
    }
  }module.exports = House;