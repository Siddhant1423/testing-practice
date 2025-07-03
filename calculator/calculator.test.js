const calculator = require('./calculator');

describe('The Calculator',()=>{
    describe('Add',()=>{
        test('add two numbeers',()=>{
            expect(calculator.add(2,2)).toBe(4);
        });
        test('add a positive and a negative number',()=>{
            expect(calculator.add(2,-3)).toBe(-1);
        });
    });
    describe('Subtract',()=>{
        test('subtract two numbers',()=>{
            expect(calculator.subtract(2,2)).toBe(0);
        });
        test('subtract a +ve and -ve number',()=>{
            expect(calculator.subtract(2,-3)).toBe(5);
        })
    });
    describe('Multiply',()=>{
        test('multiply two numbers',()=>{
            expect(calculator.multiply(3,3)).toBe(9);
        });
        test('multiply a number by zero',()=>{
            expect(calculator.multiply(3,0)).toBe(0);
        })
        test('multiply a number by -ve number',()=>{
            expect(calculator.multiply(3,-3)).toBe(-9);
        });
    });
    describe('Divide',()=>{
        test('divide two numbers',()=>{
            expect(calculator.divide(2,2)).toBe(1);
        });
        test('returns decimal',()=>{
            expect(calculator.divide(7,2)).toBe(3.5);
        })
        test('divide by zero',()=>{
            expect(()=>calculator.divide(2,0)).toThrow('A number cannot be divided by zero');
        });
    });
});





