function DynamoDB() {
    this.addInput("A", "number");
    this.addInput("B", "number");
    this.addOutput("A+B", "number");
}

DynamoDB.title = "DynamoDB";
DynamoDB.size = [300, 50];

DynamoDB.prototype.onExecute = function () {
    let A = this.getInputData(0);
    if (A === undefined)
        A = 0;
    let B = this.getInputData(1);
    if (B === undefined)
        B = 0;
    this.setOutputData(0, A + B);
}

export default DynamoDB;
