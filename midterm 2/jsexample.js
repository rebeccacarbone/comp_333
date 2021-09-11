function Something(inputFirst, inputSecond) {
   this.first = inputFirst;
   this.second = inputSecond;

}

Something.prototype.addWith = function(amount) { return this.first + this.second + amount; }
Something.prototype.reverse = function() { return new Something(this.second, this.first); }



function runTest(test) {
    process.stdout.write(test.name + ": ");
    try {
        test();
        process.stdout.write("pass\n");
    } catch (error) {
        process.stdout.write("FAIL\n");
        console.log(error);
    }
} // runTest

function assertEquals(expected, received) {
    if (expected !== received) {
        throw ("\tExpected: " + expected.toString() + "\n" +
               "\tReceived: " + received.toString());
    }
} // assertEquals

function test1() {
    let obj = new Something("foo", "bar");
    assertEquals("foo", obj.first);
    assertEquals("bar", obj.second);
}

function test2() {
    let obj = new Something(1, 2);
    assertEquals(7, obj.addWith(4));
}
 
function test3() {
    let obj = new Something("blah", "baz");
    assertEquals("blahbazfoo", obj.addWith("foo"));
}
 
function test4() {
    let obj1 = new Something(1, "foo");
    let obj2 = obj1.reverse();
 
    assertEquals(1, obj1.first);
    assertEquals("foo", obj1.second);
 
    assertEquals("foo", obj2.first);
    assertEquals(1, obj2.second);
}
 
function test5() {
    let obj1 = new Something(2, 3);
    let obj2 = new Something(4, 5);
 
    assertEquals(obj1.addWith, obj2.addWith);
    assertEquals(obj1.reverse, obj2.reverse);
    assertEquals(false, obj1.hasOwnProperty("addWith"));
    assertEquals(false, obj1.hasOwnProperty("reverse"));
    assertEquals(false, obj2.hasOwnProperty("addWith"));
    assertEquals(false, obj2.hasOwnProperty("reverse"));    
}


function runTests(test) {
	runTest(test1);
	runTest(test2);
	runTest(test3);
	runTest(test4);
	runTest(test5);
}

