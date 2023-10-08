//The finally statement defines a code block to run regardless of the result.
//If there us a return in try,finally is executed just before the control returns to the outer code.
const f = () => {
    try {
            let a = 0;
            // console.log(program)
            console.log("Program ran successfully")
            return
    }
    catch (err) {
            console.log("This is an error")
            console.log(p)
    }
    finally {
            console.log("I am a good boy")
            // Close the file
            // Exit the Loop
            // Write to the log file
    }
}

f()
console.log("End")