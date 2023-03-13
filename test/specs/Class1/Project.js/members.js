class Members {
  
    membersInfo = {
        Name: "-",
        HouseId: 0,
        City: "-",
        CurrentStatus: true,
        TotalMembers: 0,
      };
    
      // constructor() {
      // this.isClean = false;
      // }
    
      clean() {
        this.isClean = true;
        console.log("The restaurant is cleaned now");
      }
    
      addMembers(x) {
        if (x < 1) {
          console.log("Please input atleast 1 member!");
        } else if (isNaN(x)) {
          console.log("Please input a number!");
        } else {
          this.membersInfo.TotalMembers += x;
        }
      }
    
      removeMembers(y) {
        if (y < 1) {
          console.log("Please input atleast 1 member!");
        } else if (isNaN(y)) {
          console.log("Please input a number!");
        } else if (y > TotalMembers) {
          console.log(
            "There are less members that the number of members you want to remove!"
          );
        } else {
          this.membersInfo.TotalMembers -= y;
        }
      }
    
      showCurrentMembers() {
    
    }
    
    clean() {
        console.log('Area is now clean');
      }

    
    }module.exports = Members;