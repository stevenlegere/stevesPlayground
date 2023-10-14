const whichMotorway = () => {
    let motorways = [
        {
            "motorway": "M1",
        },
        {
            "motorway": "M25",
        },
        {   
            "motorway": "M4",
        },
    ]
    return (motorways);
};
const resultOfMotorway = whichMotorway();
console.log(resultOfMotorway[0].motorway);
module.exports = whichMotorway;
