/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const calculatePayroll = function(records) {
    const employeeTotal = records.map((employee) => {
        return allWagesFor.call(employee)
    });

    const payroll = employeeTotal.reduce((total, currentValue) => {
        return total + currentValue;
    }, 0);
    return payroll;
}

const createEmployeeRecord = function(recordArray) {
    const testEmployee = {
        firstName: recordArray[0],
        familyName: recordArray[1],
        title: recordArray[2],
        payPerHour: recordArray[3],
        timeInEvents: [],
        timeOutEvents: [],
    };
    return testEmployee;
};

const createEmployeeRecords = function(recordArray2) {
    return recordArray2.map(elem => {
        return createEmployeeRecord(elem);
    })
}

const createTimeInEvent = function(date) {
    const inDate = date.split("");
    const inTime = {
        type: "TimeIn",
        hour: parseInt(inDate[1]),
        date: inDate[0],
    };
    this.timeInEvents = [...this.timeInEvents, inTime];
    return this;
}

const createTimeOutEvent = function(date) {
    const outDate = date.split("");
    const outTime = {
        type: "TimeOut",
        hour: parseInt(outDate[1]),
        date: outDate[0],
    };

    this.timeOutEvents = [...this.timeOutEvents, outTime];
    return this;
}

const hoursWorkedOnDate = function(date) {
    for (let i = 0; i < this.timeInEvents.length; i++) {
        if (date === this.timeInEvents[i].date) {
            const arrivalTime = this.timeInEvents[i].hour;
            const departureTime = this.timeOutEvents[i].hour;
            const timeTaken = departureTime - arrivalTime;
            return timeTaken / 100;
        }
    }
} 

const wagesEarnedOnDate = function(date) {
    const timeTaken = hoursWorkedOnDate.call(this, date);
    return timeTaken * this.payPerHour;
}

const findEmployeeByFirstName = function(srcArray, firstName) {
    const targetArray = srcArray.find((elem) => {
        return elem.firstName === firstName;
    })
    return targetArray;
}

